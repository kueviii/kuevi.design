/* Home: the subject list drives the preview panel and the headline.
   With nothing hovered it rests on the monogram + the studio line. */

(function () {
  var projects = window.PROJECTS || [];
  var subjects = document.getElementById('subjects');
  var preview = document.getElementById('preview');
  var headline = document.getElementById('headline');
  var headlineText = headline.querySelector('.headline-text');
  var defaultItem = preview.querySelector('.preview-item.is-default');
  var defaultTitle = headline.dataset.default;

  var previewItems = {};
  var current = null;
  var swapTimer = null;

  /* Touch devices can't hover, so the panel never shows — don't pull ~440 KB
     of stills and a 7 MB clip down for nothing. */
  var canHover = window.matchMedia('(hover: hover)').matches;

  /* build ---------------------------------------------------------- */

  projects.forEach(function (project) {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.className = 'subject';
    link.href = project.href;
    link.textContent = project.name;
    link.dataset.key = project.key;
    li.appendChild(link);
    subjects.appendChild(li);

    if (!canHover) return;

    var item = document.createElement('div');
    item.className = 'preview-item';

    var media;
    if (project.preview.type === 'video') {
      media = document.createElement('video');
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.setAttribute('playsinline', '');
      media.preload = 'metadata'; /* it's a 7 MB file — don't pull it on load */
    } else {
      media = document.createElement('img');
      media.alt = '';
      media.loading = 'eager';
      media.decoding = 'async';
    }
    media.src = project.preview.src;

    item.appendChild(media);
    preview.appendChild(item);
    previewItems[project.key] = item;
  });

  /* swap ----------------------------------------------------------- */

  /* The headline is nowrap, so an over-long title would run off to the left
     across the preview instead of wrapping. CSS sizes it to fit the names we
     have; this shrinks it the rest of the way if a longer name is added later,
     or if Nohemi fails to load and a wider fallback stands in. */
  function fitHeadline() {
    headline.style.fontSize = '';
    if (getComputedStyle(headline).whiteSpace !== 'nowrap') return;

    var available = headline.clientWidth;
    var natural = headlineText.getBoundingClientRect().width;
    if (!available || !natural || natural <= available) return;

    var base = parseFloat(getComputedStyle(headline).fontSize);
    headline.style.fontSize = Math.floor(base * (available / natural)) + 'px';
  }

  function setHeadline(text) {
    if (headlineText.textContent === text) return;

    headline.classList.add('is-swapping');
    clearTimeout(swapTimer);
    swapTimer = setTimeout(function () {
      headlineText.textContent = text;
      fitHeadline();
      headline.classList.remove('is-swapping');
    }, 160);
  }

  /* The clip isn't preloaded, so the first hover can land before there are
     enough frames to play. Try now, and again once it can actually start. */
  function playVideo(item) {
    var video = item.querySelector('video');
    if (!video) return;

    function attempt() {
      if (!item.classList.contains('is-active')) return;
      var playing = video.play();
      if (playing && playing.catch) playing.catch(function () {});
    }

    attempt();
    if (video.readyState < 3) {
      video.addEventListener('canplay', attempt, { once: true });
    }
  }

  function pauseVideo(item) {
    var video = item.querySelector('video');
    if (video && !video.paused) video.pause();
  }

  function activate(key) {
    if (current === key) return;

    if (current && previewItems[current]) {
      previewItems[current].classList.remove('is-active');
      pauseVideo(previewItems[current]);
    }

    current = key;

    if (key && previewItems[key]) {
      previewItems[key].classList.add('is-active');
      playVideo(previewItems[key]);
    }

    if (defaultItem) defaultItem.classList.toggle('is-active', !key);

    var project = projects.filter(function (p) { return p.key === key; })[0];
    setHeadline(project ? project.name : defaultTitle);
  }

  /* bind ----------------------------------------------------------- */

  subjects.addEventListener('pointerenter', function (event) {
    var link = event.target.closest && event.target.closest('.subject');
    if (link) activate(link.dataset.key);
  }, true);

  subjects.addEventListener('focusin', function (event) {
    var link = event.target.closest('.subject');
    if (link) activate(link.dataset.key);
  });

  subjects.addEventListener('mouseleave', function () { activate(null); });

  subjects.addEventListener('focusout', function (event) {
    if (!subjects.contains(event.relatedTarget)) activate(null);
  });

  fitHeadline();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeadline); /* re-measure once Nohemi swaps in */
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitHeadline, 120);
  });

  /* a backgrounded tab won't start playback — pick it up when we come back */
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && current && previewItems[current]) {
      playVideo(previewItems[current]);
    }
  });
})();

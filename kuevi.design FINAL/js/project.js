/* Project page: renders the gallery for whatever key the <body> declares. */

(function () {
  var projects = window.PROJECTS || [];
  var key = document.body.dataset.project;

  var index = projects.map(function (p) { return p.key; }).indexOf(key);
  if (index === -1) return;

  var project = projects[index];
  var next = projects[(index + 1) % projects.length];

  document.title = project.name + ' — kuevi.design';

  /* header --------------------------------------------------------- */

  document.querySelector('.project-title').textContent = project.name;
  document.querySelector('[data-field="year"]').textContent = project.year;
  document.querySelector('[data-field="role"]').textContent = project.role;

  /* curly quotes to match the home page statement */
  document.querySelector('[data-field="description"]').textContent =
    '“' + project.description + '”';

  /* gallery -------------------------------------------------------- */

  var gallery = document.querySelector('.gallery');

  project.assets.forEach(function (asset, i) {
    var figure = document.createElement('figure');
    var isVideo = asset.type === 'video' || /\.(mp4|webm|mov)$/i.test(asset.src);

    var media;
    if (isVideo) {
      media = document.createElement('video');
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.setAttribute('playsinline', '');
      media.addEventListener('loadeddata', reveal);
    } else {
      media = document.createElement('img');
      media.alt = project.name + ' — image ' + (i + 1);
      media.loading = i < 4 ? 'eager' : 'lazy';
      media.decoding = 'async';
      media.addEventListener('load', reveal);
    }

    /* reserve the right box before the file lands, so nothing jumps */
    if (asset.w && asset.h) {
      media.width = asset.w;
      media.height = asset.h;
      figure.style.aspectRatio = asset.w + ' / ' + asset.h;
    }

    media.src = asset.src;

    function reveal() { media.classList.add('is-loaded'); }
    if (media.complete) reveal();

    figure.appendChild(media);
    gallery.appendChild(figure);
  });

  /* next ----------------------------------------------------------- */

  var nextLink = document.querySelector('.next');
  nextLink.href = next.href;
  nextLink.querySelector('.next-name').textContent = next.name;
})();

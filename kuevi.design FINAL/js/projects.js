/* Single source of truth for every project — order here is the order on the home
   page. `key` matches the folder under assets/. w/h are the on-disk dimensions,
   used to reserve each gallery tile so nothing jumps while images stream in. */

window.PROJECTS = [
  {
    key: 'valo',
    name: 'Valo Project',
    href: 'valo.html',
    year: '2023 — Ongoing',
    role: 'Cover art · Poster design · Art direction',
    description: 'The Valo Project is a poster design project that I originally ' +
      'started on Pinterest back in 2023. I created this poster project to express ' +
      'my creativity and talents as a creative. It is a gallery of ideas and ' +
      'inspiration I am proud of and will continue building on. Here is some of my ' +
      'favourite posters.',
    preview: { type: 'image', src: 'assets/other/valo-preview.webp' },
    assets: [
      { src: 'assets/valo/halftone-poster.jpg',    w: 1650, h: 2200 },
      { src: 'assets/valo/pinkpantheress4.jpg',    w: 1760, h: 2200 },
      { src: 'assets/valo/doue.jpg',               w: 1760, h: 2200 },
      { src: 'assets/valo/iammusic2.jpg',          w: 1760, h: 2200 },
      { src: 'assets/valo/the-patience-b-w.jpg',   w: 1760, h: 2200 },
      { src: 'assets/valo/maybeinnirvanared.jpg',  w: 1760, h: 2200 },
      { src: 'assets/valo/denzel.jpg',             w: 1760, h: 2200 },
      { src: 'assets/valo/gambino.jpg',            w: 1760, h: 2200 },
      { src: 'assets/valo/planetgiza2.jpg',        w: 1760, h: 2200 },
      { src: 'assets/valo/thecolorgrey.jpg',       w: 1760, h: 2200 },
      { src: 'assets/valo/pinkwindows.jpg',        w: 1760, h: 2200 },
      { src: 'assets/valo/burgundywhip.jpg',       w: 1760, h: 2200 },
      { src: 'assets/valo/thelongroadahead.jpg',   w: 1760, h: 2200 },
      { src: 'assets/valo/johncenaps2.jpg',        w: 1760, h: 2200 },
      { src: 'assets/valo/cruzafied.jpg',          w: 1760, h: 2200 },
      { src: 'assets/valo/modric.jpg',             w: 1760, h: 2200 },
      { src: 'assets/valo/yamal.jpg',              w: 1760, h: 2200 },
      { src: 'assets/valo/eze2.jpg',               w: 1760, h: 2200 }
    ]
  },
  {
    key: 'ugochukwu',
    name: 'Lesley Ugochukwu',
    href: 'ugochukwu.html',
    year: '2025',
    role: 'Matchday graphics · Sports design',
    description: 'I had the great pleasure of working with professional footballer ' +
      'Lesley Ugochukwu, who has played in the Premier League with teams like Chelsea ' +
      'and Burnley and is currently playing for Turkish side Galatasaray. His ' +
      'photographer reached out to me through Instagram and it was such a surreal ' +
      'moment for me, I am truly grateful for them to put their trust in me.',
    preview: { type: 'image', src: 'assets/other/ugochukwu-preview.webp' },
    assets: [
      { src: 'assets/ugochukwu/ugochukwu.jpg',          w: 1238, h: 2200 },
      { src: 'assets/ugochukwu/3ugochukwunostar.jpg',   w: 1238, h: 2200 },
      { src: 'assets/ugochukwu/4ugochukwu3d.jpg',       w: 1238, h: 2200 },
      { src: 'assets/ugochukwu/ugochukwuunused.jpg',    w: 1238, h: 2200 }
    ]
  },
  {
    key: 'forza',
    name: 'Every Road Is A Canvas',
    href: 'forza.html',
    year: '2025',
    role: 'Key art · Concept campaign',
    description: 'For this project, I wanted to make the best use of the shapes and ' +
      'colours commonly seen in Japanese graphic design, as it fits with the Forza ' +
      'Horizon 6’s location and so it would feel distinct and recognisable. I ' +
      'decided to chose the tagline Every Road Is A Canvas not only as some line to ' +
      'get people to play but in reference to Japan’s rich history in art as a ' +
      'whole. I am really happy with how this concept turned out.',
    preview: { type: 'image', src: 'assets/other/forza-preview.webp' },
    assets: [
      { src: 'assets/forza/newfh6.jpg',       w: 1760, h: 2200 },
      { src: 'assets/forza/2newfh6.jpg',      w: 1760, h: 2200 },
      { src: 'assets/forza/3newfh6alt.jpg',   w: 1760, h: 2200 },
      { src: 'assets/forza/fullnewfh6.jpg',   w: 2200, h: 1375 },
      { src: 'assets/forza/full2newfh6.jpg',  w: 2200, h: 1375 },
      { src: 'assets/forza/full3newfh6.jpg',  w: 2200, h: 1375 }
    ]
  },
  {
    key: 'iris',
    name: 'Iris',
    href: 'iris.html',
    year: '2025',
    role: 'Brand identity · Motion · Product mockups',
    description: 'Iris (meaning ‘illuminate reality, inspire shift’) is a streetwear ' +
      'brand that aims towards a underground vibe. I really like how this turned out ' +
      'with its overall darker theme contrasted by its loud, main orange colour, ' +
      'which symbolises the first half of the brand’s name, to illuminate reality.',
    /* same file the gallery opens with — no need to ship it twice */
    preview: { type: 'video', src: 'assets/iris/iris-eye-cleaner-copy.mp4' },
    assets: [
      { src: 'assets/iris/iris-eye-cleaner-copy.mp4',        w: 1920, h: 1080, type: 'video' },
      { src: 'assets/iris/iris-mockup-1.jpg',                w: 1467, h: 2200 },
      { src: 'assets/iris/eye-logo-balaclava-mockup-4.jpg',  w: 1716, h: 2200 },
      { src: 'assets/iris/iris-mockup-3.jpg',                w: 1611, h: 2200 },
      { src: 'assets/iris/iris-eye-alt.jpg',                 w: 2160, h: 1350 }
    ]
  },
  {
    key: 'ftt',
    name: 'From The Top',
    href: 'ftt.html',
    year: '2024',
    role: 'Brand identity · Campaign · Environmental',
    description: 'From The Top is a headwear brand that is fitted with a clean, ' +
      'modern and simple look. One of my favourite projects mainly because of being ' +
      'able to experiment with stuff like text placement while keeping the minimal ' +
      'and modern identity.',
    preview: { type: 'image', src: 'assets/other/ftt-preview.webp' },
    assets: [
      { src: 'assets/ftt/ftt-poster-1.jpg',            w: 1760, h: 2200 },
      { src: 'assets/ftt/ftt-poster-1-alt.jpg',        w: 1760, h: 2200 },
      { src: 'assets/ftt/ftt-billboard-2-mockup.jpg',  w: 2200, h: 1650 },
      { src: 'assets/ftt/ftt-colour-display.jpg',      w: 2200, h: 1760 },
      { src: 'assets/ftt/ftt-ui-full-display.jpg',     w: 2200, h: 1760 },
      { src: 'assets/ftt/ftp-logo-display.jpg',        w: 2200, h: 1238 }
    ]
  }
];

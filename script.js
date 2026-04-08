/* ==========================================
   Project Data
   ========================================== */
const projects = [
  {
    id: 'brand-identity',
    title: 'Odlum Brown VanOpen 2022',
    thumb: 'images/VO/00%20odlum-brown-vanopen-hero-posters-1860x1240.jpg',
    description: 'Returning after a two-year absence and newly elevated to a combined ATP and WTA Challenger 125 event, the Odlum Brown VanOpen needed a visual identity strong enough to compete nationally. We refreshed the brand with bold new visuals and a unified colour system deployed across the website, advertising, event program, and signage. The result positioned VanOpen as a world-class tournament worthy of the top-tier players taking the court at Hollyburn Country Club.',
    studio: 'Ecstatic Design Studios',
    year: '2022',
    role: 'Graphic Designer',
    team: ['Chrystal Thompson, Creative Director', 'Christopher Jorgenson, Developer', 'Verena Dreikauß, Senior Designer'],
    images: [
      'images/VO/01%20odlum-brown-vanopen-branding-poster-03.jpg',
      'images/VO/02%20odlum-brown-vanopen-aerial.jpg',
      'images/VO/03%20odlum-brown-vanopen-branding-poster.jpg',
      'images/VO/07%20odlum-brown-vanopen-branding-program-map.jpg',
      'images/VO/05%20odlum-brown-vanopen-corporate-doc-covers.jpg',
      'images/VO/08%20odlum-brown-vanopen-website-responsive.jpg',
      'images/VO/10%20odlum-brown-vanopen-marketing-socialmedia-posts-02.jpg',
      'images/VO/09%20ecstatic-odlum-brown-vanopen-marketing-socialmedia-posts-1.gif',
      'images/VO/11%20odlum-brown-vanopen-marketing-print-ad.jpg',
      'images/VO/12%20odlum-brown-vanopen-marketing-streetbanner.jpg',
      'images/VO/13%20odlum-brown-vanopen-branding-poster-03-2.jpg',
      'images/VO/16%2015%20odlum-brown-vanopen-seating.jpg',
      'images/VO/15%20odlum-brown-vanopen-row-of-champs.jpg',
      'images/VO/14%20ecstatic-odlum-brown-vanopen-signage-directional-2.gif',
      'images/VO/19%20odlum-brown-vanopen-linespeep.jpg',
      'images/VO/18odlum-brown-vanopen-community-day-banner.jpg',
      'images/VO/17%20odlum-brown-vanopen-signage-map.jpg',
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial design',
    thumb: 'https://placehold.co/1600x900/1c1c1c/363636',
    description: '',
    studio: '',
    year: '',
    role: '',
    team: [],
    images: [
      'https://placehold.co/1400x900/1c1c1c/363636',
      'https://placehold.co/1400x900/191919/333333',
      'https://placehold.co/1400x900/1e1e1e/383838',
      'https://placehold.co/1400x900/1b1b1b/353535',
      'https://placehold.co/1400x900/181818/323232',
    ],
  },
  {
    id: 'agro-coffee',
    title: 'Agro Coffee Roasters',
    thumb: 'images/Agro/01%20jh-agroroasters-packaging-bags-02-2022.gif',
    description: 'Agro Roasters was scaling beyond their café roots focusing on wholesale and retail, and their packaging needed to reflect that ambition — standing out on shelves alongside established local brands. We created a wraparound illustration that connects across all sides of the bag, paired with a colour system that can flex across future coffee blends and product lines. The outcome was a cohesive packaging identity that lives beautifully on shelf as a complete work — and breaks apart just as well across merch, murals, and brand assets.',
    studio: 'Ecstatic Design Agency',
    year: '2023',
    role: 'Graphic and Web Designer, Illustrator',
    team: ['Chrystal Thompson, Creative Director', 'Christopher Jorgenson, Developer'],
    images: [
      'images/Agro/00%20jh-agroroasters-packaging-bags-01-2022.jpg',
      'images/Agro/02%20jh-agroroasters-branding-stickers-2022.jpg',
      'images/Agro/03%20jh-agroroasters-context-roaster-2022.jpg',
      'images/Agro/04%20jh-agroroasters-branding-illustration-2022.jpg',
      'images/Agro/05%20jh-agroroasters-packaging-labels-03-2022.gif',
      'images/Agro/06%20jh-agroroasters-branding-window-sticker-20223.jpg',
      'images/Agro/07%20jh-agroroasters-branding-mural-2023.jpg',
      'images/Agro/10%20jh-agroroasters-packaging-bag-03-2022.jpg',
      'images/Agro/09%20jh-agroroasters-branding-tshirt-01.jpg',
      'images/Agro/08%20jh-agroroasters-hero-farm-2022.jpg',
      'images/Agro/12%20jh-agroroasters-website-responsive-2022.jpg',
      'images/Agro/11%20jh-agroroasters-packaging-box-2022.jpg',
      'images/Agro/13%20jh-agroroasters-website-fleet-2022.jpg',
    ],
  },
  {
    id: 'packaging',
    title: 'Packaging',
    thumb: 'https://placehold.co/1600x900/101010/2a2a2a',
    images: [
      'https://placehold.co/1400x900/101010/2a2a2a',
      'https://placehold.co/1400x900/0d0d0d/272727',
      'https://placehold.co/1400x900/121212/2c2c2c',
      'https://placehold.co/1400x900/0f0f0f/292929',
      'https://placehold.co/1400x900/0c0c0c/262626',
    ],
  },
  {
    id: 'motion',
    title: 'Motion graphics',
    thumb: 'https://placehold.co/1600x900/181818/323232',
    images: [
      'https://placehold.co/1400x900/181818/323232',
      'https://placehold.co/1400x900/151515/2f2f2f',
      'https://placehold.co/1400x900/1a1a1a/343434',
      'https://placehold.co/1400x900/171717/313131',
      'https://placehold.co/1400x900/141414/2e2e2e',
    ],
  },
  {
    id: 'web-design',
    title: 'Web design',
    thumb: 'https://placehold.co/1600x900/202020/3a3a3a',
    images: [
      'https://placehold.co/1400x900/202020/3a3a3a',
      'https://placehold.co/1400x900/1d1d1d/373737',
      'https://placehold.co/1400x900/222222/3c3c3c',
      'https://placehold.co/1400x900/1f1f1f/393939',
      'https://placehold.co/1400x900/1c1c1c/363636',
    ],
  },
  {
    id: 'various-branding',
    title: 'Various Logos',
    carousel: true,
    singleColumn: true,
    description: 'A collection of logos and marks developed for clients over the years. Some live in the world, some live only in the archive.',
    studio: 'Ecstatic Design Studios<br>Spring Advertising',
    studioLabel: 'Studios',
    year: '',
    role: 'Graphic Designer',
    team: [],
    imageOptions: {},
    images: [
      'images/Various%20Logos/imgi_2_450146307_1518548882090752_7637286713458763038_n.jpg',
      'images/Various%20Logos/imgi_10_smartfarmorganics_infographic_brand_logo.jpg',
      'images/Various%20Logos/DD_Logo_V01.jpg',
      'images/Various%20Logos/reddogfarm-brand-totebag-03.jpg',
      'images/Various%20Logos/imgi_34_imgi_2_ecstatic-lumostage-branding-logo-embossed-1860x1240.jpg',
      'images/Various%20Logos/IPSC_Logo.jpg',
      'images/Various%20Logos/SSEHD-Logo.jpg',
    ],
  },
];

/* ==========================================
   DOM References
   ========================================== */
const viewWork    = document.getElementById('viewWork');
const viewAbout   = document.getElementById('viewAbout');
const viewProject = document.getElementById('viewProject');
const workGrid    = document.getElementById('workGrid');
const projectHero   = document.getElementById('projectHero');
const projectInfo   = document.getElementById('projectInfo');
const projectImages = document.getElementById('projectImages');
const projectCrumb  = document.getElementById('projectCrumb');
const siteNameLink  = document.getElementById('siteNameLink');
const navLinks      = document.querySelectorAll('.nav-link[data-view]');
const mainPanel     = document.getElementById('mainPanel');
const hamburger     = document.getElementById('hamburger');
const sidebarNav    = document.getElementById('sidebarNav');
const navClose      = document.getElementById('navClose');

function closeMenu() {
  sidebarNav.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', false);
}

/* ==========================================
   Hamburger toggle
   ========================================== */
hamburger.addEventListener('click', () => {
  const isOpen = sidebarNav.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// X button closes the menu
navClose.addEventListener('click', closeMenu);

// Close menu when a nav link is tapped
sidebarNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ==========================================
   View Router
   ========================================== */
function showView(name, project) {
  // Hide all views
  [viewWork, viewAbout, viewProject].forEach(v => v.classList.add('is-hidden'));

  // Update active nav
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.view === name);
  });

  // Clear project crumb
  projectCrumb.textContent = '';

  // Scroll right panel back to top
  mainPanel.scrollTop = 0;

  if (name === 'work') {
    viewWork.classList.remove('is-hidden');
  } else {
    carouselIntervals.forEach(id => clearInterval(id));
    carouselIntervals.length = 0;
  }

  if (name === 'about') {
    viewAbout.classList.remove('is-hidden');
  } else if (name === 'project' && project) {
    renderProject(project);
    viewProject.classList.remove('is-hidden');
  }
}

/* ==========================================
   Render Work Grid
   ========================================== */
const carouselIntervals = [];

function renderGrid() {
  workGrid.innerHTML = '';
  projects.forEach(project => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';

    const firstSrc = project.carousel ? project.images[0] : (project.thumb || project.images[0]);
    thumb.innerHTML = `
      <div class="thumb-img-wrap">
        <img src="${firstSrc}" alt="${project.title}" loading="lazy" />
      </div>
      <p class="thumb-title">${project.title}</p>
    `;

    if (project.carousel && project.images.length > 1) {
      const img = thumb.querySelector('img');
      let index = 0;
      const id = setInterval(() => {
        index = (index + 1) % project.images.length;
        img.src = project.images[index];
      }, 2000);
      carouselIntervals.push(id);
    }

    thumb.addEventListener('click', () => showView('project', project));
    workGrid.appendChild(thumb);
  });
}

/* ==========================================
   Render Project Detail
   ========================================== */
function makeClickable(img, index, images) {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => openLightbox(images, index));
}

function renderProject(project) {
  projectHero.innerHTML = '';
  projectImages.innerHTML = '';

  // Project info
  projectInfo.innerHTML = '';
  if (project.description || project.studio || project.role || project.team?.length) {
    projectInfo.innerHTML = `
      <div class="info-description">${project.description ? `<p>${project.description}</p>` : ''}</div>
      <div class="info-meta">
        ${project.studio ? `<p><strong>${project.studioLabel || 'Studio'}</strong>${project.studio}${project.year ? `<br>${project.year}` : ''}</p>` : ''}
      </div>
      <div class="info-team">
        ${project.role   ? `<p><strong>Role</strong>${project.role}</p>` : ''}
        ${project.team?.length ? `<p><strong>Team</strong>${project.team.join('<br>')}</p>` : ''}
      </div>
    `;
  }

  const allImages = project.images;

  // Title + hero image
  const title = document.createElement('h1');
  title.className = 'project-title';
  title.textContent = project.title;
  projectHero.appendChild(title);

  const spacer = document.createElement('div');
  spacer.className = 'title-spacer';
  projectHero.appendChild(spacer);

  const hero = document.createElement('img');
  hero.src = allImages[0];
  hero.alt = `${project.title} — image 1`;
  hero.loading = 'lazy';
  makeClickable(hero, 0, allImages);
  projectHero.appendChild(hero);

  // Remaining images
  const remaining = allImages.slice(1);
  if (remaining.length === 0) return;

  if (project.singleColumn) {
    // All images stacked full-width
    remaining.forEach((src, idx) => {
      const imgIndex = idx + 1;
      const zoom = project.imageOptions?.[imgIndex]?.zoom;
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} — image ${imgIndex + 1}`;
      img.loading = 'lazy';
      makeClickable(img, imgIndex, allImages);
      if (zoom) {
        img.style.transform = `scale(${zoom})`;
        const wrap = document.createElement('div');
        wrap.className = 'img-zoom-wrap';
        wrap.appendChild(img);
        projectImages.appendChild(wrap);
      } else {
        projectImages.appendChild(img);
      }
    });
  } else {
    // Second image full width, then alternating pairs/singles
    const secondImg = document.createElement('img');
    secondImg.src = remaining[0];
    secondImg.alt = `${project.title} — image 2`;
    secondImg.loading = 'lazy';
    makeClickable(secondImg, 1, allImages);
    projectImages.appendChild(secondImg);

    const afterSecond = remaining.slice(1);
    let i = 0;
    while (i < afterSecond.length) {
      const posInGroup = i % 3;
      if (posInGroup < 2) {
        const row = document.createElement('div');
        row.className = 'image-row';
        for (let j = 0; j < 2 && i < afterSecond.length && i % 3 < 2; j++, i++) {
          const img = document.createElement('img');
          img.src = afterSecond[i];
          img.alt = `${project.title} — image ${i + 3}`;
          img.loading = 'lazy';
          makeClickable(img, i + 2, allImages);
          row.appendChild(img);
        }
        projectImages.appendChild(row);
      } else {
        const img = document.createElement('img');
        img.src = afterSecond[i];
        img.alt = `${project.title} — image ${i + 3}`;
        img.loading = 'lazy';
        makeClickable(img, i + 2, allImages);
        projectImages.appendChild(img);
        i++;
      }
    }
  }
}

/* ==========================================
   Event Listeners
   ========================================== */

// Nav links (Work / About)
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showView(link.dataset.view);
  });
});

// Site name always goes back to Work
siteNameLink.addEventListener('click', e => {
  e.preventDefault();
  showView('work');
});

// Project crumb goes back to Work
projectCrumb.addEventListener('click', () => {
  showView('work');
});

/* ==========================================
   Lightbox
   ========================================== */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev  = document.getElementById('lightboxPrev');
const lightboxNext  = document.getElementById('lightboxNext');

let lightboxImages = [];
let lightboxIndex  = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex  = index;
  lightboxImg.src = images[index];
  lightbox.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('is-hidden');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

function lightboxStep(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[lightboxIndex];
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => lightboxStep(-1));
lightboxNext.addEventListener('click', () => lightboxStep(1));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('is-hidden')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lightboxStep(-1);
  if (e.key === 'ArrowRight') lightboxStep(1);
});

/* ==========================================
   Init
   ========================================== */
renderGrid();
showView('work');

/* ==========================================
   Project Data
   ========================================== */
const projects = [
  {
    id: 'brand-identity',
    title: 'Brand identity',
    thumb: 'https://placehold.co/1600x900/141414/2e2e2e',
    images: [
      'https://placehold.co/1400x900/141414/2e2e2e',
      'https://placehold.co/1400x900/111111/2b2b2b',
      'https://placehold.co/1400x900/161616/303030',
      'https://placehold.co/1400x900/131313/2d2d2d',
      'https://placehold.co/1400x900/101010/2a2a2a',
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial design',
    thumb: 'https://placehold.co/1600x900/1c1c1c/363636',
    images: [
      'https://placehold.co/1400x900/1c1c1c/363636',
      'https://placehold.co/1400x900/191919/333333',
      'https://placehold.co/1400x900/1e1e1e/383838',
      'https://placehold.co/1400x900/1b1b1b/353535',
      'https://placehold.co/1400x900/181818/323232',
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
    id: 'poster-series',
    title: 'Poster series',
    thumb: 'https://placehold.co/1600x900/0c0c0c/262626',
    images: [
      'https://placehold.co/1400x900/0c0c0c/262626',
      'https://placehold.co/1400x900/0a0a0a/242424',
      'https://placehold.co/1400x900/0e0e0e/282828',
      'https://placehold.co/1400x900/0b0b0b/252525',
      'https://placehold.co/1400x900/090909/232323',
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
  } else if (name === 'about') {
    viewAbout.classList.remove('is-hidden');
  } else if (name === 'project' && project) {
    renderProject(project);
    viewProject.classList.remove('is-hidden');
  }
}

/* ==========================================
   Render Work Grid
   ========================================== */
function renderGrid() {
  workGrid.innerHTML = '';
  projects.forEach(project => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.innerHTML = `
      <div class="thumb-img-wrap">
        <img src="${project.thumb}" alt="${project.title}" loading="lazy" />
      </div>
      <p class="thumb-title">${project.title}</p>
    `;
    thumb.addEventListener('click', () => showView('project', project));
    workGrid.appendChild(thumb);
  });
}

/* ==========================================
   Render Project Detail
   ========================================== */
function renderProject(project) {
  projectHero.innerHTML = '';
  projectImages.innerHTML = '';

  // Title + hero image
  const title = document.createElement('h1');
  title.className = 'project-title';
  title.textContent = project.title;
  projectHero.appendChild(title);

  const spacer = document.createElement('div');
  spacer.className = 'title-spacer';
  projectHero.appendChild(spacer);

  const hero = document.createElement('img');
  hero.src = project.images[0];
  hero.alt = `${project.title} — image 1`;
  hero.loading = 'lazy';
  projectHero.appendChild(hero);

  // Second image: full width
  const remaining = project.images.slice(1);
  if (remaining.length === 0) return;

  const secondImg = document.createElement('img');
  secondImg.src = remaining[0];
  secondImg.alt = `${project.title} — image 2`;
  secondImg.loading = 'lazy';
  projectImages.appendChild(secondImg);

  // After second image: alternate pairs (half-width) then full-width
  // Pattern repeats every 3: [pair, pair, full]
  const afterSecond = remaining.slice(1);
  let i = 0;
  while (i < afterSecond.length) {
    const posInGroup = i % 3;
    if (posInGroup < 2) {
      // Start of a pair row
      const row = document.createElement('div');
      row.className = 'image-row';
      for (let j = 0; j < 2 && i < afterSecond.length && i % 3 < 2; j++, i++) {
        const img = document.createElement('img');
        img.src = afterSecond[i];
        img.alt = `${project.title} — image ${i + 3}`;
        img.loading = 'lazy';
        row.appendChild(img);
      }
      projectImages.appendChild(row);
    } else {
      // Full-width single
      const img = document.createElement('img');
      img.src = afterSecond[i];
      img.alt = `${project.title} — image ${i + 3}`;
      img.loading = 'lazy';
      projectImages.appendChild(img);
      i++;
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
   Init
   ========================================== */
renderGrid();
showView('work');

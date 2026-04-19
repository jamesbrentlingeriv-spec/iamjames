/* ============= BASE PATH CONFIGURATION ============= */
// Helper function to resolve asset paths - works for both localhost and GitHub Pages
const getBasePath = () => {
  // Get the hostname and pathname from current URL
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  // For custom domains (like iamjames.lol), use root path
  if (!hostname.includes('github.io') && !hostname.includes('localhost')) {
    // This is a custom domain, so assets should be served from root
    return '';
  }
  
  // For GitHub Pages (username.github.io)
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // If there are path segments, use the first one as base
  if (pathSegments.length > 0) {
    // Exclude common page names from being considered as base paths
    const excludedPages = ['index.html', 'the-shaking-of-my-hands.html'];
    const lastSegment = pathSegments[pathSegments.length - 1].toLowerCase();
    
    if (!excludedPages.includes(lastSegment)) {
      return '/' + pathSegments[0];
    } else if (pathSegments.length > 1) {
      return '/' + pathSegments[0];
    }
  }
  
  // Default to root
  return '';
};

// Helper function to resolve asset paths
const assetPath = (path) => {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path; // External URLs remain unchanged
  }
  
  const basePath = getBasePath();
  // Avoid double slashes
  const resolvedPath = basePath === '' ? path : basePath + path;
  console.log(`🔗 Resolving path: ${path} → ${resolvedPath}`);
  return resolvedPath;
};

console.log('📍 Base path detected:', getBasePath() || '(root)');

/* ============= PROJECTS DATA ============= */
// Exposing data globally for easy access/debugging if needed
const PROJECTS = window.PROJECTS = [
  {
    id: "post",
    title: "P.O.S.T.",
    category: "Optical Tool",
    description: `The P.O.S.T. system features a multi-tiered insurance processing engine designed to handle the nuances of vision care plans (VCPs).
Fixed-Copay vs. Allowance Logic: I engineered a conditional logic branch that distinguishes between "Fixed-Copay" plans (e.g., standard Medicaid/VSP) and "Retail Allowance" plans.
The Arithmetic Offset: For allowance plans, the system utilizes a Differential Deduction Algorithm. It captures a user-defined "Wholesale/Retail Allowance" and subtracts it from the gross retail total, but dynamically re-calculates the 6% Kentucky Sales Tax only on the patient's remaining out-of-pocket balance.
Plan-Specific Routing: The tool includes hardcoded logic for specialized local providers (e.g., "SCHOOL LETTER" or "MEDICAID"), which automatically toggles specific price-overrides and restricts or enables lens material selections based on plan-specific formulary constraints.
High-Precision Frame & Lens Centration (Automated Math): The "Workbench" side of the app automates the high-stakes calculations that usually require a manual "Lensometer" or "Boxing System" chart.
Auto-Decentration Logic: Using the frame dimensions (A + DBL) and the patient's Pupillary Distance (PD), the tool programmatically calculates the Minimum Blank Size (MBS) required to prevent "cut-out" errors in the lab.
Geometric Frame Centration: The system calculates the difference between the frame's geometric center and the patient's visual axis. This ensures that the Segment Height and Optical Center (OC) are positioned with sub-millimeter accuracy, critical for high-diopter prescriptions where even a $1mm$ error causes prismatic imbalance.
Legal Waiver & Documentation Framework: To mitigate professional liability and ensure HIPAA compliance, I integrated a robust legal document generation system.`,
    thumbnail: "/thumbnails/post.jpg",
    videoUrl: "/videos/post.mp4",
    tags: ["JavaScript", "Optical Math", "CSS3"],
    githubUrl: "#",
  },
  {
    id: "pal-toolkit",
    title: "Pal Optical Master Tool Kit",
    category: "Optical Tool",
    description: `A polished web app launcher for the Pal Optical suite. Presents a card-based dashboard with theme switching, PWA metadata, and one-click access to every tool in the system.
Includes:
Contact order sheet and patient supply tracker with browser-side persistence and insurance toggles.
Doctor-facing itemized receipt generator with insurance adjustments and payment tracking.
Branded Pal Optical retail receipt builder with live subtotal and insurance calculations.
Lens tally and FSV lab order interface with barcode/scanner input and material selection.
Lens availability catalog manager with editable progressive and multifocal inventory tables.
Quote and estimate tool supporting product selection, insurance-aware pricing, and Medicaid handling.
Frame inventory and CSV master file manager with brand selection and session tracking.
Interactive lens education guide with visual corridor diagrams and lens-type profiles.
Optician calculator and lens visualizer with decentration/MBS/thickness formulas.
Printable documents portal for patient information sheets and legal waiver forms.`,
    thumbnail: "/thumbnails/palopticalmastertool.jpg",
    videoUrl: "/videos/pomt.mp4",
    tags: ["JavaScript", "Logic", "Dashboard"],
    githubUrl: "#",
  },
  {
    id: "ocu-sync",
    title: "Ocu-Sync",
    category: "Web App",
    description: `HIPAA-compliant secure messaging service designed for optical clinics and healthcare providers.
Real-time communication for patient status updates and internal staff coordination.
Firebase-backed infrastructure for instant synchronization across devices.`,
    thumbnail: "/thumbnails/ocu-sync.png",
    videoUrl: "/videos/ocusync.mp4",
    tags: ["Firebase", "Healthcare", "Security"],
    githubUrl: "#",
  },
  {
    id: "pal-optical-site",
    title: "Pal Optical Website",
    category: "Website",
    description: `Official website for Pal Optical featuring a clean, modern design.
Responsive layout optimized for all devices.
Service showcase with detailed descriptions of optical services offered.
Team member profiles with professional photos and bios.
Online appointment scheduling integration.
Contact forms and location maps.`,
    thumbnail: "/thumbnails/palsite.png",
    videoUrl: "/videos/palsite2.mp4",
    tags: ["HTML5", "CSS3", "Responsive"],
    liveUrl: "https://www.paloptical.com/",
  },
  {
    id: "optitrak",
    title: "OptiTrak",
    category: "Optical Tool",
    description:
      "A remake tracker and manager for eyewear orders within a optical shop. To hopefully find what each employee has the most issue with and coach them to prevent future remakes. Features a tracking dashboard with login, history, reporting, and offline-first sync. Utilizes Firebase-backed remake records, technician management, and canvas charts.",
    thumbnail: "/thumbnails/ocutrack.png",
    videoUrl: "/videos/ocutrack.mp4",
    tags: ["IoT", "Tracking", "Database"],
    githubUrl: "#",
    liveUrl:
      "https://jamesbrentlingeriv-spec.github.io/PALHTML/optitrack-remake-manager/index.html",
  },
  {
    id: "opticalc-3d",
    title: "OptiCalc-3d",
    category: "Optical Tool",
    description: `Advanced 3D optical calculation tool for precise lens measurements.
Real-time visualization of lens parameters.
Supports multiple lens types and materials.
Export capabilities for lab orders.`,
    thumbnail: "/thumbnails/opticalc.png",
    videoUrl: "/videos/opticalc.mp4",
    tags: ["3D Graphics", "Mathematics", "Optics"],
    githubUrl: "#",
  },
  {
    id: "church-web",
    title: "Church Website",
    category: "Website",
    description: `Kingdom Journey church website with a polished, modern hero landing page.
Built with CSS for responsive layout and Google Fonts for clean typography.
Branded identity includes a custom logo, gradient headline styling, and a subtle hero pattern.
Clear primary CTAs: "Watch Live" and "Service Times".
Navigation includes Home, About, Services, Calendar, Pastoral Team, Live Watch, Giving, and Contact.
Mobile-friendly hamburger menu for smaller screens.
Featured pastor profile section with warm community messaging.
Focus on inviting visitors with phrases like "Welcome Home" and "Real Church for Real People".
Designed for a local Pentecostal community in Nicholasville, KY.`,
    thumbnail: "/thumbnails/church.png",
    videoUrl: "/videos/church.mp4",
    tags: ["CMS", "Community", "Non-profit"],
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/church/index.html",
  },
  {
    id: "bluey-read",
    title: "Bluey Let's Read",
    category: "Website",
    description: `Interactive reading platform featuring Bluey characters.
Engaging animations and sound effects.
Child-friendly interface with large buttons.
Progress tracking for young readers.`,
    thumbnail: "/thumbnails/bluey.png",
    videoUrl: "/videos/bluey.mp4",
    tags: ["Animation", "Education", "Kids"],
    githubUrl: "#",
  },
  {
    id: "word-witness",
    title: "Word Witness",
    category: "Web App",
    description: `Biblical study and testimony platform.
Scripture search and cross-referencing tools.
Personal testimony sharing features.
Community discussion forums.`,
    thumbnail: "/thumbnails/ww.png",
    videoUrl: "/videos/wordwitness.mp4",
    tags: ["Religion", "Community", "Study"],
    githubUrl: "#",
  },
  {
    id: "bible-suite",
    title: "Bible Study Suite",
    category: "Web App",
    description: `Comprehensive Bible study application with multiple translations.
Note-taking and highlighting features.
Reading plans and devotionals.
Audio Bible playback.`,
    thumbnail: "/thumbnails/biblestudy.png",
    videoUrl: "/videos/bsuite.gif",
    tags: ["Religion", "Productivity", "Study"],
    githubUrl: "#",
  },
  {
    id: "ancient-bible",
    title: "Ancient Bible Reader",
    category: "Web App",
    description: `Specialized reader for ancient biblical manuscripts.
Side-by-side comparison of translations.
Historical context and commentary.
Scholarly annotations.`,
    thumbnail: "/thumbnails/abr.png",
    videoUrl: "/videos/abr.mp4",
    tags: ["History", "Research", "Academic"],
    githubUrl: "#",
  },
  {
    id: "shaking-hands",
    title: "Shaking of My Hands",
    category: "Website",
    description: `The Shaking of My Hands The Book: A novella about Dr. Grant Hayes, a renowned pediatric neurosurgeon who develops Tardive dyskinesia and spirals into opioid addiction. A raw exploration of burnout, physician mental health, and the long road to redemption.
Dramatic atmospheric design with synopsis and core narrative themes.
Themes: Tardive Dyskinesia, The Addiction Spiral, and Physician Burnout.
Redemption arc and author bio for James Brentlinger.
PWA-enabled with glassmorphic UI elements and animated brand mark tremor effect.
Includes a free EPUB download of the full novella.`,
    thumbnail: "/thumbnails/book.png",
    videoUrl: "/videos/book.mp4",
    videoUrl2: "/videos/book2.mp4",
    tags: ["Author", "Storytelling", "Personal"],
    liveUrl: "/the-shaking-of-my-hands.html",
  },
  {
    id: "sermon-flow",
    title: "Sermon Flow",
    category: "Web App",
    description: `Sermon preparation and organization tool for pastors.
Outline builder with scripture integration.
Illustration and quote library.
Presentation mode for delivery.`,
    thumbnail: "/thumbnails/sermonflowlogo.png",
    videoUrl: "/videos/sermonflow.mp4",
    tags: ["Productivity", "Religion", "Writing"],
    githubUrl: "#",
  },
  {
    id: "songbook-pro",
    title: "Songbook Pro",
    category: "Web App",
    description: `Digital songbook for worship teams and musicians.
Chord charts and lyrics database.
Setlist creation and sharing.
Transposition tools.`,
    thumbnail: "/thumbnails/sb.jpg",
    videoUrl: "/videos/sb.mp4",
    tags: ["Music", "Worship", "Productivity"],
    githubUrl: "#",
  },
  {
    id: "stop-rumpke",
    title: "Stop Rumpke",
    category: "Website",
    description: `Dedicated advocacy and protest platform against landfill expansion in Montgomery County, KY.
Real-time community updates and coordination features for local activism.
Resource hub for legal documents, news, and advocacy information.`,
    thumbnail: "/thumbnails/stoprumpke.png",
    videoUrl: "/videos/stoprumpke.mp4",
    tags: ["Advocacy", "Community", "Protest", "Kentucky"],
    liveUrl: "https://stoprumpke.org/",
  },
];

/* ============= THEME MANAGEMENT ============= */
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
  updateThemeIcon(theme === "dark");
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  
  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    } else {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    }
  }
}

/* ============= NAVBAR SCROLL EFFECT ============= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  
  if (!navbar) {
    console.error('✗ Navbar element not found!');
    return;
  }
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("navbar-initial");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("navbar-initial");
    }
  });
}

/* ============= PROJECTS RENDERING ============= */
function renderProjects() {
  console.log('Rendering projects...');
  console.log('Total projects:', PROJECTS.length);
  
  const grid = document.getElementById("projectsGrid");
  console.log('Projects grid element:', grid);
  
  if (!grid) {
    console.error('✗ Projects grid element not found!');
    return;
  }
  
  const html = PROJECTS.map((project, index) => {
    console.log(`Rendering project ${index + 1}:`, project.title);
    return `
    <div class="project-card" onclick="openProjectModal('${project.id}')">
      <div class="project-thumbnail">
        <img src="${assetPath(project.thumbnail)}" alt="${project.title}" referrerpolicy="no-referrer" onerror="console.error('Failed to load image:', '${project.thumbnail}')">
      </div>
      
      <div class="project-info">
        <div>
          <p class="project-category">${project.category}</p>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description.substring(0, 150)}...</p>
        </div>
        
        <div class="project-footer">
          <div class="project-tags">
            ${project.tags.slice(0, 2).map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <div class="project-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `;
  }).join("");
  
  grid.innerHTML = html;
  console.log('✓ Projects rendered successfully');
}

/* ============= SKILLS SECTION ============= */
function renderSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;
  
  const skills = [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "Node.js / Express", level: 88 },
    { name: "HTML5 / CSS3 / Tailwind", level: 92 },
    { name: "Optical Mathematics", level: 98 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Management", level: 82 },
    { name: "API Integration", level: 87 },
  ];
  
  const html = skills.map((skill) => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join("");
  
  skillsContainer.innerHTML = html;
}

/* ============= PROJECT MODAL ============= */
function openProjectModal(projectId) {
  console.log('Opening modal for project:', projectId);
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) {
    console.error('Project not found:', projectId);
    return;
  }

  const modalOverlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("projectModal");
  const modalMedia = document.getElementById("modalMedia");
  const modalBody = document.getElementById("modalBody");

  if (!modalOverlay || !modal || !modalMedia || !modalBody) {
    console.error('Modal elements not found!');
    return;
  }

  // Render media - Show all available videos/GIFs
  modalMedia.innerHTML = "";
  
  // Helper function to render a single video or GIF
  const renderVideoOrGif = (videoUrl, index) => {
    if (!videoUrl) return '';
    
    // Resolve the path using assetPath helper
    const resolvedUrl = assetPath(videoUrl);
    const isGif = videoUrl.toLowerCase().endsWith('.gif');
    const label = index > 1 ? ` (Part ${index})` : '';
    
    if (isGif) {
      return `
        <div class="modal-video-placeholder">
          ${index > 1 ? `<p style="margin-bottom: 8px; font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Part ${index}</p>` : ''}
          <img src="${resolvedUrl}" alt="${project.title} Demo${label}" style="width: 100%; height: auto; display: block;">
        </div>
      `;
    } else {
      return `
        <div class="modal-video-placeholder">
          ${index > 1 ? `<p style="margin-bottom: 8px; font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Part ${index}</p>` : ''}
          <video src="${resolvedUrl}" controls autoplay muted loop playsinline></video>
        </div>
      `;
    }
  };
  
  let hasMedia = false;
  
  // Render first video
  if (project.videoUrl) {
    modalMedia.innerHTML += renderVideoOrGif(project.videoUrl, 1);
    hasMedia = true;
    console.log('✓ Rendering video 1 for:', project.title);
  }
  
  // Render second video if exists
  if (project.videoUrl2) {
    modalMedia.innerHTML += renderVideoOrGif(project.videoUrl2, 2);
    hasMedia = true;
    console.log('✓ Rendering video 2 for:', project.title);
  }
  
  // If no media available
  if (!hasMedia) {
    modalMedia.innerHTML += `
      <div class="modal-video-placeholder" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 8px;">
        <p style="color: var(--text-muted); font-size: 14px;">No preview available</p>
      </div>
    `;
  }

  // Render body
  const descriptionLines = project.description
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  const descriptionHtml = descriptionLines
    .map((line) => {
      if (line.startsWith("-") || line.startsWith("•")) {
        return `
        <div class="modal-description-item">
          <span class="modal-description-bullet"></span>
          <span class="modal-description-text">${line.substring(1).trim()}</span>
        </div>
      `;
      }
      if (/^\d+\./.test(line)) {
        return `
        <div class="modal-description-item">
          <span class="modal-description-number">${line.split(".")[0]}.</span>
          <span class="modal-description-text">${line.split(".").slice(1).join(".").trim()}</span>
        </div>
      `;
      }
      if (line.includes(":") && line.length < 100) {
        return `<p style="font-weight: bold; color: rgb(var(--foreground)); font-size: 1.125rem; margin-bottom: 0.5rem;">${line}</p>`;
      }
      return line ? `<p>${line}</p>` : "";
    })
    .join("");

  modalBody.innerHTML = `
    <p class="modal-category">${project.category}</p>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-description">${descriptionHtml}</div>
    
    <div class="modal-section">
      <h4 class="modal-section-title">Engineered with</h4>
      <div class="modal-tags">
        ${project.tags.map((tag) => `<span class="modal-tag">${tag}</span>`).join("")}
      </div>
    </div>
    
    <div class="modal-buttons">
      ${
        project.liveUrl
          ? `
        <button onclick="openLivePreview('${project.title}', '${project.liveUrl}')" class="modal-button primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Live Preview
        </button>
      `
          : ""
      }
      ${
        project.githubUrl && project.githubUrl !== "#"
          ? `
        <a href="${project.githubUrl}" target="_blank" class="modal-button secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View Code
        </a>
      `
          : ""
      }
    </div>
  `;

  // Show modal
  modalOverlay.classList.add("active");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  console.log('✓ Modal opened successfully');
}

function closeProjectModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("projectModal");

  if (modalOverlay && modal) {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");
    document.body.style.overflow = "";
    console.log('✓ Modal closed');
  }
}

// Make functions globally accessible
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

/* ============= EVENT LISTENERS ============= */
document.addEventListener("DOMContentLoaded", function () {
  console.log('=== DOM Content Loaded ===');
  initApp();
});

function initApp() {
  console.log('=== Initializing App ===');
  console.log('URL:', window.location.href);
  
  // Init theme
  initTheme();
  console.log('✓ Theme initialized');

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function() {
      console.log('Theme toggle clicked');
      toggleTheme();
    });
    console.log('✓ Theme toggle listener added');
  } else {
    console.error('✗ Theme toggle element not found!');
  }

  // Navbar scroll effect
  initNavbar();
  console.log('✓ Navbar initialized');

  // Render content
  console.log('Rendering projects...');
  renderProjects();
  console.log('Rendering skills...');
  renderSkills();
  
  console.log('=== App Initialization Complete ===');
  console.log('💡 Tip: Scroll down to see your projects below the hero section!');
}

// Close modal on overlay click
document.addEventListener("click", function(e) {
  const modalOverlay = document.getElementById("modalOverlay");
  if (e.target === modalOverlay) {
    closeProjectModal();
  }
});

// Close modal on Escape key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeProjectModal();
    closeLivePreview();
  }
});

// Close modal button
const modalClose = document.getElementById("modalClose");
if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

/* ============= LIVE PREVIEW IFRAME MODAL ============= */
function openLivePreview(title, url) {
  console.log('Opening live preview:', title, url);
  
  const overlay = document.getElementById("previewModalOverlay");
  const modal = document.getElementById("previewModal");
  const iframe = document.getElementById("previewIframe");
  const titleEl = document.getElementById("previewTitle");
  
  if (!overlay || !modal || !iframe || !titleEl) {
    console.error('Preview modal elements not found!');
    return;
  }
  
  // Set title and URL
  titleEl.textContent = title + ' - Live Preview';
  iframe.src = url;
  
  // Show modal
  overlay.style.display = 'block';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  console.log('✓ Live preview opened');
}

function closeLivePreview() {
  const overlay = document.getElementById("previewModalOverlay");
  const modal = document.getElementById("previewModal");
  const iframe = document.getElementById("previewIframe");
  
  if (overlay && modal && iframe) {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    iframe.src = ''; // Clear iframe to stop any media
    document.body.style.overflow = '';
    console.log('✓ Live preview closed');
  }
}

// Make functions globally accessible
window.openLivePreview = openLivePreview;
window.closeLivePreview = closeLivePreview;

// Close preview modal on overlay click
document.addEventListener("click", function(e) {
  const overlay = document.getElementById("previewModalOverlay");
  if (e.target === overlay) {
    closeLivePreview();
  }
});

// Close preview modal button
const previewClose = document.getElementById("previewClose");
if (previewClose) {
  previewClose.addEventListener("click", closeLivePreview);
}

/* ============= SERVICE WORKER REGISTRATION ============= */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✓ Service Worker registered successfully:', registration.scope);
      })
      .catch((error) => {
        console.error('✗ Service Worker registration failed:', error);
      });
  });
}

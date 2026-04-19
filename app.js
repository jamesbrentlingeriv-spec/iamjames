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
    images: ["https://picsum.photos/seed/post1/1200/800"],
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
    images: ["https://picsum.photos/seed/tool1/1200/800"],
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
    images: ["https://picsum.photos/seed/sync1/1200/800"],
    tags: ["Security", "HIPPA", "Real-time"],
    githubUrl: "#",
    liveUrl: "https://ocu-sync.com/",
  },
  {
    id: "pal-web",
    title: "Pal Optical Website",
    category: "Website",
    description: `Official digital presence for Pal Optical featuring booking and lens catalogs.
Optimized for SEO and local marketing to drive patient engagement.
High-performance JavaScript-based landing page with responsive design.`,
    thumbnail: "/thumbnails/palsite.png",
    videoUrl: "/videos/palsite2.mp4",
    images: ["https://picsum.photos/seed/pweb1/1200/800"],
    tags: ["SEO", "Marketing", "JavaScript"],
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/pal-optical-boutique/",
  },
  {
    id: "optitrak",
    title: "OptiTrak",
    category: "Optical Tool",
    description:
      "A remake tracker and manager for eyewear orders within a optical shop. To hopefully find what each employee has the most issue with and coach them to prevent future remakes. Features a tracking dashboard with login, history, reporting, and offline-first sync. Utilizes Firebase-backed remake records, technician management, and canvas charts.",
    thumbnail: "/thumbnails/ocutrack.png",
    videoUrl: "/videos/ocutrack.mp4",
    images: ["https://picsum.photos/seed/track1/1200/800"],
    tags: ["IoT", "Tracking", "Database"],
    githubUrl: "#",
    liveUrl:
      "https://jamesbrentlingeriv-spec.github.io/PALHTML/optitrack-remake-manager/index.html",
  },
  {
    id: "opticalc-3d",
    title: "OptiCalc-3d",
    category: "Optical Tool",
    description: `OPTICALC PRO: Professional 3D Lens Optical Simulation Engine. Uses Three.js for live glasses/head rendering, frame style/material controls, and WebGL-based visualization.
Features:
Professional 3D Lens Optical Simulation Engine with real-time computational optics.
A 3D human head wearing eye glasses that is fed Glasses RX, Pupil Distance, lens material, and frame information to visibly show patient how thick their lenses will be.
Computational optics combined with interactive real-time 3D modeling for precise lens edge thickness and decentration analysis.
Advanced Optical Calculations: Automatically calculates horizontal displacement of the optical center and nasal/temporal edge thickness.
Material Science Integration: Supports CR-39, Trivex, Polycarbonate, and High Index (1.60, 1.67, 1.74) materials.
Frame Geometry Parameters: Captures A Dimension, DBL, B Dimension, and Patient PD.
Built-In Optical Calculator: Full arithmetic operations with prescription adjustment shortcuts.`,
    thumbnail: "/thumbnails/opticalc.png",
    videoUrl: "/videos/opticalc.mp4",
    images: ["https://picsum.photos/seed/calc1/1200/800"],
    tags: ["Three.js", "Math", "3D UI"],
    githubUrl: "#",
    liveUrl:
      "https://jamesbrentlingeriv-spec.github.io/PALHTML/opticalc-3d/index.html",
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
    images: ["https://picsum.photos/seed/church1/1200/800"],
    tags: ["CMS", "Community", "Non-profit"],
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/church/index.html",
  },
  {
    id: "bluey-read",
    title: "Bluey Let's Read",
    category: "Web App",
    description: `Bluey Reading Buddies: An Interactive Educational PWA. A comprehensive, child-focused Progressive Web Application that combines storytelling, gamified learning, and multimedia content.
PWA Implementation: Service Worker-enabled for offline access and installable on iOS/Android.
Library: 9 interactive stories, 17 licensed musical tracks, and complete Season 3 episode collection.
Educational Modules: Interactive letter tracing system and gamified spelling/word games.
Child-Focused UI: Nunito font family, large targets, and Bluey's signature blue theme.
Performance: Lazy-loading iframes and optimized asset loading for diverse connection speeds.`,
    thumbnail: "/thumbnails/bluey.png",
    videoUrl: "/videos/bluey.mp4",
    images: ["https://picsum.photos/seed/bluey1/1200/800"],
    tags: ["Education", "Animation", "UX"],
    githubUrl: "#",
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/BLUEY2/",
  },
  {
    id: "word-witness",
    title: "Word Witness",
    category: "Web App",
    description: `Specialized study tool for textual analysis and semantic tracking of historical documents.
Real-time data visualization of textual relationships and frequency.
High-performance JavaScript environment for analyzing complex datasets.`,
    thumbnail: "/thumbnails/ww.png",
    videoUrl: "/videos/wordwitness.mp4",
    images: ["https://picsum.photos/seed/word1/1200/800"],
    tags: ["Data Viz", "Analysis", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://word-witness-840075680860.us-west1.run.app/",
  },
  {
    id: "bible-suite",
    title: "Bible Study Suite",
    category: "Web App",
    description: `Comprehensive research environment for multi-translation comparison and cross-referencing.
Advanced search engine for rapid discovery of biblical themes and manuscripts.
Integrated study tools for scholars and researchers exploring historical texts.`,
    thumbnail: "/thumbnails/biblestudy.png",
    videoUrl: "/videos/bsuite.gif",
    images: ["https://picsum.photos/seed/suite1/1200/800"],
    tags: ["Search", "Study", "Web App"],
    githubUrl: "#",
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/biblestudy/",
  },
  {
    id: "ancient-reader",
    title: "Ancient Bible Reader",
    category: "Web App",
    description: `Focused reading environment for original Greek and Hebrew manuscripts.
Integrated morphology tools for word analysis and translation assistance.
Minimalist, high-readability UI designed for deep linguistic study.`,
    thumbnail: "/thumbnails/abr.png",
    videoUrl: "/videos/abr.mp4",
    images: ["https://picsum.photos/seed/ancient1/1200/800"],
    tags: ["Language", "Manuscript", "UI"],
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
    category: "Website",
    description: `Official digital companion for the "Sermon Flow" book, streamlining sermon preparation.
Integrated workflow management for pastors and public speakers.
Cloud-synced delivery platform and productivity toolset for content creation.`,
    thumbnail: "/thumbnails/sermonflowlogo.png",
    videoUrl: "/videos/sermonflow.mp4",
    images: ["https://picsum.photos/seed/flow1/1200/800"],
    tags: ["Writing", "Productivity", "Author"],
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/crossapps/",
  },
  {
    id: "songbook",
    title: "Songbook Pro",
    category: "Web App",
    description: `Digital Songbook — Progressive Web App. An offline-first music management application for musicians to organize, transpose, and perform with lyrics and chords.
Transposition engine with slash chord support and chromatic scale navigation.
PDF import using OCR technology.
Persistent setlist builder and searchable song database.
Audio playback integration with Web Audio API.
Offline-first functionality with Service Worker API.`,
    thumbnail: "/thumbnails/sb.jpg",
    videoUrl: "/videos/sb.mp4",
    images: ["https://picsum.photos/seed/song1/1200/800"],
    tags: ["Music", "Chords", "PWA"],
    githubUrl: "#",
    liveUrl: "https://jamesbrentlingeriv-spec.github.io/songbook/",
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
    images: ["https://picsum.photos/seed/protest/1200/800"],
    tags: ["Advocacy", "Community", "Protest", "Kentucky"],
    liveUrl: "https://stoprumpke.org/",
  },
];

/* ============= THEME TOGGLE ============= */
function initTheme() {
  const isDark = localStorage.getItem("isDark") === "true" || true;
  setTheme(isDark);
}

function setTheme(isDark) {
  localStorage.setItem("isDark", isDark);
  const html = document.documentElement;
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (isDark) {
    html.classList.add("dark");
    if (sunIcon) sunIcon.classList.add("hidden");
    if (moonIcon) moonIcon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    if (sunIcon) sunIcon.classList.remove("hidden");
    if (moonIcon) moonIcon.classList.add("hidden");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(!isDark);
}

// Make toggleTheme globally accessible
window.toggleTheme = toggleTheme;

/* ============= NAVBAR SCROLL EFFECT ============= */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
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
        <img src="${project.thumbnail}" alt="${project.title}" referrerpolicy="no-referrer" onerror="console.error('Failed to load image:', '${project.thumbnail}')">
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
  console.log('✓ Projects rendered successfully! Cards created:', PROJECTS.length);
}

/* ============= SKILLS RENDERING ============= */
const SKILLS = window.SKILLS = [
  { name: "JavaScript", level: 95, icon: "⚙️" },
  { name: "CSS3", level: 95, icon: "🎨" },
  { name: "HTML5", level: 95, icon: "📄" },
  { name: "Web APIs", level: 90, icon: "🌐" },
  { name: "Optical Math", level: 98, icon: "🔍" },
  { name: "Business Logic", level: 90, icon: "📊" },
  { name: "UI/UX Design", level: 85, icon: "✏️" },
  { name: "HIPAA Compliance", level: 100, icon: "🔐" },
];

function renderSkills() {
  console.log('Rendering skills...');
  const grid = document.getElementById("skillsGrid");
  
  if (!grid) {
    console.error('✗ Skills grid element not found!');
    return;
  }
  
  const html = SKILLS.map((skill, i) => {
    return `
    <div class="skill-card" style="animation-delay: ${i * 0.1}s">
      <div class="skill-header">
        <div class="skill-name-wrapper">
          <div class="skill-icon">${skill.icon}</div>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `;
  }).join("");
  
  grid.innerHTML = html;
  console.log('✓ Skills rendered successfully!');
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
    
    const isGif = videoUrl.toLowerCase().endsWith('.gif');
    const label = index > 1 ? ` (Part ${index})` : '';
    
    if (isGif) {
      return `
        <div class="modal-video-placeholder">
          ${index > 1 ? `<p style="margin-bottom: 8px; font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Part ${index}</p>` : ''}
          <img src="${videoUrl}" alt="${project.title} Demo${label}" style="width: 100%; height: auto; display: block;">
        </div>
      `;
    } else {
      return `
        <div class="modal-video-placeholder">
          ${index > 1 ? `<p style="margin-bottom: 8px; font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Part ${index}</p>` : ''}
          <video src="${videoUrl}" controls autoplay muted loop playsinline></video>
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
        <a href="${project.liveUrl}" target="_blank" class="modal-button primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Live Preview
        </a>
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
  }
});

// Close modal button
const modalClose = document.getElementById("modalClose");
if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

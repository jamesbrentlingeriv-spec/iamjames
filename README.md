<div align="center">
<img width="1200" height="475" alt="iamjames" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-8a3c-54fd517ec787" />
</div>

# iamjames.lol - Portfolio Website

A high-performance portfolio website built with **pure vanilla HTML, CSS, and JavaScript** - **NO BUILD PROCESS REQUIRED!**

## ✨ Features

- **🚫 No Build Tools** - Zero configuration, no Vite, no Webpack, no compilation
- **Pure Vanilla JavaScript** - No React, Vue, or other frameworks
- **Responsive Design** - Mobile-first CSS Grid and Flexbox layouts
- **Dark Mode Support** - Theme toggle with localStorage persistence
- **Project Modal Gallery** - Interactive project showcase with video/image galleries
- **Smooth Animations** - CSS-based animations and scroll effects
- **Fast Performance** - Minimal dependencies, optimized for speed
- **Zero AI/Tracking** - Removed all Google AI Studio and external tracking references

## 📁 Project Structure

```
├── index.html          # Main HTML file with semantic structure
├── styles.css          # All CSS styling (no preprocessors)
├── app.js              # Vanilla JavaScript for interactivity
├── server.js           # Simple Express static file server
├── package.json        # Minimal dependencies (Express only)
├── public/             # Static assets (videos, thumbnails)
│   ├── thumbnails/     # Project thumbnail images
│   └── videos/         # Project demo videos
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (only for running the simple Express server)
- OR just open `index.html` directly in your browser!

### Option 1: Using Express Server (Recommended)

```bash
# Install dependencies (only Express)
npm install

# Start the server
npm start
```

The site will be available at **`http://localhost:8080`**

### Option 2: Direct File Access (Simplest!)

Just double-click `index.html` to open it in your browser. No server needed!

## 🎯 How It Works

This is a **pure static website**:
1. ✅ HTML renders directly in the browser
2. ✅ CSS applies styles immediately
3. ✅ JavaScript runs without any build step
4. ✅ All functions are globally accessible
5. ✅ No imports, no modules, no compilation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, CSS Variables, Animations
- **Vanilla JavaScript (ES6+)** - DOM manipulation, event handling, localStorage
- **Express** - Optional simple static file server

## 📝 Customization

### Adding Projects

Edit the `PROJECTS` array in [`app.js`](app.js):

```javascript
const PROJECTS = [
  {
    id: "my-project",
    title: "My Awesome Project",
    category: "Web App",
    description: "Description of your project...",
    thumbnail: "/thumbnails/my-project.jpg",
    videoUrl: "/videos/demo.mp4", // optional
    images: ["https://example.com/image1.jpg"],
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://myproject.com", // optional
    githubUrl: "https://github.com/username/repo", // optional
  },
  // Add more projects here...
];
```

### Adding Skills

Edit the `SKILLS` array in [`app.js`](app.js):

```javascript
const SKILLS = [
  { name: "JavaScript", level: 95, icon: "⚙️" },
  { name: "CSS3", level: 90, icon: "🎨" },
  // Add more skills...
];
```

### Colors & Theme

Edit CSS variables in [`styles.css`](styles.css):

```css
:root {
  --primary: 34, 197, 94; /* Green accent color */
  --background: 255, 255, 255; /* Light mode background */
  --foreground: 9, 9, 11; /* Light mode text */
}

:root.dark {
  --background: 9, 9, 11; /* Dark mode background */
  --foreground: 250, 250, 250; /* Dark mode text */
}
```

## 🔧 Troubleshooting

### Projects Not Showing?

1. **Scroll down!** The hero section takes up the full screen
2. Open browser console (F12) to see debug messages
3. Check that thumbnail files exist in `/public/thumbnails/`

### Dark Mode Not Working?

1. Clear your browser's localStorage
2. Check browser console for errors
3. Make sure you're clicking the sun/moon icon in the navbar

### Can't Click Projects?

1. Make sure JavaScript is enabled in your browser
2. Check browser console (F12) for errors
3. Verify `app.js` is loading (check Network tab)

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **⚡ Instant Load** - No JavaScript framework overhead
- **🎨 CSS Animations** - Hardware-accelerated transitions
- **💾 Minimal Size** - Only essential files
- **🚀 No Build Step** - Files served as-is

## 📄 License

© 2026 James Brentlinger. All rights reserved.

---

**💡 Tip:** This site works by simply opening `index.html` in any modern browser. No server, no build process, no complications!

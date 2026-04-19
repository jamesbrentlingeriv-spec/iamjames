const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Also serve public folder at root (like Vite does)
app.use(express.static(path.join(__dirname, 'public')));

// Serve all routes with index.html (for SPA-like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📁 Serving static files from: ${__dirname}`);
  console.log(`📁 Public assets available at: /thumbnails/, /videos/`);
  console.log(`💡 Test URLs:`);
  console.log(`   - http://localhost:${PORT}/thumbnails/post.jpg`);
  console.log(`   - http://localhost:${PORT}/videos/post.mp4`);
  console.log(`💡 Open the URL in your browser to view your portfolio`);
  console.log(`✨ No build process - Pure HTML, CSS & JavaScript!\n`);
});

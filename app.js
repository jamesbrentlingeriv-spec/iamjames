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
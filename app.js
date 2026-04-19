/* ============= BASE PATH CONFIGURATION ============= */
// Helper function to resolve asset paths - works for both localhost and GitHub Pages
const getBasePath = () => {
  // For custom domains, we typically want to use root path
  // unless the site is specifically deployed in a subdirectory
  const hostname = window.location.hostname;
  
  // Check if this is a custom domain (not github.io)
  const isCustomDomain = !hostname.includes('github.io');
  
  // For custom domains like iamjames.lol, use root path
  if (isCustomDomain) {
    return '';
  }
  
  // For github.io domains, analyze the path
  const pathname = window.location.pathname;
  const pathSegments = pathname.split('/').filter(Boolean);
  
  if (pathSegments.length > 0) {
    const excludedPages = ['index.html', 'the-shaking-of-my-hands.html'];
    const lastSegment = pathSegments[pathSegments.length - 1].toLowerCase();
    
    if (!excludedPages.includes(lastSegment)) {
      return '/' + pathSegments[0];
    } else if (pathSegments.length > 1) {
      return '/' + pathSegments[0];
    }
  }
  
  return '';
};

// Helper function to resolve asset paths
const assetPath = (path) => {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path; // External URLs remain unchanged
  }
  const basePath = getBasePath();
  const resolvedPath = basePath + path;
  console.log(`🔗 Resolving path: ${path} → ${resolvedPath}`);
  return resolvedPath;
};

console.log('📍 Hostname:', window.location.hostname);
console.log('📍 Base path detected:', getBasePath() || '(root)');
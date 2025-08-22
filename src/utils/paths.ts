// Utility function to handle GitHub Pages base paths
export const getBasePath = () => {
  // Check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    return '/Cognitive-Oriented-Design';
  }
  // Local development
  return '';
};

export const getAssetPath = (path: string) => {
  return `${getBasePath()}${path}`;
}; 
/**
 * Helper functions for handling Academy URLs
 * 
 * This provides a centralized way to manage Academy links throughout the codebase,
 * handling the differences between development and production environments.
 */

/**
 * Gets the correct Academy base URL based on the current environment
 * 
 * In development: http://localhost:3001
 * In production: /academy
 * 
 * @returns The base URL for the Academy
 */
export function getAcademyBaseUrl(): string {
  // Determine if we're in local development
  const isLocalDevelopment = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  
  // Return the appropriate URL based on environment
  return isLocalDevelopment ? 'http://localhost:3001' : '/academy';
}

/**
 * Gets a full Academy URL including the language and any path segments
 * 
 * @param language The current language code (e.g., 'en', 'nl')
 * @param path Optional path segments to append (should not include leading slash)
 * @returns The full Academy URL
 */
export function getAcademyUrl(language: string, path?: string): string {
  const baseUrl = getAcademyBaseUrl();
  
  // If we're in development, we need to route to the separate Academy app
  if (baseUrl === 'http://localhost:3001') {
    // In development, first add language prefix
    if (path) {
      return `${baseUrl}/${language}/${path}`;
    }
    // Just language prefix
    return `${baseUrl}/${language}`;
  }
  
  // In production, the Academy is mounted at /academy within the main site
  // So we maintain the language prefix for consistency with the rest of the site
  if (path) {
    return `/${language}${baseUrl}/${path}`;
  }
  
  // Just language and base path
  return `/${language}${baseUrl}`;
}
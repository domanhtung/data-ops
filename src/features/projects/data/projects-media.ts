/** Public folder base for UIPro Open Projects assets */
export const PROJECTS_ASSETS = "/uipro-projects-assets";

export function projectsAsset(path: string): string {
  return `${PROJECTS_ASSETS}/${path}`;
}

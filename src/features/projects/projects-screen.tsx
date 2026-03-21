import OpenProjectsView from "@/features/projects/components/open-projects-view";

/** Open Projects listing (UIPro). Primary route: `/projects`. */
export default function ProjectsScreen() {
  return <OpenProjectsView />;
}

/** Same UI — use from App Router pages when the spec asks for this name. */
export function GeneratedScreen() {
  return <OpenProjectsView />;
}

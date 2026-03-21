import Link from "next/link";

/**
 * Custom 404 to avoid hydration mismatches from the default Next.js fallback UI
 * (seen with Next 16 + Turbopack when the built-in not-found tree diverges on client).
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <p className="text-sm font-medium text-neutral-500">404</p>
      <h1 className="text-2xl font-semibold text-neutral-900">
        This page could not be found
      </h1>
      <p className="max-w-md text-neutral-600">
        The link may be broken or the page may have been removed.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}

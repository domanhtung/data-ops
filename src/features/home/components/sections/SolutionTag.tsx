export function SolutionTag({
  children,
  gapClass = "gap-2",
}: {
  children: React.ReactNode;
  gapClass?: string;
}) {
  return (
    <div
      className={`rounded-num-12 border-stroke-sub-300 border-solid border-[1px] flex items-center py-num-6 px-num-11 ${gapClass}`}
    >
      <div className="h-2 w-2 relative rounded-num-50 bg-bg-surface-700" />
      <div className="relative leading-6">{children}</div>
    </div>
  );
}

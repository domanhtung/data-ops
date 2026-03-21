/** Shared UIPro pill shell / text classes (Figma export keys). */

export function getUiproPillShellModifier(variantKey: string): string {
  switch (variantKey) {
    case "Primary-Ghost-Default-Medium 40-Off":
      return "[&]:shadow-[unset] [&]:bg-[unset]";
    case "Primary-Stroke-Default-Medium 40-Off":
      return "[&]:bg-[unset] [&]:border-neutral-800 [&]:border-solid [&]:border-[1px]";
    case "Neutral-Lighter-Default-Medium 40-Off":
      return "[&]:shadow-[unset] [&]:bg-bg-weak-100";
    case "Neutral-Filled-Default-Small 36-Off":
      return "[&]:shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] [&]:rounded-num-8 [&]:bg-bg-surface-700 [&]:p-2";
    case "Neutral-Ghost-Default-Medium 40-Off":
      return "[&]:shadow-[unset] [&]:bg-[unset] [&]:[justify-content:unset] [&]:py-2.5 [&]:px-num-0";
    case "Primary-Filled-Default-Small 36-Off":
      return "[&]:rounded-num-8 [&]:p-2";
    case "Neutral-Lighter-Default-Small 36-Off":
      return "[&]:shadow-[unset] [&]:rounded-num-8 [&]:bg-bg-weak-100 [&]:p-2";
    case "Neutral-Filled-Default-Medium 40-Off":
      return "[&]:shadow-[0px_1px_2px_rgba(82,_88,_102,_0.06)] [&]:bg-bg-surface-700 [&]:[overflow:unset]";
    default:
      return "";
  }
}

export function getUiproPillTextWrapperClass(variantKey: string): string {
  switch (variantKey) {
    case "Primary-Ghost-Default-Medium 40-Off":
    case "Primary-Stroke-Default-Medium 40-Off":
    case "Neutral-Filled-Default-Small 36-Off":
    case "Primary-Filled-Default-Small 36-Off":
    case "Neutral-Lighter-Default-Small 36-Off":
    case "Neutral-Filled-Default-Medium 40-Off":
      return "[&]:shrink-0";
    default:
      return "";
  }
}

export function getUiproPillTextClass(variantKey: string): string {
  switch (variantKey) {
    case "Primary-Ghost-Default-Medium 40-Off":
    case "Primary-Stroke-Default-Medium 40-Off":
      return "[&]:text-neutral-800";
    case "Neutral-Lighter-Default-Medium 40-Off":
    case "Neutral-Ghost-Default-Medium 40-Off":
    case "Neutral-Lighter-Default-Small 36-Off":
      return "[&]:text-text-sub-500";
    default:
      return "";
  }
}

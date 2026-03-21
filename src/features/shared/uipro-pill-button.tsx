import type { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";
import {
  getUiproPillShellModifier,
  getUiproPillTextClass,
  getUiproPillTextWrapperClass,
} from "@/features/shared/uipro-pill-styles";

export type UiproPillButtonProps = {
  className?: string;
  editText: string;
  onlyIcon?: string;
  size?: string;
  state?: string;
  style?: string;
  /** Visual tone (e.g. Primary / Neutral) — not the HTML button `type`. */
  type?: string;
  /** Lay out in normal flow instead of absolute positioning. */
  inFlow?: boolean;
  arrowLeftSLineTop?: CSSProperties["top"];
  arrowLeftSLineLeft?: CSSProperties["left"];
  arrowLeftSLineWidth?: CSSProperties["width"];
  arrowLeftSLineHeight?: CSSProperties["height"];
  arrowLeftSLineFlex?: CSSProperties["flex"];
  arrowLeftSLineAlignSelf?: CSSProperties["alignSelf"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Native button type (submit, etc.). */
  nativeButtonType?: "button" | "submit" | "reset";
  /** Optional icon after label (e.g. arrow-up-right for “Open Projects”). */
  trailingIconSrc?: string;
};

function buildVariantKey(
  type: string,
  style: string,
  state: string,
  size: string,
  onlyIcon: string,
) {
  return [type, style, state, size, onlyIcon].join("-");
}

/** UIPro pill button — text only by default; optional trailing icon for primary CTAs. */
export function UiproPillButton({
  className = "",
  editText,
  onlyIcon = "Off",
  size = "Medium 40",
  state = "Default",
  style = "Filled",
  type = "Primary",
  /** Default true — home/marketing buttons sit in flex rows; pass false for legacy absolute Figma placement. */
  inFlow = true,
  arrowLeftSLineTop,
  arrowLeftSLineLeft,
  arrowLeftSLineWidth,
  arrowLeftSLineHeight,
  arrowLeftSLineFlex,
  arrowLeftSLineAlignSelf,
  onClick,
  nativeButtonType = "button",
  trailingIconSrc,
}: UiproPillButtonProps) {
  const variantKey = buildVariantKey(type, style, state, size, onlyIcon);

  const layoutStyle: CSSProperties = inFlow
    ? {
        width: arrowLeftSLineWidth || undefined,
        height: arrowLeftSLineHeight || undefined,
        flex:
          arrowLeftSLineFlex === "" || arrowLeftSLineFlex === undefined
            ? undefined
            : arrowLeftSLineFlex === "unset"
              ? "unset"
              : arrowLeftSLineFlex,
        alignSelf:
          arrowLeftSLineAlignSelf === "" || arrowLeftSLineAlignSelf === undefined
            ? undefined
            : arrowLeftSLineAlignSelf === "unset"
              ? "unset"
              : arrowLeftSLineAlignSelf,
      }
    : {
        top: arrowLeftSLineTop,
        left: arrowLeftSLineLeft,
        width: arrowLeftSLineWidth || undefined,
        height: arrowLeftSLineHeight || undefined,
      };

  const positionClass = inFlow
    ? "relative inline-flex shrink-0"
    : "absolute top-[0px] left-[0px]";
  const widthClass = inFlow ? "w-auto min-w-0 max-w-full" : "w-[139px]";

  return (
    <button
      type={nativeButtonType}
      className={`${positionClass} ${widthClass} group box-border flex h-10 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-num-10 bg-neutral-800 p-2.5 text-center font-helvetica-now-display text-num-14 text-stroke-white-0 shadow-[0px_1px_2px_rgba(55,_93,_251,_0.08)] outline-none ring-0 transition-[transform,box-shadow] duration-200 ease-out opacity-100 hover:!opacity-100 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(24,24,36,0.22)] active:translate-y-0 active:shadow-[0px_1px_2px_rgba(55,_93,_251,_0.08)] active:duration-100 focus-visible:ring-2 focus-visible:ring-neutral-800/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0px_1px_2px_rgba(55,_93,_251,_0.08)] ${getUiproPillShellModifier(variantKey)} ${className}`}
      style={layoutStyle}
      onClick={onClick}
    >
      <span
        className={`flex min-w-0 items-center justify-center gap-1 px-num-4 py-num-0 ${getUiproPillTextWrapperClass(variantKey)}`}
      >
        <span
          className={`relative min-w-0 truncate font-medium tracking-num--0_01 leading-num-20 ${getUiproPillTextClass(variantKey)}`}
        >
          {editText}
        </span>
        {trailingIconSrc ? (
          <Image
            className="relative h-5 w-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            width={20}
            height={20}
            sizes="20px"
            alt=""
            src={trailingIconSrc}
          />
        ) : null}
      </span>
    </button>
  );
}

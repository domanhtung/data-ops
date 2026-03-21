"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type CSSProperties,
} from "react";
import Image from "next/image";
import {
  getUiproPillShellModifier,
  getUiproPillTextClass,
  getUiproPillTextWrapperClass,
} from "@/features/shared/uipro-pill-styles";
import type { OpenProjectsFilterOption } from "@/features/projects/data/open-projects-nav-config";

const ASSET = "/uipro-projects-assets";

export type OpenProjectsFilterChipSelectProps = {
  className?: string;
  editText?: string;
  onlyIcon?: string;
  size?: string;
  state?: string;
  style?: string;
  type?: string;
  inFlow?: boolean;
  arrowLeftSLineTop?: CSSProperties["top"];
  arrowLeftSLineLeft?: CSSProperties["left"];
  arrowLeftSLineWidth?: CSSProperties["width"];
  arrowLeftSLineHeight?: CSSProperties["height"];
  selectOptions: readonly OpenProjectsFilterOption[];
  selectName: string;
  selectDefaultValue?: string;
  selectValue?: string;
  onSelectChange?: ChangeEventHandler<HTMLSelectElement>;
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

/** Filter row chip with custom listbox + chevron (projects search bar only). */
export default function OpenProjectsFilterChipSelect({
  className = "",
  editText = "Filter",
  onlyIcon = "Off",
  size = "Medium 40",
  state = "Default",
  style = "Lighter",
  type = "Neutral",
  inFlow = true,
  arrowLeftSLineTop,
  arrowLeftSLineLeft,
  arrowLeftSLineWidth,
  arrowLeftSLineHeight,
  selectOptions,
  selectName,
  selectDefaultValue,
  selectValue,
  onSelectChange,
}: OpenProjectsFilterChipSelectProps) {
  const variantKey = buildVariantKey(type, style, state, size, onlyIcon);
  const listboxId = useId();
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const isControlled = selectValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    () => selectDefaultValue ?? "",
  );
  const currentValue = isControlled ? selectValue! : uncontrolledValue;

  const selectedLabel = useMemo(() => {
    return (
      selectOptions.find((o) => o.value === currentValue)?.label ??
      selectOptions[0]?.label ??
      editText
    );
  }, [selectOptions, currentValue, editText]);

  useEffect(() => {
    if (!open) return;
    const onDocDown = (e: MouseEvent) => {
      const el = selectContainerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const commitValue = (next: string) => {
    if (!isControlled) setUncontrolledValue(next);
    setOpen(false);
    onSelectChange?.({
      target: {
        value: next,
        name: selectName,
      },
      currentTarget: {
        value: next,
        name: selectName,
      },
    } as unknown as ChangeEvent<HTMLSelectElement>);
  };

  const layoutStyle: CSSProperties = inFlow
    ? {
        width: arrowLeftSLineWidth || undefined,
        height: arrowLeftSLineHeight || undefined,
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

  const triggerButtonClass = `flex min-h-0 min-w-0 flex-1 cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left font-helvetica-now-display text-num-14 outline-none ring-0 focus-visible:ring-2 focus-visible:ring-neutral-800/25 ${getUiproPillTextClass(variantKey)} ${getUiproPillTextWrapperClass(variantKey)}`;

  return (
    <div
      ref={selectContainerRef}
      className={`${positionClass} ${widthClass} box-border flex h-10 items-center justify-center gap-1 overflow-visible rounded-num-10 bg-neutral-800 p-2.5 text-center font-helvetica-now-display text-num-14 text-stroke-white-0 shadow-[0px_1px_2px_rgba(55,_93,_251,_0.08)] ${getUiproPillShellModifier(variantKey)} ${className}`}
      style={layoutStyle}
    >
      <input type="hidden" name={selectName} value={currentValue} readOnly />
      <button
        type="button"
        id={`${listboxId}-trigger`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={editText}
        className={triggerButtonClass}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="min-w-0 flex-1 truncate pl-num-4 pr-0 text-left font-medium tracking-num--0_01 leading-num-20">
          {selectedLabel}
        </span>
        <Image
          className={`h-5 w-5 shrink-0 opacity-80 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          width={20}
          height={20}
          sizes="20px"
          alt=""
          src={`${ASSET}/arrow-down-s-line.svg`}
        />
      </button>
      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={`${listboxId}-trigger`}
          className="absolute top-full left-0 z-50 mt-1 max-h-60 min-w-full overflow-auto rounded-num-10 border border-stroke-sub-300 bg-white py-1 shadow-[0px_4px_16px_rgba(15,_23,_42,_0.12)]"
        >
          {selectOptions.map((opt) => (
            <li
              key={opt.value === "" ? `empty-${selectName}` : opt.value}
              role="presentation"
            >
              <button
                type="button"
                role="option"
                aria-selected={opt.value === currentValue}
                className={`w-full cursor-pointer px-3 py-2.5 text-left text-num-14 font-medium leading-num-20 tracking-num--0_01 text-text-main-900 hover:bg-bg-weak-100 ${
                  opt.value === currentValue ? "bg-bg-weak-100" : ""
                }`}
                onClick={() => commitValue(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

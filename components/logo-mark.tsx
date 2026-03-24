import type { ComponentPropsWithoutRef } from "react";

type LogoMarkProps = ComponentPropsWithoutRef<"svg">;

export function LogoMark(props: LogoMarkProps) {
  return (
    <svg viewBox="0 0 256 256" fill="none" aria-hidden="true" {...props}>
      <rect x="15" y="15" width="226" height="226" rx="2" stroke="currentColor" strokeWidth="8" />
      <path
        d="M44 56H93V120H163V56H212V212H163V154C163 134.67 147.33 119 128 119C108.67 119 93 134.67 93 154V212H44V56Z"
        fill="currentColor"
      />
      <path d="M103 56H153V70H136V104H120V70H103V56Z" fill="currentColor" />
    </svg>
  );
}

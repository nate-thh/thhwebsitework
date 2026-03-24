import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", children }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-thh-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl leading-tight text-thh-navy md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-thh-slate md:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}

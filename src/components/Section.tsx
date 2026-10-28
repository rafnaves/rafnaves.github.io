import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  /** Push the content into the right column on wide screens, under the title. */
  indent?: boolean;
  children: ReactNode;
};

export function Section({ id, label, title, indent = false, children }: SectionProps) {
  const titleId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="below-fold scroll-mt-28 border-t py-14 sm:py-16 md:scroll-mt-20"
    >
      <div className="wrap">
        <SectionHeader titleId={titleId} label={label} title={title} />
        <div className={cn(indent && "lg:pl-[224px]")}>{children}</div>
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  titleId: string;
  label: string;
  title: string;
};

function SectionHeader({ titleId, label, title }: SectionHeaderProps) {
  return (
    <div className="mb-8 grid gap-1.5 lg:mb-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:items-baseline lg:gap-6">
      <p className="eyebrow">{label}</p>
      <h2
        id={titleId}
        className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.005em] [font-stretch:108%]"
      >
        {title}
      </h2>
    </div>
  );
}

import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const titleId = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={titleId} className="below-fold anchor-offset border-t py-14 sm:py-16">
      <div className="wrap">
        <h2
          id={titleId}
          className="mb-8 text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.005em] [font-stretch:108%] lg:mb-10"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

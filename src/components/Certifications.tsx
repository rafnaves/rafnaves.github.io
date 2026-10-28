import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

type CertificationsProps = {
  items: readonly Certification[];
};

export function Certifications({ items }: CertificationsProps) {
  const withThumbnail = items.filter((item) => item.thumbnail);
  const others = items.filter((item) => !item.thumbnail);

  return (
    <div className="grid gap-8">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {withThumbnail.map((item) => (
          <CertificationCard key={item.href} item={item} />
        ))}
      </ul>
      {others.length > 0 && (
        <ul className="grid border-t sm:grid-cols-2 sm:gap-x-7">
          {others.map((item) => (
            <li key={item.href} className="min-w-0 border-b py-3">
              <span className="block font-mono text-[0.7rem] tracking-[0.06em] text-muted-foreground uppercase">
                {item.issuer}
              </span>
              <CertificationLink item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CertificationCard({ item }: { item: Certification }) {
  const { thumbnail } = item;

  return (
    <li className="group relative grid min-w-0 content-start gap-3 rounded-lg border bg-card p-2.5 transition-colors hover:border-primary/60 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      {thumbnail && (
        <div className="stage grid aspect-[4/3] place-items-center overflow-hidden rounded-md border p-2.5">
          <img
            src={thumbnail.src}
            width={thumbnail.width}
            height={thumbnail.height}
            alt=""
            loading="lazy"
            decoding="async"
            className={cn(
              "motion-safe:transition-transform motion-safe:duration-300 group-hover:-rotate-1",
              thumbnail.shape === "badge"
                ? "h-[82%] w-auto"
                : "max-h-full w-full rounded-[2px] object-contain shadow-[0_1px_3px_rgb(0_0_0/0.12)]",
            )}
          />
        </div>
      )}
      <div className="grid gap-1 px-0.5 pb-0.5">
        <span className="font-mono text-[0.7rem] tracking-[0.06em] text-muted-foreground uppercase">
          {item.issuer}
        </span>
        {/* The link covers the whole card, so the card is one big click target. */}
        <CertificationLink item={item} stretched />
        {item.meta && <span className="font-mono text-xs text-muted-foreground">{item.meta}</span>}
      </div>
    </li>
  );
}

function CertificationLink({ item, stretched = false }: { item: Certification; stretched?: boolean }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-[0.9375rem] leading-snug font-medium text-foreground hover:text-primary",
        stretched && "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none",
      )}
    >
      {item.title}
      <ArrowUpRight aria-hidden="true" className="ml-0.5 inline size-3.5 align-[-0.1em] text-muted-foreground" />
    </a>
  );
}

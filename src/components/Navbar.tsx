import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/types";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  name: string;
  items: readonly NavItem[];
  observedSectionIds: readonly string[];
};

/**
 * Fixed to the top of the viewport from the first paint. Its height is --header-h
 * (index.css), which App reserves above the content and anchors use as offset.
 */
export function Navbar({ name, items, observedSectionIds }: NavbarProps) {
  const activeSection = useActiveSection(observedSectionIds);
  const activeHref = items.find((item) => activeSection && item.sectionIds.includes(activeSection))?.href;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="wrap flex flex-wrap items-center gap-x-4">
        <a
          href="#topo"
          className="flex h-14 items-center gap-2.5 font-display font-extrabold tracking-[0.01em] [font-stretch:112%]"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-sm bg-action text-[0.7rem] text-action-foreground"
          >
            RN
          </span>
          {name}
        </a>

        {/* On phones the links wrap to a second row that scrolls sideways on its own. */}
        <nav
          aria-label="Seções"
          className="order-last -mx-1 flex h-10 w-[calc(100%+0.5rem)] items-start overflow-x-auto [mask-image:linear-gradient(to_right,#000_88%,transparent)] [scrollbar-width:none] md:order-none md:mx-0 md:ml-auto md:h-auto md:w-auto md:overflow-visible md:[mask-image:none]"
        >
          <ul className="flex gap-0.5 pr-6 md:gap-1 md:pr-0">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.href === activeHref ? "location" : undefined}
                  className="block rounded-md px-2 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground aria-[current=location]:bg-secondary aria-[current=location]:text-secondary-foreground md:px-2.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto md:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

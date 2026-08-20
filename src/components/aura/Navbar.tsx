import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const LINKS = [
  { label: "New Arrivals", href: "#collection" },
  { label: "Collections", href: "#explore" },
  { label: "Men", href: "#essentials" },
  { label: "Women", href: "#essentials" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,color] duration-700 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 text-foreground backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-primary-foreground"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10"
      >
        <a href="#top" className="font-serif text-2xl leading-none tracking-[0.34em] md:text-[1.6rem]">
          AURA
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-eyebrow link-underline opacity-90 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-7 md:flex">
          <button aria-label="Search" className="transition-opacity hover:opacity-60">
            <Search strokeWidth={1} className="size-[18px]" />
          </button>
          <button aria-label="Account" className="transition-opacity hover:opacity-60">
            <User strokeWidth={1} className="size-[18px]" />
          </button>
          <button aria-label="Shopping bag" className="transition-opacity hover:opacity-60">
            <ShoppingBag strokeWidth={1} className="size-[18px]" />
          </button>
        </div>

        <div className="flex items-center gap-6 md:hidden">
          <button aria-label="Shopping bag" className="transition-opacity hover:opacity-60">
            <ShoppingBag strokeWidth={1} className="size-[18px]" />
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="transition-opacity hover:opacity-60"
          >
            {open ? <X strokeWidth={1} className="size-5" /> : <Menu strokeWidth={1} className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden bg-background text-foreground transition-[max-height] duration-700 ease-out md:hidden ${
          open ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-10">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-eyebrow">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
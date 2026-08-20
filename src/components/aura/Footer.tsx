const COLUMNS = [
  { title: "Shop", links: ["New Arrivals", "Collections", "Men", "Women"] },
  { title: "About", links: ["Our Story", "Journal", "Careers"] },
  { title: "Help", links: ["Contact", "Shipping", "Returns", "FAQ"] },
  { title: "Follow", links: ["Instagram", "Pinterest", "TikTok"] },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] px-6 pt-24 pb-12 md:px-10 md:pt-32">
      <p className="font-serif text-[3.6rem] leading-none tracking-[0.3em] md:text-[8rem]">AURA</p>

      <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-8">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-eyebrow text-muted-foreground">{col.title}</h3>
            <ul className="mt-6 space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#top" className="link-underline text-sm tracking-wide">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-col gap-4 border-t border-border pt-8 text-xs tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 AURA. All rights reserved.</p>
        <p>Privacy · Terms · Shipping</p>
      </div>
    </footer>
  );
}
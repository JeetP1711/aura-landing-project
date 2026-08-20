import catEssentials from "@/assets/cat-essentials.jpg";
import catForm from "@/assets/cat-form.jpg";
import catAfter from "@/assets/cat-after.jpg";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { num: "01", title: "ESSENTIALS", copy: "Minimal everyday pieces.", image: catEssentials },
  { num: "02", title: "FORM", copy: "Structured silhouettes and refined tailoring.", image: catForm },
  { num: "03", title: "AFTER HOURS", copy: "Elevated pieces designed for evenings.", image: catAfter },
];

export function CollectionShowcase() {
  return (
    <section id="explore" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <h2 className="font-serif text-[2.4rem] leading-none tracking-[0.14em] md:text-[3.5rem]">
          EXPLORE AURA
        </h2>
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.num} delay={i * 120} className="w-[82vw] shrink-0 snap-start md:w-auto">
            <a href="#essentials" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={c.image}
                  alt={`${c.title} category`}
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-primary-foreground md:p-8">
                  <span className="text-eyebrow transition-transform duration-700 ease-out group-hover:translate-x-2">
                    {c.num} — {c.title}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <p className="max-w-[16rem] text-sm leading-relaxed opacity-85">{c.copy}</p>
                    <span
                      aria-hidden
                      className="translate-x-[-8px] text-lg opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
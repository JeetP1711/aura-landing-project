import editorialImg from "@/assets/editorial.jpg";
import { Reveal } from "./Reveal";

export function EditorialSplit() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal>
          <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
            <img
              src={editorialImg}
              alt="Model in an oatmeal knit and ivory trousers seated on a bench"
              loading="lazy"
              width={1024}
              height={1280}
              className="size-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="font-serif text-[2.8rem] leading-[0.98] tracking-[0.04em] md:text-[5rem]">
            DESIGNED
            <br />
            TO FEEL
            <br />
            EFFORTLESS.
          </h2>
          <p className="mt-10 max-w-md text-sm leading-[1.9] text-muted-foreground">
            AURA is built around simplicity — refined essentials designed to move naturally through
            everyday life.
          </p>
          <a href="#explore" className="text-eyebrow link-underline mt-12 inline-flex items-center gap-3">
            Discover AURA <span aria-hidden>&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
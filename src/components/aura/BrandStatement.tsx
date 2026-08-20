import { Reveal } from "./Reveal";

export function BrandStatement() {
  return (
    <section className="px-6 py-36 md:py-56">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-[2.6rem] leading-[1.06] tracking-[0.05em] md:text-[5.2rem]">
          STYLE DOESN&rsquo;T
          <br />
          HAVE TO
          <br />
          SHOUT.
        </h2>
        <p className="mx-auto mt-12 max-w-md text-sm leading-[1.9] text-muted-foreground">
          AURA believes in clothing that speaks through proportion, texture and detail.
        </p>
      </Reveal>
    </section>
  );
}
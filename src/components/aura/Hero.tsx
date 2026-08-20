import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="AURA campaign: model in an ivory overshirt and charcoal trousers in a sunlit concrete space"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="animate-slow-zoom absolute inset-0 size-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 text-primary-foreground md:px-10 md:pb-28">
        <p
          className="text-eyebrow animate-rise mb-8 opacity-80"
          style={{ animationDelay: "0.2s" }}
        >
          Timeless silhouettes. Quiet confidence.
        </p>
        <h1 className="animate-rise font-serif text-[3.4rem] leading-[0.95] tracking-[0.02em] sm:text-7xl md:text-[7.5rem] lg:text-[9rem]" style={{ animationDelay: "0.4s" }}>
          <span className="block tracking-[0.28em]">AURA</span>
          <span className="mt-2 block text-[1.55rem] font-light tracking-[0.3em] sm:text-3xl md:text-[2.6rem]">
            THE ART OF EVERYDAY
          </span>
        </h1>
        <div className="animate-rise mt-12" style={{ animationDelay: "0.7s" }}>
          <a href="#collection" className="text-eyebrow link-underline inline-flex items-center gap-3">
            Explore Collection <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>

      <div
        className="animate-rise absolute inset-x-0 bottom-7 flex justify-center text-primary-foreground"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="text-eyebrow opacity-70">Scroll &darr;</span>
      </div>
    </section>
  );
}
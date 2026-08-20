import campaignImg from "@/assets/campaign.jpg";

export function Campaign() {
  return (
    <section className="relative h-[80svh] w-full overflow-hidden md:h-[92svh]">
      <img
        src={campaignImg}
        alt="AURA 2026 campaign: two figures walking across a sunlit stone plaza"
        loading="lazy"
        width={1920}
        height={1088}
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-6 pb-16 text-primary-foreground md:px-10 md:pb-20">
        <p className="font-serif text-4xl tracking-[0.24em] md:text-6xl">AURA / 2026</p>
        <p className="text-eyebrow mt-6 opacity-85">The new standard of everyday.</p>
        <a href="#essentials" className="text-eyebrow link-underline mt-10 inline-flex w-fit items-center gap-3">
          View Campaign <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
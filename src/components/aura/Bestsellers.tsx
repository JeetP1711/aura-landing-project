import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { products } from "./products";

export function Bestsellers() {
  return (
    <section id="essentials" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
      <Reveal className="flex items-baseline justify-between gap-6">
        <h2 className="font-serif text-[2.4rem] leading-none tracking-[0.14em] md:text-[3.5rem]">
          THE ESSENTIALS
        </h2>
        <a href="#collection" className="text-eyebrow link-underline hidden md:inline-flex">
          View All
        </a>
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:mt-24 md:grid md:grid-cols-4 md:gap-x-10 md:overflow-visible md:pb-0">
        {products.map((p, i) => (
          <ProductCard
            key={p.name}
            product={p}
            delay={i * 100}
            quickAdd
            className="w-[74vw] shrink-0 snap-start md:w-auto"
          />
        ))}
      </div>
    </section>
  );
}
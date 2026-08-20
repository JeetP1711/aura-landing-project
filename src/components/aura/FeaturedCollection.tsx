import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { products } from "./products";

export function FeaturedCollection() {
  return (
    <section id="collection" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="font-serif text-[2.6rem] leading-[1.02] tracking-[0.06em] md:text-[4.5rem]">
            THE NEW
            <br />
            COLLECTION
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Designed for the moments that don&rsquo;t need an occasion.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-28 md:grid-cols-12">
        <ProductCard product={products[0]} className="md:col-span-6" />
        <ProductCard product={products[1]} delay={120} className="md:col-span-4 md:col-start-8 md:mt-40" />
        <ProductCard product={products[2]} delay={80} className="md:col-span-5 md:col-start-2" />
        <ProductCard product={products[3]} delay={160} className="md:col-span-6 md:col-start-7 md:-mt-24" />
      </div>
    </section>
  );
}
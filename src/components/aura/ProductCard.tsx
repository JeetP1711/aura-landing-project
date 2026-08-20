import { Reveal } from "./Reveal";

export type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
  hoverImage: string;
};

export function ProductCard({
  product,
  delay = 0,
  quickAdd = false,
  className = "",
}: {
  product: Product;
  delay?: number;
  quickAdd?: boolean;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <article className="group">
        <a href="#essentials" className="block">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={912}
              height={1200}
              className="absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <img
              src={product.hoverImage}
              alt=""
              aria-hidden
              loading="lazy"
              width={912}
              height={1200}
              className="absolute inset-0 size-full scale-[1.03] object-cover opacity-0 transition-[opacity,transform] duration-[1200ms] ease-out group-hover:scale-100 group-hover:opacity-100"
            />
            {quickAdd && (
              <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-eyebrow block bg-background/90 py-3 text-center text-foreground backdrop-blur-sm">
                  Quick Add
                </span>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-baseline justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl leading-tight tracking-wide">{product.name}</h3>
              <p className="text-eyebrow mt-2 text-muted-foreground">{product.category}</p>
            </div>
            <p className="text-sm tracking-[0.12em] text-foreground">{product.price}</p>
          </div>
        </a>
      </article>
    </Reveal>
  );
}
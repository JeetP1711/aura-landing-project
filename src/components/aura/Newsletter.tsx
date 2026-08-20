import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <section className="border-y border-border">
      <Reveal className="mx-auto max-w-2xl px-6 py-28 text-center md:py-40">
        <h2 className="font-serif text-[2.2rem] leading-none tracking-[0.16em] md:text-[3rem]">
          STAY IN THE AURA
        </h2>
        <p className="mx-auto mt-8 max-w-md text-sm leading-[1.9] text-muted-foreground">
          Be the first to discover new collections, campaigns and limited releases.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-12 flex max-w-md items-center gap-6 border-b border-border pb-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Your email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL"
            className="text-eyebrow w-full bg-transparent text-left outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="text-eyebrow link-underline shrink-0">
            Join
          </button>
        </form>
        <p aria-live="polite" className="text-eyebrow mt-6 h-4 text-muted-foreground">
          {done ? "Thank you — welcome to AURA." : ""}
        </p>
      </Reveal>
    </section>
  );
}
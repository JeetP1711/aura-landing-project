import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/aura/Navbar";
import { Hero } from "@/components/aura/Hero";
import { FeaturedCollection } from "@/components/aura/FeaturedCollection";
import { EditorialSplit } from "@/components/aura/EditorialSplit";
import { CollectionShowcase } from "@/components/aura/CollectionShowcase";
import { BrandStatement } from "@/components/aura/BrandStatement";
import { Campaign } from "@/components/aura/Campaign";
import { Bestsellers } from "@/components/aura/Bestsellers";
import { Newsletter } from "@/components/aura/Newsletter";
import { Footer } from "@/components/aura/Footer";

const title = "AURA — The Art of Everyday";
const description =
  "AURA is a contemporary clothing label built on minimal design, timeless silhouettes and premium materials. Explore the new collection.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <EditorialSplit />
        <CollectionShowcase />
        <BrandStatement />
        <Campaign />
        <Bestsellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

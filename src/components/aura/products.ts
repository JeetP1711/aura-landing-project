import p1a from "@/assets/p1-a.jpg";
import p1b from "@/assets/p1-b.jpg";
import p2a from "@/assets/p2-a.jpg";
import p2b from "@/assets/p2-b.jpg";
import p3a from "@/assets/p3-a.jpg";
import p3b from "@/assets/p3-b.jpg";
import p4a from "@/assets/p4-a.jpg";
import p4b from "@/assets/p4-b.jpg";
import type { Product } from "./ProductCard";

export const products: Product[] = [
  {
    name: "AURA Essential Overshirt",
    category: "Outerwear",
    price: "$240",
    image: p1a,
    hoverImage: p1b,
  },
  {
    name: "Signature Relaxed Tee",
    category: "Jersey",
    price: "$95",
    image: p2a,
    hoverImage: p2b,
  },
  {
    name: "AURA Tailored Trouser",
    category: "Tailoring",
    price: "$290",
    image: p3a,
    hoverImage: p3b,
  },
  {
    name: "Everyday Knit",
    category: "Knitwear",
    price: "$210",
    image: p4a,
    hoverImage: p4b,
  },
];
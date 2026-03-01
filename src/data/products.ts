import productBlazer from "@/assets/product-blazer.png";
import productTrench from "@/assets/product-trench.png";
import productCorset from "@/assets/product-corset.png";
import productDupatta from "@/assets/product-dupatta.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  mood: string;
  description: string;
  materials: string;
  sizing: string;
}

export const products: Product[] = [
  {
    id: "arranged-alibi-blazer",
    name: "The Arranged Alibi Blazer",
    price: 12499,
    image: productBlazer,
    mood: "Vengeful",
    description:
      "Perfect for when you need to look intimidating across a boardroom or a high-stakes family dinner table. Cut from midnight-black velvet with blood-red silk lining, this blazer features razor-sharp shoulders and a cinched waist. It doesn't just make an entrance; it sets the terms.",
    materials: "100% Premium Velvet, Silk Lining",
    sizing: "Tailored, size up for oversized streetwear fit",
  },
  {
    id: "heartbreak-trench",
    name: "The Heartbreak Trench",
    price: 18999,
    image: productTrench,
    mood: "Heartbreak",
    description:
      "For walking away from everything that no longer serves you. A sweeping silhouette in matte black, designed for the moments where departure is your most powerful statement.",
    materials: "Heavy-weight Cotton Twill, Satin Lining",
    sizing: "Oversized fit, true to size for dramatic drape",
  },
  {
    id: "vengeance-corset",
    name: "The Vengeance Corset",
    price: 6500,
    image: productCorset,
    mood: "Triumphant",
    description:
      "Structured. Unapologetic. A corset that isn't about restriction — it's about reclaiming power through silhouette. Intricate black-on-black detailing with steel boning.",
    materials: "Italian Brocade, Steel Boning, Cotton Lining",
    sizing: "Fitted, consult size chart for measurements",
  },
  {
    id: "midnight-silk-dupatta",
    name: "The Midnight Silk Dupatta",
    price: 4200,
    image: productDupatta,
    mood: "Untouchable",
    description:
      "A cascade of midnight silk with hand-finished burgundy edges. Wear it draped, wrapped, or thrown over one shoulder like the final word in an argument you've already won.",
    materials: "100% Mulberry Silk, Hand-embroidered Edges",
    sizing: "One size — 2.5m length",
  },
];

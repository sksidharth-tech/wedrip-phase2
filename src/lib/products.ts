export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  gsm: string;
  category: "tee" | "hoodie";
  color: string;
  bgColor: string;
  image: string;
  number: string;
}

export const products: Product[] = [
  {
    id: "scene-01",
    name: "Scene 01",
    tagline: "The one that started the noise",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    color: "#f5efe3",
    bgColor: "#f5efe3",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    number: "01",
  },
  {
    id: "after-hours",
    name: "After Hours",
    tagline: "For the ones who work when the city sleeps",
    price: 4290,
    gsm: "320 GSM",
    category: "hoodie",
    color: "#1a1a3e",
    bgColor: "#1a1712",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    number: "02",
  },
  {
    id: "studio-02",
    name: "Studio 02",
    tagline: "Made for the ones who create, not consume",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    color: "#c4713b",
    bgColor: "#2a2318",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    number: "03",
  },
  {
    id: "no-fixed-address",
    name: "No Fixed Address",
    tagline: "For the drifters, the wanderers, the unhomed",
    price: 4290,
    gsm: "320 GSM",
    category: "hoodie",
    color: "#1a1a1a",
    bgColor: "#111",
    image: "https://images.unsplash.com/photo-1578768079470-0a40c90d95e2?w=600&q=80",
    number: "04",
  },
  {
    id: "signal-lost",
    name: "Signal Lost",
    tagline: "When the broadcast gets too loud, go offline",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    color: "#2d2d2d",
    bgColor: "#1a1a1a",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
    number: "05",
  },
  {
    id: "rewind",
    name: "Rewind",
    tagline: "Fast forward was a mistake. We are going back.",
    price: 4490,
    gsm: "320 GSM",
    category: "hoodie",
    color: "#4a3728",
    bgColor: "#2a2318",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
    number: "06",
  },
];

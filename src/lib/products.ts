export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  gsm: string;
  category: "tee" | "hoodie";
  image: string;
  number: string;
}

export const products: Product[] = [
  {
    id: "scene-01",
    name: "Tokyo Drift Tee",
    tagline: "for the ones who move different",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    image: "https://images.pexels.com/photos/19101424/pexels-photo-19101424.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "01",
  },
  {
    id: "after-hours",
    name: "Midnight City Hoodie",
    tagline: "when the city lights hit different",
    price: 4290,
    gsm: "320 GSM",
    category: "hoodie",
    image: "https://images.pexels.com/photos/11985575/pexels-photo-11985575.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "02",
  },
  {
    id: "studio-02",
    name: "Neon Dreams Tee",
    tagline: "glow different under fluorescent lights",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    image: "https://images.pexels.com/photos/9637854/pexels-photo-9637854.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "03",
  },
  {
    id: "no-fixed-address",
    name: "Wanderer Hoodie",
    tagline: "home is wherever the wifi connects",
    price: 4290,
    gsm: "320 GSM",
    category: "hoodie",
    image: "https://images.pexels.com/photos/29538870/pexels-photo-29538870.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "04",
  },
  {
    id: "signal-lost",
    name: "Static Tee",
    tagline: "lost signal, found myself",
    price: 2490,
    gsm: "240 GSM",
    category: "tee",
    image: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "05",
  },
  {
    id: "rewind",
    name: "VHS Memories Hoodie",
    tagline: "rewind to the moments that mattered",
    price: 4490,
    gsm: "320 GSM",
    category: "hoodie",
    image: "https://images.pexels.com/photos/14325631/pexels-photo-14325631.jpeg?auto=compress&cs=tinysrgb&w=600",
    number: "06",
  },
];

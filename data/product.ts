export type Product = {
  slug: string;
  title: string;
  thumbnail?: string;
  description: string;
  features: string[];
  images?: string[];
};

export const products: Product[] = [
  {
    slug: "ctp-plate",
    title: "CTP Plate",
    thumbnail: "/images/ctpPlate/1.png",
    description:
      "High-performance Computer-to-Plate (CTP) plates designed for precision offset printing.",
    features: [
      "High-resolution imaging",
      "Consistent ink transfer",
      "Durable aluminum base",
      "Long press life",
      "Compatible with major CTP systems"
    ],
    images: [
      "/images/ctpPlate/1.png",
      "/images/ctpPlate/2.png",
      "/images/ctpPlate/3.png",
      "/images/ctpPlate/4.png",
      "/images/ctpPlate/5.png",
    ],
  },
];
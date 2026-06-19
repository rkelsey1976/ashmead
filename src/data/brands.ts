export interface Brand {
  name: string;
  logo: string | null;
  url: string;
}

export const brands: Brand[] = [
  {
    name: "Redland",
    logo: "/images/logos/redland.svg",
    url: "https://www.redland.co.uk",
  },
  {
    name: "Marley",
    logo: "/images/logos/marley.svg",
    url: "https://www.marleyroofing.co.uk",
  },
  {
    name: "Velux",
    logo: "/images/logos/velux.svg",
    url: "https://www.velux.com",
  },
  {
    name: "Kober",
    logo: "/images/logos/kober.png",
    url: "https://www.kober.co.uk",
  },
  {
    name: "Kytun",
    logo: "/images/logos/kytun.svg",
    url: "https://www.kytun.com",
  },
  {
    name: "A. Proctor Group",
    logo: "/images/logos/a-proctor-group.svg",
    url: "https://www.proctorgroup.com",
  },
  {
    name: "Rockwool",
    logo: "/images/logos/rockwool.jpg",
    url: "https://www.rockwool.com/uk/",
  },
  {
    name: "Roto",
    logo: "/images/logos/roto.png",
    url: "https://www.roto.eu",
  },
  {
    name: "FloPlast",
    logo: "/images/logos/floplast.png",
    url: "https://www.floplast.co.uk",
  },
  {
    name: "British Lead Mills",
    logo: "/images/logos/british-lead-mills.svg",
    url: "https://www.britishlead.com",
  },
  {
    name: "Cupa Pizarras",
    logo: "/images/logos/cupa-pizarras.jpg",
    url: "https://www.cupapizarras.com",
  },
];

export const brandByName: Record<string, Brand> = Object.fromEntries(
  brands.map((b) => [b.name, b])
);

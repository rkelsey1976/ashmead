export const PHONE = "0117 986 0600";
export const PHONE_HREF = "tel:+441179860600";
export const BUSINESS_NAME = "Ashmead Roofing Supplies Ltd";
export const EMAIL = "sales@ashmeadroofing.co.uk";
export const ADDRESS = "Ashmead Roofing Supplies Ltd, Bristol Depot, BS2 0SP";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const brands = [
  "Redland",
  "Marley",
  "Velux",
  "Kober",
  "Kytun",
  "A. Proctor Group",
  "Rockwool",
  "Roto",
  "FloPlast",
  "British Lead Mills",
  "Cupa Pizarras"
];

/**
 * Hero images — swap these paths when real photos are ready.
 * Pages fall back to the light green background when the image file doesn't exist.
 * Using variant="full" gives a full-width image with dark overlay.
 * Using variant="split" gives charcoal left + image right.
 */
export const heroImages = {
  home: "/images/hero-home.jpg",
  about: "/images/hero-about.jpg",
  contact: "/images/hero-contact.jpg",
  products: "/images/hero-products.jpg",
  areas: "/images/hero-areas.jpg",
  training: "/images/hero-products.jpg",
  // Product pages — key matches product slug
  "concrete-tiles": "/images/hero-concrete-tiles.jpg",
  "clay-tiles": "/images/hero-clay-tiles.jpg",
  slates: "/images/hero-slates.jpg",
  "flat-roof-membranes": "/images/hero-flat-roof.jpg",
  "pitched-roof-membranes": "/images/hero-pitched-roof.jpg",
  "roofing-battens": "/images/hero-battens.jpg",
  "nails-and-fixings": "/images/hero-fixings.jpg",
  "fascias-and-guttering": "/images/hero-guttering.jpg",
  insulation: "/images/hero-insulation.jpg",
  "ventilation-products": "/images/hero-ventilation.jpg",
  "lead-products": "/images/hero-lead.jpg",
  "roof-windows": "/images/hero-roof-windows.jpg",
  classicbond: "/images/hero-classicbond.jpg",
  duopoly: "/images/hero-duopoly.jpg",
  resitrix: "/images/hero-resitrix.jpg",
  fatra: "/images/hero-fatra.jpg",
  // Area pages — key matches area slug
  bristol: "/images/hero-bristol.jpg",
  bath: "/images/hero-bath.jpg",
  somerset: "/images/hero-somerset.jpg",
  gloucester: "/images/hero-gloucester.jpg",
  wiltshire: "/images/hero-wiltshire.jpg",
} as const;
export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike T.",
    role: "Roofer",
    location: "Bristol",
    quote: "Ashmead always has the tiles and battens I need in stock. Delivery next day across Bristol saves me hours every week.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Builder",
    location: "Bath",
    quote: "Great trade prices and the team actually knows roofing. They helped me spec the right membrane for a tricky pitched job.",
    rating: 5,
  },
  {
    name: "Dave R.",
    role: "Property Developer",
    location: "Somerset",
    quote: "Reliable supplier for our developments. Good stock levels, fair pricing and they deliver when they say they will.",
    rating: 5,
  },
  {
    name: "James H.",
    role: "Roofing Contractor",
    location: "Gloucester",
    quote: "Been using Ashmead for years. Trade counter is quick, staff are helpful and they carry all the big brands.",
    rating: 5,
  },
  {
    name: "Chris P.",
    role: "Self-Builder",
    location: "Wiltshire",
    quote: "Ordered slates and VELUX windows online, everything arrived on time and well packaged. Would recommend.",
    rating: 5,
  },
  {
    name: "Tom K.",
    role: "Roofer",
    location: "Keynsham",
    quote: "Flat roofing membranes, lead products, fixings — one stop shop. No more running around different merchants.",
    rating: 5,
  },
];

export interface Area {
  slug: string;
  name: string;
  h1: string;
  shortDesc: string;
  longDesc: string;
  metaTitle: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "bristol",
    name: "Bristol",
    h1: "Roofing Supplies Bristol",
    shortDesc: "Bristol's trusted roofing supplies depot, serving trade roofers and builders across the city with tiles, slates, membranes, fixings and more.",
    longDesc: "Ashmead Roofing Supplies has been Bristol's go-to roofing trade counter for years, serving professional roofers, builders and developers across every corner of the city. From Clifton and Redland to Bedminster, Brislington and Kingswood, our Bristol depot holds one of the widest ranges of roofing materials in the South West. We stock concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering, roof windows and everything in between. Our experienced trade team knows the local market, understands the challenges of Bristol's varied housing stock and can advise on the right products for any project — from a single garage flat roof to a 200-unit housing development. Call us on 0117 986 0600 or visit the depot for immediate collection.",
    metaTitle: "Roofing Supplies Bristol | Tiles, Slates, Membranes & More | Ashmead",
    metaDescription: "Bristol's trusted roofing supplies depot. Tiles, slates, flat roofing, membranes, fixings and more at Ashmead Roofing Supplies. Trade prices, 0117 986 0600."
  },
  {
    slug: "bath",
    name: "Bath",
    h1: "Roofing Supplies Bath",
    shortDesc: "Roofing supplies delivered to Bath — tiles, slates, lead, flat roof systems and more, with expert trade advice for Bath's heritage and modern buildings.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials across Bath and the surrounding area, from the city centre conservation zones to the villages of North East Somerset. Bath's unique architectural heritage demands specialist knowledge — our trade team understands the requirements of Bath stone buildings, listed properties and conservation-area restrictions, and we stock the clay tiles, natural slate and lead products that these projects demand. For modern-build sites in Bathampton, Keynsham and Corston, we supply concrete tiles, EPDM flat roofing, breather membranes and all associated materials. Our daily delivery service covers the whole Bath area, and our Bristol depot is just 20 minutes up the A4 for immediate collection. Call 0117 986 0600 for prices and availability.",
    metaTitle: "Roofing Supplies Bath | Tiles, Slates & Lead | Ashmead",
    metaDescription: "Roofing supplies delivered to Bath. Tiles, slates, lead, flat roof and more from Ashmead Roofing Supplies. Heritage expertise, trade prices. 0117 986 0600."
  },
  {
    slug: "somerset",
    name: "Somerset",
    h1: "Roofing Supplies Somerset",
    shortDesc: "Roofing materials delivered across Somerset — from Taunton and Weston-super-Mare to Frome and Glastonbury, serving trade roofers countywide.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials across the whole of Somerset, from Taunton and Weston-super-Mare to Frome, Glastonbury and the Mendips. Whether you're working on a thatched property conversion in the Somerset Levels, a new-build housing development in Yeovil, or a commercial re-roof in Bridgwater, our Bristol depot is your local supply point. We carry concrete tiles, clay tiles, natural slate, EPDM and torch-on flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for fast delivery across the county. Call our trade team on 0117 986 0600 for prices, quantities and delivery schedules.",
    metaTitle: "Roofing Supplies Somerset | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered across Somerset. Tiles, slates, flat roofing, membranes and more from Ashmead. Trade prices, fast delivery. 0117 986 0600."
  },
  {
    slug: "gloucester",
    name: "Gloucester",
    h1: "Roofing Supplies Gloucester",
    shortDesc: "Roofing supplies delivered to Gloucester and Gloucestershire — tiles, slates, membranes and fixings for trade roofers and builders.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials across Gloucester and the wider Gloucestershire area, covering Cheltenham, Stroud, Tewkesbury and the Cotswolds. Our Bristol depot holds a comprehensive range of concrete and clay tiles, natural slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation and guttering — all available for next-day delivery across the county. Whether you're working on a Cotswold stone renovation, a housing development in Quedgeley or a commercial re-roof in the city centre, our trade team can advise on the right products and arrange delivery to suit your programme. Call 0117 986 0600 for Gloucester-area pricing and delivery details.",
    metaTitle: "Roofing Supplies Gloucester | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Gloucester and Gloucestershire. Tiles, slates, flat roofing and more from Ashmead. Trade prices, fast delivery. 0117 986 0600."
  },
  {
    slug: "wiltshire",
    name: "Wiltshire",
    h1: "Roofing Supplies Wiltshire",
    shortDesc: "Roofing materials delivered across Wiltshire — from Swindon and Salisbury to Chippenham and Devizes, with trade pricing and expert advice.",
    longDesc: "Ashmead Roofing Supplies delivers across the whole of Wiltshire, from Swindon and Salisbury to Chippenham, Devizes, Trowbridge and Warminster. Our Bristol depot is within easy reach of the whole county, and our delivery service covers both new-build sites and renovation projects across the region. We stock concrete tiles, clay tiles, natural slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — everything a professional roofer needs, all at trade prices. Our experienced team can help with product selection, quantity calculations and delivery scheduling. Call 0117 986 0600 for Wiltshire pricing and delivery.",
    metaTitle: "Roofing Supplies Wiltshire | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered across Wiltshire. Tiles, slates, flat roofing and more from Ashmead. Trade prices, expert advice, fast delivery. 0117 986 0600."
  }
];

export function getArea(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug);
}
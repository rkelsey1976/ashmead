export interface Suburb {
  slug: string;
  name: string;
  h1: string;
  shortDesc: string;
  longDesc: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Area {
  slug: string;
  name: string;
  h1: string;
  shortDesc: string;
  longDesc: string;
  metaTitle: string;
  metaDescription: string;
  suburbs?: Suburb[];
}

const bathSuburbs: Suburb[] = [
  {
    slug: "twerton",
    name: "Twerton",
    h1: "Roofing Supplies Twerton",
    shortDesc: "Roofing supplies delivered to Twerton, Bath — tiles, slates, flat roofing and fixings for local roofers and builders.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Twerton and the surrounding Bath area. Whether you're repairing a Victorian terrace on Twerton High Street, re-roofing a family home near Royal Victoria Park, or working on a commercial project close to the Lower Bristol Road, our trade team can supply exactly what you need. We stock concrete and clay tiles, natural and synthetic slate, EPDM and torch-on flat roofing, breather membranes, battens, fixings, lead, guttering and roof windows — all available for next-day delivery to Twerton. Our Bristol depot is just a short drive up the A4, and our experienced staff can help with quantities, specifications and trade pricing. Call 0117 986 0600 for Twerton roofing supply.",
    metaTitle: "Roofing Supplies Twerton Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Twerton, Bath. Tiles, slates, flat roofing, membranes and fixings from Ashmead. Trade prices, fast delivery. 0117 986 0600."
  },
  {
    slug: "lansdown",
    name: "Lansdown",
    h1: "Roofing Supplies Lansdown",
    shortDesc: "Premium roofing supplies delivered to Lansdown, Bath — ideal for heritage homes, new builds and rural renovations.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Lansdown and the higher-ground areas north of Bath. Lansdown properties range from Georgian and Victorian homes to modern new-build developments and rural conversions, and our trade team understands the materials each project demands. We stock natural slate, clay plain and interlocking tiles, concrete tiles, lead products, flat roofing systems, breather membranes, battens, fixings, insulation and guttering — all available for delivery to Lansdown. Our Bristol depot supplies professional roofers across Bath, and we can arrange next-day delivery to suit your programme. Call 0117 986 0600 for Lansdown roofing supply.",
    metaTitle: "Roofing Supplies Lansdown Bath | Heritage & New Build Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Lansdown, Bath. Natural slate, clay tiles, lead and flat roofing from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "widcombe",
    name: "Widcombe",
    h1: "Roofing Supplies Widcombe",
    shortDesc: "Roofing materials delivered to Widcombe, Bath — serving trade roofers on period terraces, conversions and new developments.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Widcombe and the Bathwick side of Bath. Widcombe's mix of elegant Georgian townhouses, Victorian terraces and contemporary developments means roofers need a wide range of products — from natural slate and clay tiles to modern concrete interlocking tiles and flat roof systems. Our Bristol depot holds one of the widest stocks in the South West, including breather membranes, battens, fixings, lead, insulation, guttering and roof windows. We offer next-day delivery to Widcombe and the surrounding Bath area, and our trade team can help with specifications and quantity calculations. Call 0117 986 0600 for Widcombe roofing supply.",
    metaTitle: "Roofing Supplies Widcombe Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Widcombe, Bath. Tiles, slates, flat roofing and more from Ashmead. Trade prices, fast delivery. 0117 986 0600."
  },
  {
    slug: "bear-flat",
    name: "Bear Flat",
    h1: "Roofing Supplies Bear Flat",
    shortDesc: "Roofing supplies delivered to Bear Flat, Bath — fast delivery of tiles, slates, membranes and fixings for local roofers.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Bear Flat and the southern Bath area. From period homes on Bear Flat's residential streets to modern extensions and flat-roofed commercial buildings, our trade team can supply the right products for every job. We stock concrete tiles, clay tiles, natural and synthetic slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Bear Flat. Our Bristol depot is close by on the A4, and we offer trade pricing and expert advice. Call 0117 986 0600 for Bear Flat roofing supply.",
    metaTitle: "Roofing Supplies Bear Flat Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Bear Flat, Bath. Tiles, slates, flat roofing, membranes and fixings from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "oldfield-park",
    name: "Oldfield Park",
    h1: "Roofing Supplies Oldfield Park",
    shortDesc: "Roofing supplies delivered to Oldfield Park, Bath — Edwardian homes, new builds and local roofing projects supplied fast.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Oldfield Park and west Bath. Oldfield Park has a strong mix of Edwardian and Victorian housing alongside newer developments, so roofers need access to both traditional and modern roofing products. Our Bristol depot stocks clay tiles, concrete tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — everything required for re-roofs, repairs and new-build work in Oldfield Park. We deliver next-day across the Bath area and offer trade pricing, quantity advice and local product knowledge. Call 0117 986 0600 for Oldfield Park roofing supply.",
    metaTitle: "Roofing Supplies Oldfield Park Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Oldfield Park, Bath. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "newbridge",
    name: "Newbridge",
    h1: "Roofing Supplies Newbridge",
    shortDesc: "Roofing supplies delivered to Newbridge, Bath — tiles, slates, membranes and fixings for trade roofers and builders.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Newbridge and north-west Bath. From residential re-roofs on Newbridge Hill to larger projects around the Upper Bristol Road, our trade team can supply exactly what you need. We stock concrete and clay tiles, natural and synthetic slate, EPDM and torch-on flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Newbridge. Our Bristol depot is just minutes up the A4, and we offer trade prices, fast delivery and expert product advice. Call 0117 986 0600 for Newbridge roofing supply.",
    metaTitle: "Roofing Supplies Newbridge Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Newbridge, Bath. Tiles, slates, flat roofing, membranes and fixings from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "combe-down",
    name: "Combe Down",
    h1: "Roofing Supplies Combe Down",
    shortDesc: "Roofing supplies delivered to Combe Down, Bath — stone cottages, modern homes and rural conversions supplied locally.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Combe Down and the villages south of Bath. Combe Down's stone cottages, Victorian villas and newer family homes require a wide variety of roofing products, from natural slate and clay tiles to concrete interlocking tiles and flat roof systems. Our Bristol depot holds stock of concrete tiles, clay tiles, natural slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for delivery to Combe Down. Our trade team can advise on heritage-appropriate materials and arrange next-day delivery. Call 0117 986 0600 for Combe Down roofing supply.",
    metaTitle: "Roofing Supplies Combe Down Bath | Tiles, Slates & Rural Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Combe Down, Bath. Natural slate, clay tiles, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "bathwick",
    name: "Bathwick",
    h1: "Roofing Supplies Bathwick",
    shortDesc: "Roofing supplies delivered to Bathwick, Bath — Georgian terraces, university buildings and modern developments supplied.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Bathwick and the east Bath area. Bathwick is home to some of Bath's finest Georgian architecture, as well as university buildings and modern developments, so roofers need access to both traditional and contemporary roofing products. Our Bristol depot stocks natural slate, clay tiles, concrete tiles, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Bathwick. Our trade team understands conservation-area requirements and can advise on the right products for Bathwick's varied building stock. Call 0117 986 0600 for Bathwick roofing supply.",
    metaTitle: "Roofing Supplies Bathwick Bath | Georgian & Modern Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Bathwick, Bath. Tiles, slates, flat roofing and more from Ashmead. Heritage expertise. 0117 986 0600."
  },
  {
    slug: "larkhall",
    name: "Larkhall",
    h1: "Roofing Supplies Larkhall",
    shortDesc: "Roofing supplies delivered to Larkhall, Bath — Victorian terraces, modern homes and local roofing projects supplied fast.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Larkhall and north-east Bath. Larkhall's Victorian terraces, modern housing and local businesses need a reliable roofing supplier with a wide stock and fast delivery. Our Bristol depot supplies concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Larkhall. Our trade team can help with product selection, quantities and trade pricing for any roofing job in the area. Call 0117 986 0600 for Larkhall roofing supply.",
    metaTitle: "Roofing Supplies Larkhall Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Larkhall, Bath. Tiles, slates, flat roofing, membranes and fixings from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "weston-bath",
    name: "Weston",
    h1: "Roofing Supplies Weston, Bath",
    shortDesc: "Roofing supplies delivered to Weston, Bath — family homes, period properties and new builds supplied locally.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Weston and the eastern edge of Bath. Weston's mix of Victorian and Edwardian family homes, modern developments and local amenities means roofers need a supplier with a broad product range. Our Bristol depot stocks concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Weston. Our trade team offers expert advice, quantity calculations and trade pricing for every project. Call 0117 986 0600 for Weston roofing supply.",
    metaTitle: "Roofing Supplies Weston Bath | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Weston, Bath. Tiles, slates, flat roofing and more from Ashmead. Trade prices, fast delivery. 0117 986 0600."
  }
];

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
    metaDescription: "Roofing supplies delivered to Bath. Tiles, slates, lead, flat roof and more from Ashmead Roofing Supplies. Heritage expertise, trade prices. 0117 986 0600.",
    suburbs: bathSuburbs
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

export function getSuburb(parentSlug: string, suburbSlug: string): Suburb | undefined {
  const area = getArea(parentSlug);
  return area?.suburbs?.find(s => s.slug === suburbSlug);
}

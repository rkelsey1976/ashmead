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

const bristolSuburbs: Suburb[] = [
  {
    slug: "clifton",
    name: "Clifton",
    h1: "Roofing Supplies Clifton",
    shortDesc: "Roofing supplies delivered to Clifton, Bristol — premium tiles, slate and flat roofing for Georgian and Victorian properties.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Clifton and the surrounding Bristol area. Clifton's Georgian crescents, Victorian terraces and modern apartments demand a wide range of roofing products, from natural slate and clay tiles to contemporary flat roofing systems. Our Bristol depot stocks concrete tiles, clay tiles, natural and synthetic slate, EPDM and torch-on flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Clifton. Our trade team understands the specialist requirements of Clifton's heritage properties and can advise on conservation-appropriate materials. Call 0117 986 0600 for Clifton roofing supply.",
    metaTitle: "Roofing Supplies Clifton Bristol | Premium Tiles & Slate | Ashmead",
    metaDescription: "Roofing supplies delivered to Clifton, Bristol. Natural slate, clay tiles, flat roofing and more from Ashmead. Heritage expertise. 0117 986 0600."
  },
  {
    slug: "redland",
    name: "Redland",
    h1: "Roofing Supplies Redland",
    shortDesc: "Roofing supplies delivered to Redland, Bristol — Edwardian homes, student properties and new builds supplied fast.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Redland and north Bristol. Redland's mix of Edwardian family homes, student houseshares and modern developments means roofers need reliable access to both traditional and modern roofing products. Our Bristol depot holds concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Redland. We offer trade pricing, quantity calculations and expert advice for every project. Call 0117 986 0600 for Redland roofing supply.",
    metaTitle: "Roofing Supplies Redland Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Redland, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "bishopston",
    name: "Bishopston",
    h1: "Roofing Supplies Bishopston",
    shortDesc: "Roofing supplies delivered to Bishopston, Bristol — Victorian terraces, family homes and local roofing projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Bishopston and the Gloucester Road area. Bishopston's Victorian terraces, 1930s semis and busy high street properties need a roofing supplier with a wide stock and fast turnaround. Our Bristol depot supplies concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Bishopston. Our trade team can help with specifications, quantities and trade pricing for any roofing job. Call 0117 986 0600 for Bishopston roofing supply.",
    metaTitle: "Roofing Supplies Bishopston Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Bishopston, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "henleaze",
    name: "Henleaze",
    h1: "Roofing Supplies Henleaze",
    shortDesc: "Roofing supplies delivered to Henleaze, Bristol — family homes, 1930s properties and new developments supplied.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Henleaze and north-west Bristol. Henleaze's family homes, 1930s semis and modern developments require a broad range of roofing products, from concrete and clay tiles to flat roofing and guttering systems. Our Bristol depot holds one of the widest stocks in the South West, including natural slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation and roof windows — all available for next-day delivery to Henleaze. Call 0117 986 0600 for Henleaze roofing supply and trade pricing.",
    metaTitle: "Roofing Supplies Henleaze Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Henleaze, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "westbury-on-trym",
    name: "Westbury-on-Trym",
    h1: "Roofing Supplies Westbury-on-Trym",
    shortDesc: "Roofing supplies delivered to Westbury-on-Trym, Bristol — period homes, village properties and modern estates.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Westbury-on-Trym and the north-west Bristol area. From period homes around the village centre to modern estates and commercial developments, our trade team can supply the right roofing products for every job. We stock concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Westbury-on-Trym. Call 0117 986 0600 for Westbury-on-Trym roofing supply.",
    metaTitle: "Roofing Supplies Westbury-on-Trym Bristol | Ashmead",
    metaDescription: "Roofing supplies delivered to Westbury-on-Trym, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "southville",
    name: "Southville",
    h1: "Roofing Supplies Southville",
    shortDesc: "Roofing supplies delivered to Southville, Bristol — Victorian terraces, new builds and riverside projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Southville and south Bristol. Southville's Victorian terraces, modern new-builds and creative warehouse conversions require a mix of traditional slate and clay tiles alongside contemporary flat roofing and guttering. Our Bristol depot stocks concrete tiles, clay tiles, natural and synthetic slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Southville. Call 0117 986 0600 for Southville roofing supply.",
    metaTitle: "Roofing Supplies Southville Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Southville, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "bedminster",
    name: "Bedminster",
    h1: "Roofing Supplies Bedminster",
    shortDesc: "Roofing supplies delivered to Bedminster, Bristol — terraced homes, flats and commercial roofs supplied fast.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Bedminster and south Bristol. Bedminster's busy mix of Victorian terraces, modern flats and independent shops means roofers need fast access to a wide range of products. Our Bristol depot supplies concrete tiles, clay tiles, natural slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Bedminster. Our trade team can help with quantities, specifications and trade pricing. Call 0117 986 0600 for Bedminster roofing supply.",
    metaTitle: "Roofing Supplies Bedminster Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Bedminster, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "brislington",
    name: "Brislington",
    h1: "Roofing Supplies Brislington",
    shortDesc: "Roofing supplies delivered to Brislington, Bristol — post-war homes, new developments and trade projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Brislington and east Bristol. Brislington's post-war housing, newer developments and commercial units need a reliable supplier with a broad product range. Our Bristol depot stocks concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Brislington. Call 0117 986 0600 for Brislington roofing supply and trade pricing.",
    metaTitle: "Roofing Supplies Brislington Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Brislington, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "kingswood",
    name: "Kingswood",
    h1: "Roofing Supplies Kingswood",
    shortDesc: "Roofing supplies delivered to Kingswood, Bristol — housing estates, new builds and local re-roofs.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Kingswood and the eastern fringe of Bristol. Kingswood's large housing estates, modern new-build sites and local commercial properties require a supplier with stock and fast delivery. Our Bristol depot holds concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Kingswood. Call 0117 986 0600 for Kingswood roofing supply.",
    metaTitle: "Roofing Supplies Kingswood Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Kingswood, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "hanham",
    name: "Hanham",
    h1: "Roofing Supplies Hanham",
    shortDesc: "Roofing supplies delivered to Hanham, Bristol — family homes, terraces and local trade projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Hanham and the east Bristol area. Hanham's mix of family homes, terraces and small commercial units needs a roofing supplier with a wide range and quick delivery. Our Bristol depot stocks concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Hanham. Call 0117 986 0600 for Hanham roofing supply.",
    metaTitle: "Roofing Supplies Hanham Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Hanham, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "longwell-green",
    name: "Longwell Green",
    h1: "Roofing Supplies Longwell Green",
    shortDesc: "Roofing supplies delivered to Longwell Green, Bristol — modern estates, family homes and trade projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Longwell Green and the east Bristol area. Longwell Green's modern housing estates, older family homes and local businesses need a reliable roofing supplier with a full product range. Our Bristol depot holds concrete tiles, clay tiles, natural slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Longwell Green. Call 0117 986 0600 for Longwell Green roofing supply.",
    metaTitle: "Roofing Supplies Longwell Green Bristol | Ashmead",
    metaDescription: "Roofing supplies delivered to Longwell Green, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "emersons-green",
    name: "Emersons Green",
    h1: "Roofing Supplies Emersons Green",
    shortDesc: "Roofing supplies delivered to Emersons Green, Bristol — new builds, estates and local roofing work.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Emersons Green and north-east Bristol. Emersons Green's modern estates and new-build developments require high-quality concrete and clay tiles, flat roofing systems, membranes and all associated fixings. Our Bristol depot stocks the full range, including battens, lead, insulation, guttering and roof windows — all available for next-day delivery to Emersons Green. Call 0117 986 0600 for Emersons Green roofing supply.",
    metaTitle: "Roofing Supplies Emersons Green Bristol | Ashmead",
    metaDescription: "Roofing supplies delivered to Emersons Green, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "filton",
    name: "Filton",
    h1: "Roofing Supplies Filton",
    shortDesc: "Roofing supplies delivered to Filton, Bristol — aerospace area homes, new builds and commercial projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Filton and north Bristol. Filton's mix of aerospace-area housing, new developments and commercial units needs a roofing supplier with a wide stock and reliable delivery. Our Bristol depot supplies concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Filton. Call 0117 986 0600 for Filton roofing supply.",
    metaTitle: "Roofing Supplies Filton Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Filton, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "stoke-gifford",
    name: "Stoke Gifford",
    h1: "Roofing Supplies Stoke Gifford",
    shortDesc: "Roofing supplies delivered to Stoke Gifford, Bristol — modern estates, village homes and new developments.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Stoke Gifford and the north Bristol area. Stoke Gifford's modern estates, older village homes and new commercial developments require a broad range of roofing products. Our Bristol depot stocks concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Stoke Gifford. Call 0117 986 0600 for Stoke Gifford roofing supply.",
    metaTitle: "Roofing Supplies Stoke Gifford Bristol | Ashmead",
    metaDescription: "Roofing supplies delivered to Stoke Gifford, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "fishponds",
    name: "Fishponds",
    h1: "Roofing Supplies Fishponds",
    shortDesc: "Roofing supplies delivered to Fishponds, Bristol — Victorian terraces, family homes and local roofing jobs.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Fishponds and east Bristol. Fishponds' Victorian terraces, post-war homes and busy local streets need a supplier with stock and fast delivery. Our Bristol depot holds concrete tiles, clay tiles, natural slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Fishponds. Call 0117 986 0600 for Fishponds roofing supply and trade pricing.",
    metaTitle: "Roofing Supplies Fishponds Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Fishponds, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "easton",
    name: "Easton",
    h1: "Roofing Supplies Easton",
    shortDesc: "Roofing supplies delivered to Easton, Bristol — Victorian terraces, creative conversions and local projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Easton and inner-city Bristol. Easton's vibrant mix of Victorian terraces, creative warehouse conversions and community projects needs a supplier with a wide product range and fast turnaround. Our Bristol depot stocks concrete tiles, clay tiles, natural and synthetic slate, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Easton. Call 0117 986 0600 for Easton roofing supply.",
    metaTitle: "Roofing Supplies Easton Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Easton, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "eastville",
    name: "Eastville",
    h1: "Roofing Supplies Eastville",
    shortDesc: "Roofing supplies delivered to Eastville, Bristol — terraces, family homes and retail properties.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Eastville and east Bristol. Eastville's terraces, family homes and retail properties need a reliable roofing supplier with a full product range. Our Bristol depot supplies concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Eastville. Call 0117 986 0600 for Eastville roofing supply.",
    metaTitle: "Roofing Supplies Eastville Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Eastville, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "montpelier",
    name: "Montpelier",
    h1: "Roofing Supplies Montpelier",
    shortDesc: "Roofing supplies delivered to Montpelier, Bristol — Regency terraces, period homes and creative conversions.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Montpelier and central Bristol. Montpelier's Regency terraces, Victorian homes and creative conversions require high-quality traditional roofing materials alongside modern flat roofing systems. Our Bristol depot stocks natural slate, clay tiles, concrete tiles, EPDM flat roofing, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Montpelier. Call 0117 986 0600 for Montpelier roofing supply.",
    metaTitle: "Roofing Supplies Montpelier Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Montpelier, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "stokes-croft",
    name: "Stokes Croft",
    h1: "Roofing Supplies Stokes Croft",
    shortDesc: "Roofing supplies delivered to Stokes Croft, Bristol — period buildings, independent shops and creative spaces.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Stokes Croft and central Bristol. Stokes Croft's historic buildings, independent shops and creative spaces need a roofing supplier that understands both heritage and contemporary materials. Our Bristol depot holds concrete tiles, clay tiles, natural slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for fast delivery to Stokes Croft. Call 0117 986 0600 for Stokes Croft roofing supply.",
    metaTitle: "Roofing Supplies Stokes Croft Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Stokes Croft, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "warmley",
    name: "Warmley",
    h1: "Roofing Supplies Warmley",
    shortDesc: "Roofing supplies delivered to Warmley, Bristol — family homes, village properties and local trade work.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Warmley and the east Bristol area. Warmley's family homes, village properties and small commercial units need a supplier with a wide range and quick delivery. Our Bristol depot stocks concrete tiles, clay tiles, natural slate, flat roofing membranes, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Warmley. Call 0117 986 0600 for Warmley roofing supply.",
    metaTitle: "Roofing Supplies Warmley Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Warmley, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    h1: "Roofing Supplies Keynsham",
    shortDesc: "Roofing supplies delivered to Keynsham, Bristol — town-centre homes, estates and Bath-border projects.",
    longDesc: "Ashmead Roofing Supplies delivers roofing materials to Keynsham, sitting between Bristol and Bath. Keynsham's town-centre homes, modern estates and properties near the Bath border need a reliable roofing supplier with stock and fast delivery. Our Bristol depot supplies concrete tiles, clay tiles, natural and synthetic slate, flat roofing systems, breather membranes, battens, fixings, lead, insulation, guttering and roof windows — all available for next-day delivery to Keynsham. Call 0117 986 0600 for Keynsham roofing supply.",
    metaTitle: "Roofing Supplies Keynsham Bristol | Tiles, Slates & Flat Roofing | Ashmead",
    metaDescription: "Roofing supplies delivered to Keynsham, Bristol. Tiles, slates, flat roofing and more from Ashmead. Trade prices. 0117 986 0600."
  }
];

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
    metaDescription: "Bristol's trusted roofing supplies depot. Tiles, slates, flat roofing, membranes, fixings and more at Ashmead Roofing Supplies. Trade prices, 0117 986 0600.",
    suburbs: bristolSuburbs
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

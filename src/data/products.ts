export interface Product {
  slug: string;
  name: string;
  h1: string;
  shortDesc: string;
  longDesc: string;
  brands: string[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
  image?: string;
}

function productImage(slug: string): string {
  const extMap: Record<string, string> = {
    "concrete-tiles": "jpg",
    "clay-tiles": "jpg",
    "slates": "png",
    "flat-roof-membranes": "jpg",
    "pitched-roof-membranes": "jpg",
    "roofing-battens": "jpg",
    "nails-and-fixings": "jpg",
    "fascias-and-guttering": "png",
    "insulation": "jpg",
    "ventilation-products": "jpg",
    "lead-products": "jpg",
    "roof-windows": "jpg",
    "classicbond": "jpg",
    "duopoly": "jpg",
    "resitrix": "jpg",
    "fatra": "jpg",
  };
  const ext = extMap[slug] || "jpg";
  return `/images/products/${slug}.${ext}`;
}

export const products: Product[] = [
  {
    slug: "concrete-tiles",
    name: "Concrete Tiles",
    h1: "Concrete Tiles Bristol",
    shortDesc: "Durable, cost-effective concrete roof tiles from Redland and Marley, ideal for new builds and re-roofing projects across the South West.",
    longDesc: "Ashmead Roofing Supplies stocks one of the widest ranges of concrete roof tiles in Bristol and the surrounding areas. Whether you're working on a large housing development or a domestic re-roof, our concrete tiles deliver outstanding value, weather performance and long-term durability. We supply popular profiles from Redland and Marley — including the Redland 49, Marley Modern, Marley Double Roman and Redland Renown — all available for collection or fast local delivery. Our trade team can advise on tile coverage, batten spacing and compatible ridge and hip systems to keep your project on track.",
    image: productImage("concrete-tiles"),
    brands: ["Redland", "Marley"],
    features: [
      "Interlocking profiles for fast laying and reduced labour costs",
      "Concrete construction offers 60+ year life expectancy",
      "Available in smooth, granular and textured finishes",
      "Wide colour range including rustic red, terracotta, brown, grey and slate",
      "Compatible Dry Ridge and Hip systems available",
      "Bulk order discounts for trade customers"
    ],
    metaTitle: "Concrete Tiles Bristol | Redland & Marley | Ashmead Roofing Supplies",
    metaDescription: "Buy concrete roof tiles in Bristol. Redland 49, Marley Modern & more in stock at Ashmead Roofing Supplies. Trade prices, fast delivery across the South West."
  },
  {
    slug: "clay-tiles",
    name: "Clay Tiles",
    h1: "Clay Tiles Bristol",
    shortDesc: "Premium clay plain and interlocking tiles that deliver character and longevity for heritage and contemporary roofing projects.",
    longDesc: "Clay roof tiles remain the premium choice for roofers who need lasting aesthetics alongside proven performance. Ashmead Roofing Supplies carries a carefully curated range of clay plain tiles and clay interlocking tiles from Redland and Marley, including the iconic Redland Rosemary and Marley Acme. From conservation-area restorations in Bath to new-build schemes in Bristol, clay tiles deliver a natural colour that mellows beautifully with age. Our Bristol depot holds stock for immediate collection, and our trade counter team can help with tile coverage calculations, underlay specifications and fixing recommendations.",
    image: productImage("clay-tiles"),
    brands: ["Redland", "Marley"],
    features: [
      "Natural clay construction — colour never fades",
      "Plain and interlocking profiles to suit any roof design",
      "Ideal for conservation areas and heritage projects",
      "Redland Rosemary and Marley Acme ranges in stock",
      "60+ year life expectancy with minimal maintenance",
      "Matching clay ridge, hip and bonnet tiles available"
    ],
    metaTitle: "Clay Tiles Bristol | Redland Rosemary & Marley Acme | Ashmead Roofing Supplies",
    metaDescription: "Buy clay roof tiles in Bristol at Ashmead Roofing Supplies. Redland Rosemary, Marley Acme and more. Trade prices with fast delivery across the South West."
  },
  {
    slug: "slates",
    name: "Slates",
    h1: "Slates Bristol",
    shortDesc: "Natural and synthetic slate roofing supplied from our Bristol depot, including Cupa Pizarras Spanish slate and fibre cement alternatives.",
    longDesc: "Ashmead Roofing Supplies is the go-to slate supplier for roofers across Bristol, Bath and Somerset. We stock natural Spanish slate from Cupa Pizarras — the world's leading slate producer — alongside fibre cement and synthetic slate alternatives that deliver the slate look at a competitive price point. Whether you're reroofing a period property in Clifton or specifying slate for a new-build in Wiltshire, our trade team will help you choose the right product, calculate headlap and coverage, and arrange delivery straight to site. Slates are available in a full range of sizes and we supply all matching accessories including ridge, hip and valley pieces.",
    image: productImage("slates"),
    brands: ["Cupa Pizarras"],
    features: [
      "Natural Spanish slate from Cupa Pizarras — guaranteed quality",
      "Fibre cement slate alternatives for budget-conscious projects",
      "Full range of sizes from 250×500mm up to 500×250mm",
      "Suitable for heritage, conservation and new-build projects",
      "Matching accessories: ridge, hip, valley and ventilation",
      "Expert advice on headlap, holing and fixing specifications"
    ],
    metaTitle: "Slates Bristol | Natural & Fibre Cement Slate | Ashmead Roofing Supplies",
    metaDescription: "Buy roofing slates in Bristol. Natural Cupa Pizarras slate and fibre cement alternatives in stock at Ashmead Roofing Supplies. Trade prices, fast South West delivery."
  },
  {
    slug: "flat-roof-membranes",
    name: "Flat Roof Membranes",
    h1: "Flat Roof Membranes Bristol",
    shortDesc: "EPDM, fibreglass and torch-on flat roofing systems from ClassicBond, Resitrix and leading manufacturers, all available from our Bristol trade counter.",
    longDesc: "Flat roofing is a core specialism at Ashmead Roofing Supplies, and our Bristol depot stocks everything you need to complete a first-class flat roof installation. We supply EPDM membranes from ClassicBond and Resitrix, fibreglass GRP systems, torch-on felt and liquid coating systems — all backed by the technical know-how of our trade counter team. Whether you're waterproofing a small extension, a garage roof or a commercial flat roof, we can advise on the right system, calculate material quantities and deliver direct to site. We also stock all ancillaries including trims, adhesives, sealants and insulation boards.",
    image: productImage("flat-roof-membranes"),
    brands: ["ClassicBond", "Resitrix"],
    features: [
      "EPDM single-ply membranes with 50-year life expectancy",
      "ClassicBond and Resitrix systems in stock for immediate collection",
      "Torch-on felt systems for traditional flat roofing",
      "Liquid coating and GRP fibreglass systems available",
      "Full range of trims, adhesives, sealants and accessories",
      "Insulation boards and deck materials available"
    ],
    metaTitle: "Flat Roof Membranes Bristol | EPDM, GRP & Torch-On | Ashmead Roofing Supplies",
    metaDescription: "Buy flat roof membranes in Bristol. EPDM, fibreglass, torch-on felt and more at Ashmead Roofing Supplies. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "pitched-roof-membranes",
    name: "Pitched Roof Membranes",
    h1: "Pitched Roof Membranes Bristol",
    shortDesc: "Breathable roofing underlay and breather membranes from A. Proctor Group, keeping pitched roofs ventilated and protected from the elements.",
    longDesc: "A well-specified breather membrane is essential to any pitched roof, and Ashmead Roofing Supplies stocks the full range from A. Proctor Group and other leading manufacturers. Whether you need a high-performance breathable underlay for a warm roof construction or a traditional HR felt for a cold roof, our Bristol depot has it on the shelf. Our trade team can advise on the correct membrane specification for your build-up, including condensation risk analysis and ventilation requirements. We stock both single-roll and multi-roll packs for trade pricing, and offer fast delivery across Bristol, Bath, Somerset, Gloucester and Wiltshire.",
    image: productImage("pitched-roof-membranes"),
    brands: ["A. Proctor Group"],
    features: [
      "Breathable underlay from A. Proctor Group — market-leading performance",
      "HR felt and traditional bituminous underlay available",
      "Suitable for warm and cold roof construction",
      "Condensation risk analysis and specification advice available",
      "Single-roll and multi-roll packs for trade pricing",
      "Fast delivery across the South West"
    ],
    metaTitle: "Pitched Roof Membranes Bristol | Breather Membrane & Underlay | Ashmead Roofing Supplies",
    metaDescription: "Buy pitched roof membranes in Bristol. Breathable underlay, breather membrane and HR felt at Ashmead Roofing Supplies. Trade prices, expert advice, fast delivery."
  },
  {
    slug: "roofing-battens",
    name: "Roofing Battens",
    h1: "Roofing Battens Bristol",
    shortDesc: "Graded and treated roofing battens in all standard sizes, stocked at our Bristol depot for immediate collection or delivery to site.",
    longDesc: "Roofing battens are the backbone of every pitched roof, and at Ashmead Roofing Supplies we only stock battens that meet BS 5534 requirements. Our graded, pressure-treated battens are available in all standard sizes — 25×38mm, 25×50mm and 38×50mm — and are suitable for use with all tile and slate profiles. We buy in bulk direct from the sawmill, which means we can offer trade customers consistently competitive pricing. Our Bristol depot holds large stocks for immediate collection, and we can deliver battens alongside tiles, membrane and fixings to keep your project moving.",
    image: productImage("roofing-battens"),
    brands: [],
    features: [
      "BS 5534 compliant graded and stamped battens",
      "Pressure-treated for long-term durability",
      "Standard sizes: 25×38mm, 25×50mm, 38×50mm",
      "Suitable for all tile and slate profiles",
      "Bulk trade pricing — sawmill-direct supply",
      "Available for immediate collection or fast delivery"
    ],
    metaTitle: "Roofing Battens Bristol | Graded & Treated | Ashmead Roofing Supplies",
    metaDescription: "Buy graded roofing battens in Bristol. BS 5534 compliant, pressure-treated battens at Ashmead Roofing Supplies. Trade prices, fast delivery across the South West."
  },
  {
    slug: "nails-and-fixings",
    name: "Nails and Fixings",
    h1: "Nails and Fixings Bristol",
    shortDesc: "A comprehensive range of roofing nails, screws, clips and fixings from Kober and Kytun for every tile and slate application.",
    longDesc: "The right fixings are critical to roof performance and compliance, and Ashmead Roofing Supplies carries one of the widest selections of roofing nails and fixings in the South West. We stock nail and clip systems from Kober and Kytun — two of the UK's most trusted fixing manufacturers — covering concrete tiles, clay tiles, slates and all common batten sizes. Whether you need ring-shank nails, clout nails, slate nails, tile clips, batten nails or dry-fix ridge fixings, our Bristol trade counter has them on the shelf. Our team can advise on the correct fixing specification for your project, including wind zone calculations for exposed sites.",
    image: productImage("nails-and-fixings"),
    brands: ["Kober", "Kytun"],
    features: [
      "Kober and Kytun fixing systems in stock",
      "Ring-shank, clout and slate nails in all sizes",
      "Tile clips and batten nails for every profile",
      "Storm-fix and dry-fix ridge systems available",
      "Wind zone calculation and specification advice",
      "Bulk trade packs available"
    ],
    metaTitle: "Nails and Fixings Bristol | Kober & Kytun | Ashmead Roofing Supplies",
    metaDescription: "Buy roofing nails and fixings in Bristol. Kober, Kytun and more at Ashmead Roofing Supplies. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "fascias-and-guttering",
    name: "Fascias and Guttering",
    h1: "Fascias and Guttering Bristol",
    shortDesc: "UPVC fascias, soffits and guttering from FloPlast, plus cast iron and aluminium options for heritage and commercial projects.",
    longDesc: "Ashmead Roofing Supplies stocks everything you need to finish a roof to the highest standard, including a comprehensive range of fascias, soffits and guttering from FloPlast. Our Bristol depot carries UPVC fascia boards in all widths, square and round gutter profiles, downpipes and all associated fittings. We also supply cast iron guttering for heritage and conservation work, plus aluminium systems for commercial and industrial projects. Our trade team can help you calculate run lengths, determine the correct gutter capacity for your roof area, and specify the right brackets and accessories for a neat, weathertight installation.",
    image: productImage("fascias-and-guttering"),
    brands: ["FloPlast"],
    features: [
      "UPVC fascia boards in 100mm to 450mm widths",
      "Square and round gutter profiles from FloPlast",
      "Cast iron guttering for heritage and conservation work",
      "Aluminium systems for commercial applications",
      "Full range of downpipes, brackets and fittings",
      "Gutter capacity calculation service available"
    ],
    metaTitle: "Fascias and Guttering Bristol | UPVC, Cast Iron & Aluminium | Ashmead Roofing Supplies",
    metaDescription: "Buy fascias and guttering in Bristol. UPVC, cast iron and aluminium from Ashmead Roofing Supplies. FloPlast and more. Trade prices, fast South West delivery."
  },
  {
    slug: "insulation",
    name: "Insulation",
    h1: "Insulation Bristol",
    shortDesc: "Roof and loft insulation from Rockwool and other leading brands, available in boards, rolls and multi-layer blankets at trade prices.",
    longDesc: "Effective insulation is a legal requirement and a key part of any roofing project, and Ashmead Roofing Supplies has Bristol's best trade selection. We stock Rockwool stone wool insulation alongside PIR board and multi-layer blanket systems, giving roofers and builders the full range of options for warm roof, cold roof and loft insulation applications. Our Bristol depot holds bulk quantities for immediate collection, and we can deliver insulation alongside membranes, battens and tiles to minimise site logistics. Our team can advise on U-value targets, condensation risk and the latest Part L building regulations to ensure your specification is compliant.",
    image: productImage("insulation"),
    brands: ["Rockwool"],
    features: [
      "Rockwool stone wool insulation in stock",
      "PIR board for warm roof and flat roof applications",
      "Multi-layer blanket insulation for pitched roofs",
      "Loft roll insulation for cold roof upgrades",
      "U-value calculation and Part L compliance advice",
      "Bulk trade pricing with fast delivery"
    ],
    metaTitle: "Insulation Bristol | Rockwool & PIR Board | Ashmead Roofing Supplies",
    metaDescription: "Buy roofing insulation in Bristol. Rockwool, PIR board and loft roll at Ashmead Roofing Supplies. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "ventilation-products",
    name: "Ventilation Products",
    h1: "Ventilation Products Bristol",
    shortDesc: "Roof ventilation solutions from A. Proctor Group and other leading manufacturers, ensuring compliance with Building Regulations.",
    longDesc: "Proper roof ventilation is essential to prevent condensation, timber decay and tile failure — and Ashmead Roofing Supplies stocks the products and expertise to keep your roof breathing correctly. We supply ventilation solutions from A. Proctor Group and other leading manufacturers, including eaves ventilators, tile vents, ridge vents and dry-fix systems with built-in ventilation paths. Whether you're specifying ventilation for a new-build or adding retro-fit vents to an existing roof, our trade team will help you calculate the correct ventilation area and choose the right products for your roof type and pitch.",
    image: productImage("ventilation-products"),
    brands: ["A. Proctor Group"],
    features: [
      "Eaves ventilators and fascia ventilation systems",
      "Tile vents in slate, clay and concrete profiles",
      "Ridge ventilation and dry-fix ventilated ridge systems",
      "Abutment ventilation for roof-to-wall junctions",
      "Ventilation area calculations for Building Regulations compliance",
      "Retro-fit and new-build solutions available"
    ],
    metaTitle: "Ventilation Products Bristol | Roof Vents & Systems | Ashmead Roofing Supplies",
    metaDescription: "Buy roof ventilation products in Bristol. Tile vents, eaves ventilators and ridge systems at Ashmead Roofing Supplies. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "lead-products",
    name: "Lead Products",
    h1: "Lead Products Bristol",
    shortDesc: "Milled lead sheet from British Lead Mills plus Code 3 to Code 8 rolls, flashings and soakers for every roofing application.",
    longDesc: "Ashmead Roofing Supplies is a major stockist of milled lead sheet from British Lead Mills, supplying roofers across Bristol, Bath, Somerset, Gloucester and Wiltshire. We carry Code 3 through to Code 8 in full rolls and cut lengths, along with pre-formed flashings, soakers and lead accessories. Lead remains the longest-lasting and most reliable material for roof weathering details, and our trade counter team can advise on the correct code for your application, the latest Lead Sheet Association guidelines, and safe working practices. We also supply lead alternatives including Wakaflex and other flexible flashing products.",
    image: productImage("lead-products"),
    brands: ["British Lead Mills"],
    features: [
      "Milled lead sheet from British Lead Mills",
      "Code 3 to Code 8 in full rolls and cut lengths",
      "Pre-formed flashings and soakers available",
      "Lead Sheet Association guidelines and specification advice",
      "Wakaflex and flexible flashing alternatives",
      "Large stock for immediate collection or delivery"
    ],
    metaTitle: "Lead Products Bristol | Code 3-8 Lead Sheet | Ashmead Roofing Supplies",
    metaDescription: "Buy milled lead sheet in Bristol. British Lead Mills Code 3 to Code 8 at Ashmead Roofing Supplies. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "roof-windows",
    name: "Roof Windows",
    h1: "Roof Windows Bristol",
    shortDesc: "Velux and Roto roof windows, flashings and accessories from our Bristol depot, with trade pricing and expert installation advice.",
    longDesc: "Ashmead Roofing Supplies stocks roof windows from Velux and Roto — the two most trusted names in the industry. Whether you need a centre-pivot Velux for a loft conversion, a top-hung Roto for easy access to a balcony, or conservation-area windows with custom flashings, our Bristol depot has the products and the expertise. We carry Velux GGU, GGL and GPU ranges alongside Roto Designo and Deluxe models, plus all associated flashings, installation kits and accessories. Our trade team can advise on the right window for your roof pitch, the correct flashing kit for your tile or slate, and Building Regulations requirements for emergency escape.",
    image: productImage("roof-windows"),
    brands: ["Velux", "Roto"],
    features: [
      "Velux centre-pivot and top-hung roof windows in stock",
      "Roto Designo and Deluxe models available",
      "Conservation-area windows with traditional bar profiles",
      "Flashings for tile, slate and flat roof applications",
      "Blinds, insect screens and remote controls available",
      "Emergency escape window specification advice"
    ],
    metaTitle: "Roof Windows Bristol | Velux & Roto | Ashmead Roofing Supplies",
    metaDescription: "Buy Velux and Roto roof windows in Bristol at Ashmead Roofing Supplies. Trade prices, flashings and accessories. Expert advice, fast South West delivery."
  },
  {
    slug: "classicbond",
    name: "ClassicBond",
    h1: "ClassicBond Bristol",
    shortDesc: "ClassicBond EPDM flat roofing systems — the UK's most popular single-ply membrane — available from our Bristol depot with full technical support.",
    longDesc: "ClassicBond EPDM is the UK's most widely specified single-ply flat roofing membrane, and Ashmead Roofing Supplies is your local stockist in Bristol. ClassicBond offers a proven 50-year life expectancy, simple one-piece installation and outstanding resistance to UV, ozone and temperature extremes. We hold ClassicBond 1.14mm and 1.52mm membranes in all standard sizes, plus the full range of adhesives, trims, formflash, waterblock and reinforcement accessories. Our trade team can walk you through the installation process, help calculate material requirements and arrange delivery direct to site.",
    image: productImage("classicbond"),
    brands: [],
    features: [
      "50-year life expectancy — the market-leading EPDM system",
      "1.14mm and 1.52mm membrane thicknesses available",
      "One-piece installation — no seams on most domestic roofs",
      "Full range of adhesives, trims and accessories in stock",
      "UV, ozone and temperature resistant",
      "Free technical support and material calculation service"
    ],
    metaTitle: "ClassicBond EPDM Bristol | Ashmead Roofing Supplies",
    metaDescription: "Buy ClassicBond EPDM flat roofing membrane in Bristol at Ashmead Roofing Supplies. Trade prices, full range of accessories, expert advice, fast South West delivery."
  },
  {
    slug: "duopoly",
    name: "Duopoly",
    h1: "Duopoly Bristol",
    shortDesc: "Duopoly flat roofing systems combining the strength of felt with the durability of polymer — a versatile and cost-effective flat roof solution.",
    longDesc: "Duopoly flat roofing systems offer an excellent balance of performance and value, combining traditional bituminous felt technology with advanced polymer modification. At Ashmead Roofing Supplies, we stock the full Duopoly range at our Bristol depot, including torch-on and pour-and-roll cap sheets, underlays and associated ancillaries. Duopoly systems deliver reliable waterproofing for extensions, garages and commercial flat roofs, and our trade team can advise on the correct build-up, substrate preparation and detailing for your project. We also supply all the ancillaries you need including vapour control layers, insulation boards and edge trims.",
    image: productImage("duopoly"),
    brands: [],
    features: [
      "Polymer-modified bituminous flat roofing system",
      "Torch-on and pour-and-roll application methods",
      "Suitable for extensions, garages and commercial flat roofs",
      "Reliable waterproofing at a competitive price point",
      "Matching underlays, cap sheets and ancillaries in stock",
      "Specification advice and material calculation available"
    ],
    metaTitle: "Duopoly Flat Roofing Bristol | Ashmead Roofing Supplies",
    metaDescription: "Buy Duopoly flat roofing systems in Bristol at Ashmead Roofing Supplies. Torch-on and pour-and-roll. Trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "resitrix",
    name: "Resitrix",
    h1: "Resitrix Bristol",
    shortDesc: "Resitrix EPDM rubber membranes — heat-welded single-ply flat roofing for commercial and domestic applications demanding premium performance.",
    longDesc: "Resitrix is a premium EPDM rubber membrane system that uses heat-welded seams for maximum reliability, making it the go-to choice for flat roof projects where performance cannot be compromised. Ashmead Roofing Supplies stocks the full Resitrix range at our Bristol depot, including SK W Plus membranes, reinforced and unreinforced options, and all the welding accessories and edge details you need. Resitrix's heat-welded seams deliver lap strengths that exceed the membrane itself, making it ideal for large commercial flat roofs as well as domestic work. Our trade team can advise on installation, detailing and material quantities.",
    image: productImage("resitrix"),
    brands: [],
    features: [
      "Heat-welded seams — stronger than the membrane itself",
      "SK W Plus and standard Resitrix membranes in stock",
      "Reinforced and unreinforced options available",
      "Ideal for commercial and domestic flat roofing",
      "Outstanding UV, ozone and weather resistance",
      "Full range of welding accessories and edge details"
    ],
    metaTitle: "Resitrix EPDM Bristol | Heat-Welded Flat Roofing | Ashmead Roofing Supplies",
    metaDescription: "Buy Resitrix EPDM rubber membrane in Bristol at Ashmead Roofing Supplies. Heat-welded seams, trade prices, expert advice, fast South West delivery."
  },
  {
    slug: "fatra",
    name: "Fatra",
    h1: "Fatra Bristol",
    shortDesc: "Fatra PVC single-ply flat roofing membranes — a proven commercial flat roof system now available from Ashmead Roofing Supplies in Bristol.",
    longDesc: "Fatra PVC membrane is a single-ply flat roofing system with a 40-year track record on commercial and industrial buildings across Europe. Ashmead Roofing Supplies now stocks the Fatra range at our Bristol depot, giving local contractors access to a high-performance alternative to EPDM and felt systems. Fatra membranes are hot-air welded for maximum seam security, are root-resistant for green roof applications, and carry all the key European certifications. We supply the full system including membranes, vapour control layers, insulation boards and accessories, and our trade team can advise on specification, installation and warranty requirements.",
    image: productImage("fatra"),
    brands: [],
    features: [
      "PVC single-ply membrane with 40-year European track record",
      "Hot-air welded seams for maximum security",
      "Root-resistant — suitable for green roof applications",
      "Full system: membrane, VCL, insulation and accessories",
      "European ETA and BBA certification",
      "Specification and warranty support available"
    ],
    metaTitle: "Fatra PVC Membrane Bristol | Single-Ply Flat Roofing | Ashmead Roofing Supplies",
    metaDescription: "Buy Fatra PVC flat roofing membrane in Bristol at Ashmead Roofing Supplies. Commercial-grade, hot-air welded, trade prices, expert advice, fast delivery."
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
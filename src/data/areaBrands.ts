export interface AreaBrand {
  areaSlug: string;
  brandSlug: string;
  brandName: string;
  h1: string;
  intro: string;
  longDesc: string;
  products: string[]; // product slugs this brand covers
  metaTitle: string;
  metaDescription: string;
}

export const areaBrands: AreaBrand[] = [

  // ─── REDLAND ──────────────────────────────────────────────────────────────

  {
    areaSlug: "bristol",
    brandSlug: "redland",
    brandName: "Redland",
    h1: "Redland Roof Tiles Bristol",
    intro: "Authorised Redland stockist in Bristol — concrete and clay tiles, dry-fix systems and accessories from our Keynsham trade counter.",
    longDesc: `Redland is one of the most trusted names in UK roofing, and Ashmead Roofing Supplies is your local authorised Redland stockist serving Bristol roofers. We hold a comprehensive range of Redland concrete and clay tiles at our Keynsham depot, with same-day collection and next-day delivery across Bristol.

Our Redland stock covers the most-specified profiles across Bristol's housing market. The Redland 49 and Redland Renown are workhorses of the city's re-roofing market — reliable, widely available and straightforward to install. For Bristol's conservation streets in Clifton and Redland, the Redland Rosemary clay plain tile is the go-to specification where a traditional appearance is required.

We also stock the full Redland dry-fix range — ridge, hip, verge and abutment systems that comply with BS 5534 and eliminate the mortar failures that affect traditionally-bedded ridges over time. For roofers doing new-build or full re-roofs across Bristol, dry-fix is increasingly the standard specification and we hold all components in stock.

Our Bristol trade team can help with tile coverage calculations, profile matching on repairs, and specifying the correct Redland accessories for your project. Call 0117 986 0600 for stock availability and trade pricing.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Redland Roof Tiles Bristol | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Redland roof tiles in Bristol — Redland 49, Rosemary, Renown and dry-fix systems. Authorised stockist at Ashmead Roofing Supplies. Trade prices, same-day collection.",
  },

  {
    areaSlug: "bath",
    brandSlug: "redland",
    brandName: "Redland",
    h1: "Redland Roof Tiles Bath",
    intro: "Authorised Redland stockist serving Bath — Redland Rosemary, concrete tiles and dry-fix systems from our Keynsham depot, 25 minutes from the city.",
    longDesc: `Ashmead Roofing Supplies is Bath's closest authorised Redland stockist, based at our Keynsham depot just 25 minutes from the city centre on the A4. For Bath roofers, that means same-day collection on most Redland products and next-day delivery to site.

Redland's product range is particularly well suited to Bath's diverse roofing market. For Bath city centre and the surrounding conservation villages — where planning officers expect appropriate heritage materials — the Redland Rosemary clay plain tile is the most commonly specified Redland product. Available in natural red and smoothfaced variants, Rosemary tiles are widely accepted in Bath's conservation area for re-roofing work on Victorian and Edwardian properties.

For Bath's 20th century housing stock — the estates of Twerton, Odd Down and Keynsham — Redland's concrete interlocking range covers the full re-roofing market. The Redland 49 and Redland Renown are the most common profiles across this housing type. We carry the full colour range and can advise on matching existing profiles on repair work.

The Redland dry-fix system is increasingly specified on Bath re-roofs and new-build work — eliminating the mortar that can fail on ridge, hip and verge details. We stock all dry-fix components. Call 0117 986 0600 for Redland pricing and availability.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Redland Roof Tiles Bath | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Redland roof tiles in Bath — Rosemary clay, concrete tiles and dry-fix from Ashmead Roofing Supplies, 25 minutes from Bath. Authorised stockist. Trade prices.",
  },

  {
    areaSlug: "somerset",
    brandSlug: "redland",
    brandName: "Redland",
    h1: "Redland Roof Tiles Somerset",
    intro: "Authorised Redland stockist for Somerset roofers — concrete and clay tiles, dry-fix systems, delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies supplies Redland tiles across Somerset from our Keynsham depot, with next-day delivery available countywide. As an authorised Redland stockist, we hold a broad range of concrete and clay profiles suited to Somerset's varied housing market.

For Somerset's mainstream re-roofing market — the post-war and later housing of Taunton, Yeovil, Bridgwater and Weston-super-Mare — Redland concrete interlocking tiles are the dominant product. The Redland 49 and Redland Renown are the most widely installed concrete tile profiles in the county. We carry the full colour range including the naturalistic tones that suit Somerset's rural areas.

For Somerset's heritage market — the conservation villages of South Somerset, the Mendip towns and the historic buildings around Wells and Frome — the Redland Rosemary clay plain tile is frequently specified. Rosemary in natural red complements the local stone and brick vernacular of the county's villages and is accepted by Somerset's conservation planning officers.

The Redland dry-fix system is worth specifying on exposed Somerset sites — particularly the coastal areas around Weston-super-Mare and Burnham-on-Sea, and the upland locations of the Quantocks and Mendips, where wind uplift on mortar bedding is a genuine risk. Call 0117 986 0600 for Somerset delivery and trade pricing.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Redland Roof Tiles Somerset | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Redland roof tiles in Somerset — concrete, clay and dry-fix systems from Ashmead Roofing Supplies. Authorised stockist. Trade prices, next-day Somerset delivery.",
  },

  {
    areaSlug: "gloucester",
    brandSlug: "redland",
    brandName: "Redland",
    h1: "Redland Roof Tiles Gloucester",
    intro: "Authorised Redland stockist for Gloucestershire — concrete tiles, Redland Rosemary and dry-fix systems delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies is an authorised Redland stockist serving roofers across Gloucester and Gloucestershire, with next-day delivery from our Keynsham depot. We carry a comprehensive Redland range suited to the county's mix of mainstream housing and Cotswold heritage projects.

For Gloucester city, Cheltenham and the county's suburban housing market, Redland concrete interlocking tiles cover the bulk of re-roofing work. The Redland 49 is one of the most widely installed concrete tiles in the UK and we hold it in all standard colours. The Redland Renown is a popular alternative for the county's newer housing stock.

For Gloucestershire's Cotswold villages and conservation areas, the Redland Rosemary clay plain tile is frequently the right specification. Cotswold planning officers expect appropriate materials on conservation area re-roofs, and Rosemary tiles — particularly in natural red and the smoothfaced variants — are widely accepted. Our team can advise on the specific colour and specification requirements for work in the Cotswolds AONB.

Redland's dry-fix systems are increasingly standard on Gloucestershire re-roofing work, and we stock the full ridge, hip and verge components for all Redland tile profiles. Call 0117 986 0600 for Gloucestershire trade pricing and availability.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Redland Roof Tiles Gloucester | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Redland roof tiles in Gloucester and Gloucestershire — concrete, Rosemary clay and dry-fix from Ashmead Roofing Supplies. Authorised stockist. Trade prices, next-day delivery.",
  },

  {
    areaSlug: "wiltshire",
    brandSlug: "redland",
    brandName: "Redland",
    h1: "Redland Roof Tiles Wiltshire",
    intro: "Authorised Redland stockist for Wiltshire — concrete and clay tiles, dry-fix systems for Swindon new-build and county-wide re-roofing.",
    longDesc: `Ashmead Roofing Supplies is an authorised Redland stockist delivering to Wiltshire roofers next day from our Keynsham depot. From Swindon's major new-build housing programmes to the re-roofing market across Chippenham, Trowbridge, Devizes, Warminster and Salisbury, we supply the Redland range that Wiltshire's professional roofers rely on.

For Swindon's large-scale residential development market — one of the most active in the South West — Redland concrete tiles in standard profiles and modern colourways are a core product. We can supply Redland tiles in the volumes required for development programmes and arrange delivery schedules to suit active construction sites.

Across Wiltshire's wider re-roofing market, the Redland 49 and Redland Renown are the most commonly encountered profiles on the county's post-war and later housing stock. We carry full colour ranges and can advise on profile matching for repair and partial re-roof work.

For Wiltshire's heritage market — the conservation towns of Marlborough, Bradford on Avon, Devizes and the villages of Salisbury Plain — the Redland Rosemary clay tile is the appropriate specification where original clay plain tiles are being replaced. We also stock the full Redland dry-fix range for BS 5534 compliant ridge and hip installations. Call 0117 986 0600.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Redland Roof Tiles Wiltshire | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Redland roof tiles in Wiltshire — concrete, clay and dry-fix from Ashmead Roofing Supplies. Swindon new build and county re-roofing. Authorised stockist. Trade prices.",
  },

  // ─── MARLEY ───────────────────────────────────────────────────────────────

  {
    areaSlug: "bristol",
    brandSlug: "marley",
    brandName: "Marley",
    h1: "Marley Roof Tiles Bristol",
    intro: "Authorised Marley stockist in Bristol — Marley Modern, Double Roman, Acme and dry-fix systems from our Keynsham trade counter.",
    longDesc: `Marley is one of the UK's leading roofing tile manufacturers, and Ashmead Roofing Supplies is an authorised Marley stockist serving Bristol's roofing trade. We hold a comprehensive range of Marley concrete and clay tiles at our Keynsham depot for same-day collection or next-day Bristol delivery.

The Marley Modern is one of the most popular concrete roof tiles in the UK, and we hold it in the full colour range — including the natural slate and smooth grey finishes that are popular across Bristol's new-build and re-roofing market. The Marley Double Roman is the other essential profile for Bristol roofers — a double-roll tile that suits the steeper roof pitches common in the city's Victorian and Edwardian housing.

For clay tile work in Bristol's conservation areas — Clifton, Redland, Cotham and Bishopston — the Marley Acme clay plain tile is a widely specified alternative to the Redland Rosemary. Marley Acme is available in traditional red, heather and natural finishes, with matching ridge, hip and bonnet tiles. Our team can advise on the appropriate colour and finish for conservation area specifications.

Marley's interlocking clay range — the Marley Anglia and Ludlow ranges — is also worth considering for re-roofs where a clay appearance is required at a more competitive price than plain tiles. We also stock the Marley dry-fix system for compliant ridge and hip details. Call 0117 986 0600.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Marley Roof Tiles Bristol | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Marley roof tiles in Bristol — Modern, Double Roman, Acme clay and dry-fix. Authorised stockist at Ashmead Roofing Supplies. Trade prices, same-day Bristol collection.",
  },

  {
    areaSlug: "bath",
    brandSlug: "marley",
    brandName: "Marley",
    h1: "Marley Roof Tiles Bath",
    intro: "Authorised Marley stockist for Bath — Marley Acme clay, concrete tiles and dry-fix systems from our Keynsham depot, 25 minutes from Bath.",
    longDesc: `Ashmead Roofing Supplies is Bath's closest authorised Marley stockist, with our Keynsham depot just 25 minutes from the city centre. We hold the key Marley tile ranges that Bath roofers specify most frequently, available for same-day collection or next-day delivery to Bath area sites.

For Bath's conservation area and heritage work — the Victorian and Edwardian suburbs of Larkhall, Bathwick, Bear Flat and the city centre streets — the Marley Acme clay plain tile is a strongly specified product. Acme tiles are accepted in Bath's conservation area for re-roofing work on period properties, and the range includes the traditional red and heather finishes that complement Bath stone buildings. Matching ridge, hip and bonnet tiles are available.

For Bath's 20th century housing stock — the estates of Twerton, Oldfield Park and Keynsham where concrete tiles are the norm — the Marley Modern and Marley Double Roman are the two profiles most commonly encountered. We carry both in the full colour range and can advise on profile and colour matching for repair work on these properties.

For new-build work around Bath and the wider North East Somerset area, Marley's concrete range offers the modern low-profile and traditional double-Roman options that satisfy planning requirements across the mixed rural and suburban developments in the area. Call 0117 986 0600 for Marley pricing and stock.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Marley Roof Tiles Bath | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Marley roof tiles in Bath — Acme clay, Modern, Double Roman and dry-fix from Ashmead Roofing Supplies, 25 minutes from Bath. Authorised stockist. Trade prices.",
  },

  {
    areaSlug: "somerset",
    brandSlug: "marley",
    brandName: "Marley",
    h1: "Marley Roof Tiles Somerset",
    intro: "Authorised Marley stockist for Somerset — concrete and clay tiles, dry-fix systems delivered next day across the county from our Bristol depot.",
    longDesc: `Ashmead Roofing Supplies supplies Marley tiles across Somerset from our Keynsham depot with next-day delivery countywide. As an authorised Marley stockist, we carry the core concrete and clay tile ranges that Somerset's roofers specify across the county's diverse housing market.

Marley concrete tiles are widely specified across Somerset's mainstream re-roofing market. The Marley Modern — one of the UK's best-selling concrete roof tiles — is found on housing across Taunton, Yeovil, Bridgwater and Weston-super-Mare, and we hold it in the full colour range for re-roofing repairs and matching. The Marley Double Roman is the alternative for Somerset properties with double-roll tile profiles.

For Somerset's heritage villages and conservation areas — the hamstone towns of South Somerset, the Mendip settlements and the older housing around Frome, Shepton Mallet and Wells — the Marley Acme clay plain tile is the specification that best matches the local roofing vernacular. Available in traditional reds and heritage colours, Acme tiles are widely used for conservation area repairs across the county.

Somerset's exposed coastal and upland locations benefit from the Marley dry-fix system for ridge and hip details — eliminating the mortar failure risk on exposed sites. We stock all Marley dry-fix components for same-day collection or county delivery. Call 0117 986 0600.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Marley Roof Tiles Somerset | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Marley roof tiles in Somerset — Modern, Double Roman, Acme clay and dry-fix from Ashmead Roofing Supplies. Authorised stockist. Trade prices, next-day Somerset delivery.",
  },

  {
    areaSlug: "gloucester",
    brandSlug: "marley",
    brandName: "Marley",
    h1: "Marley Roof Tiles Gloucester",
    intro: "Authorised Marley stockist for Gloucestershire — Marley Modern, Acme clay and dry-fix systems delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies is an authorised Marley stockist delivering to Gloucestershire roofers from our Keynsham depot. We carry the core Marley tile ranges for both the county's mainstream housing market and its significant Cotswold heritage sector.

For Gloucester city, Cheltenham and the county's suburban housing, the Marley Modern and Marley Double Roman concrete profiles are the most widely specified tiles on re-roofing work. The Marley Modern's interlocking profile suits the low and medium pitched roofs common in the county's post-war and later housing. We carry both profiles in the full colour range.

For Gloucestershire's Cotswolds villages and conservation areas — where planning guidance requires appropriate materials for listed and locally-listed buildings — the Marley Acme clay plain tile is one of the most respected specifications. Acme tiles in natural red and heather finishes are widely accepted by Cotswold planning officers, and the range includes the matching ridge, hip and bonnet tiles needed for a complete and compliant installation.

Marley's dry-fix systems are increasingly standard on Gloucestershire re-roofing work, and our team can advise on the correct dry-fix components for whichever Marley tile profile you're installing. Next-day delivery across Gloucestershire. Call 0117 986 0600.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Marley Roof Tiles Gloucester | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Marley roof tiles in Gloucester and Gloucestershire — Modern, Acme clay and dry-fix from Ashmead Roofing Supplies. Authorised stockist. Trade prices, next-day delivery.",
  },

  {
    areaSlug: "wiltshire",
    brandSlug: "marley",
    brandName: "Marley",
    h1: "Marley Roof Tiles Wiltshire",
    intro: "Authorised Marley stockist for Wiltshire — Marley Modern, Double Roman, Acme clay and dry-fix systems delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies supplies Marley tiles to Wiltshire roofers with next-day delivery from our Keynsham depot. As an authorised Marley stockist, we hold the concrete and clay tile ranges that serve Wiltshire's major re-roofing and new-build market.

For Swindon — one of the UK's fastest-growing cities and a major driver of new residential construction — Marley's concrete tile range is a key specification product. The Marley Modern is popular on new-build housing in the Swindon area for its clean, contemporary profile. We can supply in the volumes required for development programmes and arrange site delivery to suit construction schedules.

Across Wiltshire's re-roofing market — Chippenham, Trowbridge, Devizes, Warminster and Salisbury — the Marley Modern and Double Roman are the most commonly encountered concrete profiles on the county's post-war housing. We carry both profiles in all colours for re-roofing and repair work.

For Wiltshire's heritage market — the conservation towns of Bradford on Avon, Marlborough and the villages around Salisbury Plain — the Marley Acme clay plain tile is the appropriate specification for period property re-roofs. Marley Acme is available in the traditional colours that complement Wiltshire's flint, brick and stone buildings. Call 0117 986 0600 for Wiltshire pricing and delivery.`,
    products: ["concrete-tiles", "clay-tiles"],
    metaTitle: "Marley Roof Tiles Wiltshire | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Marley roof tiles in Wiltshire — Modern, Double Roman, Acme clay and dry-fix from Ashmead Roofing Supplies. Authorised stockist. Swindon new-build and county re-roofing.",
  },

  // ─── VELUX ────────────────────────────────────────────────────────────────

  {
    areaSlug: "bristol",
    brandSlug: "velux",
    brandName: "Velux",
    h1: "Velux Roof Windows Bristol",
    intro: "Authorised Velux stockist in Bristol — GGL, GGU, GPU windows and flashings from our Keynsham trade counter, ready for same-day collection.",
    longDesc: `Velux is the world's leading roof window brand, and Ashmead Roofing Supplies is an authorised Velux stockist serving Bristol's roofing trade. We hold a comprehensive range of Velux windows, flashings and accessories at our Keynsham depot for same-day collection or next-day Bristol delivery.

Bristol's roofing market drives consistent Velux demand — the city has a large and growing loft conversion market across its Victorian, Edwardian and inter-war housing. The Velux GGL centre-pivot window is the standard specification for most habitable loft conversions in Bristol, satisfying the minimum opening light area required for Building Regulations emergency escape compliance. The Velux GGU (with polyurethane casing, suited to bathrooms and other high-humidity spaces) and the GPU top-hung window are also popular across Bristol's varied conversion market.

We stock Velux windows in standard sizes from the compact 55×78cm through to the large 114×140cm, alongside the corresponding BDX and BDX Duo flashing kits for tile and slate profiles. Getting the flashing kit right is critical — the wrong flashing for your tile creates a leak point at the window perimeter. Our trade team can confirm the correct flashing specification for your tile profile.

For conservation area properties in Clifton, Redland and Bristol's other protected streets, we can source Velux Conservation windows with traditional bar profiles that satisfy planning requirements. Call 0117 986 0600 for Velux stock and pricing.`,
    products: ["roof-windows"],
    metaTitle: "Velux Roof Windows Bristol | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Velux roof windows in Bristol. Authorised Velux stockist at Ashmead Roofing Supplies — GGL, GGU, GPU windows and flashings. Trade prices, same-day Bristol collection.",
  },

  {
    areaSlug: "bath",
    brandSlug: "velux",
    brandName: "Velux",
    h1: "Velux Roof Windows Bath",
    intro: "Authorised Velux stockist for Bath — GGL, GGU and Velux Conservation windows for Bath's listed properties and conservation areas, from our Keynsham depot.",
    longDesc: `Ashmead Roofing Supplies is an authorised Velux stockist 25 minutes from Bath city centre, making us the practical trade counter for Bath roofers specifying Velux roof windows. We hold the standard Velux range alongside conservation-style options suited to Bath's significant heritage and listed building market.

Bath's planning environment makes Velux specification more complex than in most cities. The city's conservation area covers much of the urban core, and listed buildings require planning permission before roof windows can be installed. For standard loft conversions in Bath's suburbs — Odd Down, Twerton, Combe Down and Larkhall — the Velux GGL centre-pivot is the standard specification. We stock these in all sizes with the appropriate flashing kits for the tile profiles used across these areas.

For Bath's listed and conservation area properties, Velux Conservation windows are frequently the only planning-acceptable option. These windows have an integrated bar profile that replicates the look of traditional rooflights and are accepted by Bath City Council conservation officers on many heritage properties. We can source Velux Conservation windows to order — call ahead to confirm lead times.

Flat-glass conservation rooflights — which sit flush with the surrounding roof surface and have minimal visual impact — are available for the most sensitive Bath applications. Our team can advise on the correct product for the planning context of your specific project. Call 0117 986 0600.`,
    products: ["roof-windows"],
    metaTitle: "Velux Roof Windows Bath | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Velux roof windows in Bath. Conservation and standard options from Ashmead Roofing Supplies — 25 minutes from Bath. Authorised Velux stockist. Trade prices, expert heritage advice.",
  },

  {
    areaSlug: "somerset",
    brandSlug: "velux",
    brandName: "Velux",
    h1: "Velux Roof Windows Somerset",
    intro: "Authorised Velux stockist for Somerset — GGL, GGU and GPU roof windows with flashings and accessories, delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies is an authorised Velux stockist supplying Somerset roofers from our Keynsham depot with next-day delivery across the county. We hold the core Velux GGL, GGU and GPU ranges in standard sizes, alongside the flashing kits needed to complete installations on the tile and slate profiles used across Somerset.

Somerset's loft conversion market is active across the county's growing towns — Taunton, Yeovil, Bridgwater and Weston-super-Mare all have significant owner-occupied housing markets where loft conversions are popular. The Velux GGL is the standard specification for habitable loft conversion rooms, providing the opening light area required for Building Regulations emergency escape.

Somerset's varied roof pitches — from the shallower pitches of the county's post-war housing to the steeper pitches of older stone-built farmhouses and cottages — mean that roof window specification needs to match the pitch. Velux GGL windows operate across a broad pitch range, but our team can confirm the correct specification for non-standard pitches.

For Somerset's many conservation villages and listed properties — from Dunster and Porlock to Bruton and Shepton Mallet — Velux Conservation windows are available to order where standard Velux glazing would not satisfy the planning authority. We can source these with appropriate lead times. Call 0117 986 0600 for Somerset Velux pricing and availability.`,
    products: ["roof-windows"],
    metaTitle: "Velux Roof Windows Somerset | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Velux roof windows in Somerset. GGL, GGU and GPU with flashings from Ashmead Roofing Supplies. Authorised Velux stockist. Trade prices, next-day Somerset delivery.",
  },

  {
    areaSlug: "gloucester",
    brandSlug: "velux",
    brandName: "Velux",
    h1: "Velux Roof Windows Gloucester",
    intro: "Authorised Velux stockist for Gloucestershire — GGL, GGU and Velux Conservation windows for the Cotswolds and beyond, delivered next day across the county.",
    longDesc: `Ashmead Roofing Supplies is an authorised Velux stockist delivering to Gloucestershire roofers next day from our Keynsham depot. We hold the standard Velux window range alongside the conservation options required for Gloucestershire's significant Cotswolds heritage market.

For Gloucester city and Cheltenham — where the loft conversion market across the Victorian and Edwardian housing stock drives consistent Velux demand — we stock the Velux GGL, GGU and GPU ranges in all standard sizes. The GGL centre-pivot is the most widely specified window for habitable loft conversion rooms, satisfying Building Regulations emergency escape requirements. We carry the corresponding tile and slate flashing kits to complete the installation correctly.

For Gloucestershire's Cotswolds villages and conservation areas — where the AONB planning framework and listed building constraints impose strict requirements on roofscape alterations — Velux Conservation windows with traditional bar profiles are the appropriate specification. We can source these to order for Cotswolds projects where standard Velux would not satisfy the local planning authority.

Cheltenham has a particularly active loft conversion and extension market across its large Georgian and Victorian housing stock, much of which sits within conservation areas. Our team is experienced in advising on the correct Velux specification for conservation-sensitive projects. Call 0117 986 0600 for Gloucestershire Velux pricing and stock.`,
    products: ["roof-windows"],
    metaTitle: "Velux Roof Windows Gloucester | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Velux roof windows in Gloucester and Gloucestershire. Standard and Cotswolds conservation options from Ashmead Roofing Supplies. Authorised stockist. Trade prices, next-day delivery.",
  },

  {
    areaSlug: "wiltshire",
    brandSlug: "velux",
    brandName: "Velux",
    h1: "Velux Roof Windows Wiltshire",
    intro: "Authorised Velux stockist for Wiltshire — GGL, GGU and GPU windows with flashings and accessories, delivered next day to Swindon, Salisbury and beyond.",
    longDesc: `Ashmead Roofing Supplies is an authorised Velux stockist serving Wiltshire roofers with next-day delivery from our Keynsham depot. We hold the core Velux GGL, GGU and GPU ranges for Wiltshire's active loft conversion and extension market.

Swindon's large suburban housing stock — much of it built between the 1960s and 2000s — drives significant loft conversion activity and consistent Velux demand. The Velux GGL is the standard specification for habitable rooms, and we stock it in all sizes with the appropriate flashing kits for the concrete tile profiles used on most of Swindon's housing. We can also supply in larger quantities for volume contractors working across Swindon's development market.

Across Wiltshire's other towns — Chippenham, Trowbridge, Devizes, Warminster and Salisbury — the mix of Victorian, Edwardian and 20th century housing creates a varied loft conversion market with different tile profiles and roof pitches. Our team can advise on the correct Velux size and flashing kit for the specific roof you're working on.

For Wiltshire's heritage market — the listed and conservation properties of Bradford on Avon, Marlborough, Devizes and the downland villages — Velux Conservation windows are available to order where standard Velux glazing is not acceptable to the planning authority. Call 0117 986 0600 for Wiltshire Velux pricing and availability.`,
    products: ["roof-windows"],
    metaTitle: "Velux Roof Windows Wiltshire | Authorised Stockist | Ashmead Roofing Supplies",
    metaDescription: "Velux roof windows in Wiltshire. GGL, GGU and GPU with flashings from Ashmead Roofing Supplies. Authorised Velux stockist. Trade prices, next-day Wiltshire delivery.",
  },
];

export function getAreaBrand(areaSlug: string, brandSlug: string): AreaBrand | undefined {
  return areaBrands.find(ab => ab.areaSlug === areaSlug && ab.brandSlug === brandSlug);
}

export function getAreaBrands(areaSlug: string): AreaBrand[] {
  return areaBrands.filter(ab => ab.areaSlug === areaSlug);
}

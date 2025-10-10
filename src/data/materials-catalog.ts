// Interactive Materials Catalog for K&L Recycling
export interface MaterialItem {
  id: string;
  name: string;
  category: "ferrous" | "non-ferrous" | "electronic" | "industrial" | "household";
  accepted: boolean;
  price: string; // Price per pound or special pricing notes
  description: string;
  image?: string; // Made optional to handle cases where images don't exist
  tags: string[]; // For search functionality
  requirements?: string[]; // Special handling requirements
  notes?: string;
  regionalVariations?: Record<string, Partial<MaterialItem>>; // Different pricing by region
}

export const materialsCatalog: MaterialItem[] = [
  // FERROUS METALS
  {
    id: "steel-beams",
    name: "Steel Beams & Structural",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.15/lb",
    description: "Structural steel beams, I-beams, rebar, and construction steel",
    image: "/assets/ferrous/long_iron.jpg",
    tags: ["steel", "structural", "beams", "rebar", "construction"],
    requirements: ["Clean steel only", "No coated or painted materials"],
    notes: "Clean carbon steel preferred. Stainless steel separated and priced higher.",
  },
  {
    id: "rebar",
    name: "Rebar & Reinforcing Steel",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.15/lb",
    description: "Reinforcing steel bars and mesh for construction",
    image: "/assets/ferrous/rebar.jpg",
    tags: ["rebar", "reinforcing steel", "construction", "concrete"],
  },
  {
    id: "tin-steel",
    name: "Tin & Sheet Steel",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.12/lb",
    description: "Steel sheets, roofing tin, gutter tin, and tin cans",
    image: "/assets/ferrous/tin.jpg",
    tags: ["tin", "sheet metal", "roofing", "gutter", "ductwork"],
  },

  // NON-FERROUS METALS
  {
    id: "copper-wire",
    name: "Copper Wire & Cable",
    category: "non-ferrous",
    accepted: true,
    price: "$3.50-$4.50/lb",
    description: "Insulated and bare copper wire, cables, electrical wiring",
    image: "/assets/non-ferrous/copper_1.jpg",
    tags: ["copper", "wire", "cable", "electrical", "wiring"],
    requirements: ["Clean bright wire preferred", "Stainless steel conduit accepted"],
    notes: "Price depends on insulation thickness and copper purity",
  },
  {
    id: "copper-tubing",
    name: "Copper Pipe & Tubing",
    category: "non-ferrous",
    accepted: true,
    price: "$3.20-$4.00/lb",
    description: "Copper plumbing pipe, tubing, fittings",
    image: "/assets/non-ferrous/copper_2.jpg",
    tags: ["copper", "pipe", "tubing", "plumbing", "fittings"],
    requirements: ["Clean and separated", "Brass and bronze mixed acceptable"],
  },
  {
    id: "aluminum-cans",
    name: "Aluminum Cans",
    category: "non-ferrous",
    accepted: true,
    price: "$0.60-$1.20/lb",
    description: "Aluminum beverage cans and containers",
    image: "/assets/non-ferrous/al_cans.heic",
    tags: ["aluminum", "cans", "beverage", "containers"],
    requirements: ["Crushed or loose acceptable", "Labels not required"],
  },
  {
    id: "aluminum-cast",
    name: "Aluminum Cast & Wheels",
    category: "non-ferrous",
    accepted: true,
    price: "$0.50-$0.75/lb",
    description: "Cast aluminum, car wheels, and metal castings",
    image: "/assets/non-ferrous/aluminum_cast.jpg",
    tags: ["aluminum", "cast", "wheels", "automotive", "castings"],
    requirements: ["Separated from other materials", "No heavily coated pieces"],
  },
  {
    id: "brass",
    name: "Brass & Bronze",
    category: "non-ferrous",
    accepted: true,
    price: "$1.80-$2.50/lb",
    description: "Brass plumbing fixtures, sinks, and decorative brass",
    image: "/assets/non-ferrous/brass.jpg",
    tags: ["brass", "bronze", "fixtures", "sinks", "plumbing"],
    notes: "Yellow brass preferred. Includes brass, bronze, and red brass.",
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    category: "ferrous",
    accepted: true,
    price: "$0.25-$0.45/lb",
    description: "Stainless steel sinks, appliances, cookware, utensils",
    image: "/assets/non-ferrous/stainlesssteel.jpg",
    tags: ["stainless", "steel", "sinks", "appliances", "cookware"],
    requirements: ["300 and 400 series separated", "Magnet test for identification"],
    notes: "Magnetic grades accepted. Non-magnetic priced higher.",
  },

  // ELECTRONICS & INDUSTRIAL
  {
    id: "electric-motors",
    name: "Electric Motors",
    category: "electronic",
    accepted: true,
    price: "$0.15-$0.35/lb",
    description: "Electric motors, transformers, generators",
    image: "/assets/non-ferrous/electric_motors.jpg",
    tags: ["electrics", "motors", "transformers", "generators", "copper windings"],
    requirements: ["Must be drained/free of fluids", "Circuit breakers and starter boxes accepted"],
    notes: "Copper windings recovered. Larger items have higher value.",
  },
  {
    id: "insulated-copper-wire",
    name: "Insulated Copper Wire",
    category: "non-ferrous",
    accepted: true,
    price: "$2.80-$3.50/lb",
    description: "Insulated copper wire from electrical and electronic equipment",
    image: "/assets/non-ferrous/icw_1.jpg",
    tags: ["insulated", "copper wire", "electrical", "electronics"],
    notes: "Price based on insulation thickness and wire size",
  },
  {
    id: "compressors",
    name: "Compressors & AC Units",
    category: "electronic",
    accepted: true,
    price: "$0.20-$0.30/lb",
    description: "Air conditioning compressors and metal components",
    image: "/assets/non-ferrous/compressors.jpg",
    tags: ["compressors", "ac units", "hvac", "metal recovery"],
    requirements: ["Properly drained of refrigerants"],
  },

  // VEHICLE SCRAP
  {
    id: "vehicle-large",
    name: "Large Vehicle Scrap",
    category: "ferrous",
    accepted: true,
    price: "$0.12-$0.18/lb",
    description: "Large trucks, buses, and heavy equipment",
    image: "/assets/ferrous/vehicles_accept_large.jpg",
    tags: ["vehicles", "large", "trucks", "buses", "heavy equipment"],
    requirements: ["Tires and fluids removed"],
  },
  {
    id: "vehicle-odd",
    name: "Odd Vehicle Parts",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.15/lb",
    description: "Bumpers, frames, and other vehicle components",
    image: "/assets/ferrous/vehicle_accept_odd.jpg",
    tags: ["vehicles", "parts", "bumpers", "frames", "components"],
  },
  {
    id: "steel-cable",
    name: "Steel Cable & Wire",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.12/lb",
    description: "Steel cable, wire rope, and mesh",
    image: "/assets/ferrous/steel_cable.jpg",
    tags: ["steel cable", "wire rope", "mesh", "reinforcement"],
  },

  // DEMOLITION SCRAP
  {
    id: "demolition-scrap",
    name: "Construction & Demolition Scrap",
    category: "industrial",
    accepted: true,
    price: "Prices vary by material mix - Call for Quote",
    description: "Mixed construction metals, rebar, wire mesh, structural steel",
    image: "/assets/ferrous/tin.jpg",
    tags: ["demolition", "construction", "rebar", "wire mesh", "mixed metals"],
    requirements: ["Pre-sorted preferred", "Large quantities welcome", "Site removal available"],
    notes: "We handle complete construction site metal salvage",
  },

  // GUTTERS & HOUSEHOLD
  {
    id: "gutters",
    name: "Gutters & Roof Flashings",
    category: "ferrous",
    accepted: true,
    price: "$0.08-$0.12/lb",
    description: "Aluminum and steel gutters, downspouts, and roof flashings",
    image: "/assets/non-ferrous/gutters.jpg",
    tags: ["gutters", "roofing", "flashings", "downspouts"],
  },

  // PROHIBITED ITEMS (for transparency)
  {
    id: "lead-acid-batteries",
    name: "Lead-Acid Batteries",
    category: "household",
    accepted: false,
    price: "Not Accepted",
    description: "Automotive and marine batteries",
    image: "/assets/prohibited/tanks_tires.jpg",
    tags: ["batteries", "lead-acid", "automotive", "marine"],
    notes: "Please take to approved battery recyclers",
  },
  {
    id: "tires",
    name: "Tires & Rubber",
    category: "household",
    accepted: false,
    price: "Not Accepted",
    description: "Used tires and rubber products",
    image: "/assets/prohibited/tanks_tires.jpg",
    tags: ["tires", "rubber", "recycling"],
    notes: "Please take tires to dedicated tire recycling facilities",
  },
];

// Search and filtering utilities
export function searchMaterials(query: string, category?: string): MaterialItem[] {
  const lowercaseQuery = query.toLowerCase().trim();

  if (!lowercaseQuery && !category) return materialsCatalog;

  return materialsCatalog.filter((material) => {
    const matchesQuery = !lowercaseQuery || material.name.toLowerCase().includes(lowercaseQuery) || material.description.toLowerCase().includes(lowercaseQuery) || material.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery));

    const matchesCategory = !category || material.category === category;

    return material.accepted && matchesQuery && matchesCategory;
  });
}

export function getMaterialsByCategory(category: string): MaterialItem[] {
  return materialsCatalog.filter((material) => material.accepted && material.category === category);
}

export function getAcceptedMaterials(): MaterialItem[] {
  return materialsCatalog.filter((material) => material.accepted);
}

export function getNotAcceptedMaterials(): MaterialItem[] {
  return materialsCatalog.filter((material) => !material.accepted);
}

// Pricing information
export const pricingNotes = {
  general: "Metal prices fluctuate daily based on global market conditions. These are average prices - your actual payment will be based on weight and current market values.",
  specialRequirements: "Certain materials require special handling or have minimum quantity requirements. Call us for detailed pricing.",
  nonAccepted: "We do not accept hazardous materials or items that require special EPA certifications. We can direct you to appropriate facilities.",
  regionalPricing: "Prices may vary slightly by location. Contact your nearest K&L yard for current rates.",
};

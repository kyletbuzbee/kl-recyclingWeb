import { MaterialDetail } from "@/types";

export const allMaterialDetails: MaterialDetail[] = [
  {
    slug: "copper",
    name: "Copper",
    category: "non-ferrous",
    image: "/images/copper.png",
    description: "High-value non-ferrous metal used in electrical applications and plumbing systems.",
    longDescription: "Copper is one of the most valuable non-ferrous metals in the recycling industry due to its conductivity and durability. We accept various forms of copper including clean copper tubing, insulated wire, and copper pipes. Proper preparation is crucial for maximum value, as contaminants significantly reduce market price.",
    grades: [
      {
        name: "Clean Copper Tubing",
        description: "Brass-free copper tubes and pipes, free of attachments",
        priceRange: "$3.20 - $3.80",
        marketValue: 3.4,
      },
      {
        name: "Copper Wire - Insulated",
        description: "Copper wire with plastic or rubber insulation",
        priceRange: "$2.50 - $3.10",
        marketValue: 2.8,
      },
      {
        name: "Copper Wire - Clean",
        description: "Bare copper wire, free of insulation",
        priceRange: "$3.00 - $3.60",
        marketValue: 3.25,
      },
      {
        name: "Brass Pipes",
        description: "Yellow/red brass pipes and gears",
        priceRange: "$2.40 - $3.00",
        marketValue: 2.7,
      },
    ],
    preparationTips: ["Remove all insulation from copper wire before recycling", "Separate yellow brass from clean copper for higher value", "Remove solder, paint, or other contaminants", "Cut into manageable pieces for easier processing", "Drain all fluids from copper pipes before bringing to facility"],
    commonSources: ["Electrical wiring and cables", "Plumbing pipes and tubing", "Heating and cooling systems", "Construction waste from remodeling", "Electronic scrap and appliances"],
    currentPrice: {
      value: 3.45,
      unit: "per lb",
      lastUpdated: "October 4, 2025",
    },
    seoKeywords: ["copper recycling near me", "copper scrap prices Texas", "how to sort copper wire", "copper recycling value", "copper pipe recycling"],
  },
  {
    slug: "aluminum",
    name: "Aluminum",
    category: "non-ferrous",
    image: "/images/aluminum.png",
    description: "Lightweight, versatile non-ferrous metal found in cans, siding, and various industrial applications.",
    longDescription: "Aluminum is widely recycled due to its energy-efficient production process. We accept all types of aluminum including cans, siding, extrusions, wheels, and cast aluminum. Proper sorting and preparation maximize value, with cast aluminum commanding different prices than wrought aluminum varieties.",
    grades: [
      {
        name: "Aluminum Cans",
        description: "Crushed beverage cans, free of contamination",
        priceRange: "$0.45 - $0.65",
        marketValue: 0.55,
      },
      {
        name: "Aluminum Siding",
        description: "Clean aluminum gutters and downspouts",
        priceRange: "$0.35 - $0.50",
        marketValue: 0.42,
      },
      {
        name: "Cast Aluminum",
        description: "Heavy cast aluminum parts, pots, and stamps",
        priceRange: "$0.40 - $0.60",
        marketValue: 0.5,
      },
      {
        name: "Wrought Aluminum",
        description: "Extrusions, sheets, and lite wrought scrap",
        priceRange: "$0.30 - $0.45",
        marketValue: 0.38,
      },
    ],
    preparationTips: ["Separate different aluminum alloys if possible", "Remove attachments, screws, and other metals", "Clean aluminum free of paint or epoxy if possible", "Crush aluminum cans to save space", "Sort cast aluminum from wrought aluminum"],
    commonSources: ["Beverage cans and food containers", "Building siding and gutters", "Vehicle wheels and parts", "Industrial castings and machinery parts", "Construction and demolition waste"],
    currentPrice: {
      value: 0.48,
      unit: "per lb",
      lastUpdated: "October 4, 2025",
    },
    seoKeywords: ["aluminum recycling near me", "aluminum can prices Texas", "aluminum casting recycling", "scrap aluminum value", "aluminum siding recycling"],
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    category: "non-ferrous",
    image: "/images/stainlesssteel.jpg",
    description: "Corrosion-resistant alloy known for its durability and magnetic properties at specific grades.",
    longDescription: "Stainless steel contains nickel and chromium, making it resistant to corrosion and heat. We accept various grades including 304, 316, and mixed stainless steel. Clean, unmarked stainless steel commands the highest prices, while painted or coated materials receive lower values.",
    grades: [
      {
        name: "Mixed Stainless Steel",
        description: "Various grades of stainless steel mixed together",
        priceRange: "$0.25 - $0.40",
        marketValue: 0.32,
      },
      {
        name: "Clean 304 Stainless",
        description: "Clean, unmarked 304 grade stainless steel",
        priceRange: "$0.35 - $0.55",
        marketValue: 0.45,
      },
      {
        name: "316 Stainless Steel",
        description: "Marine grade, molybdenum-added stainless",
        priceRange: "$0.40 - $0.65",
        marketValue: 0.52,
      },
      {
        name: "Stainless Steel Sinks",
        description: "Clean stainless steel household sinks",
        priceRange: "$0.30 - $0.45",
        marketValue: 0.38,
      },
    ],
    preparationTips: ["Remove all rubber, plastic, or coating attachments", "Sort different grades if possible (304, 316 labels)", "Cut into smaller pieces for processing", "Remove any attached copper, brass, or other metals", "Clean free of concrete or other contaminants"],
    commonSources: ["Kitchen appliances and sinks", "Construction equipment and tools", "Industrial machinery parts", "Medical equipment", "Marine and food processing equipment"],
    currentPrice: {
      value: 0.41,
      unit: "per lb",
      lastUpdated: "October 4, 2025",
    },
    seoKeywords: ["stainless steel recycling near me", "stainless steel scrap prices Texas", "316 stainless recycling value", "kitchen appliance recycling", "stainless steel melting"],
  },
  {
    slug: "steel-iron",
    name: "Steel & Iron",
    category: "ferrous",
    image: "/images/long_iron.jpg",
    description: "Most commonly recycled metal worldwide, essential for construction and manufacturing.",
    longDescription: "Steel and iron make up the largest portion of recycled metals. We accept all steel and iron including structural beams, cast iron, light sheet metal, and unprepared scrap. Clean, prepared steel commands higher prices than heavy, unprepared metal.",
    grades: [
      {
        name: "Prepared Steel",
        description: "Clean steel beams and structural iron without contaminants",
        priceRange: "$180 - $220",
        marketValue: 195,
      },
      {
        name: "Unprepared Steel",
        description: "Mixed steel with attachments, concrete, or other contaminates",
        priceRange: "$140 - $180",
        marketValue: 160,
      },
      {
        name: "Cast Iron",
        description: "Heavy cast iron parts, pipes, and machinery castings",
        priceRange: "$160 - $200",
        marketValue: 175,
      },
      {
        name: "Light Iron",
        description: "Thin steel sheets, cans, and appliances",
        priceRange: "$130 - $160",
        marketValue: 145,
      },
    ],
    preparationTips: ["Remove all concrete, wood, and other attachments", "Separate cast iron from steel when possible", "Cut long pieces into manageable sizes", "Remove any non-magnetic contaminants", "Drain all fluids from vehicles and appliances"],
    commonSources: ["Structural steel beams and rebar", "Vehicles and automotive scrap", "Appliances and household items", "Construction and demolition waste", "Industrial machinery and equipment"],
    currentPrice: {
      value: 178,
      unit: "per ton",
      lastUpdated: "October 4, 2025",
    },
    seoKeywords: ["steel recycling near me", "scrap iron prices Texas", "structural steel recycling", "cast iron scrap value", "steel melting prices"],
  },
  {
    slug: "brass",
    name: "Brass",
    category: "non-ferrous",
    image: "/images/brass.jpg",
    description: "Copper-zinc alloy with excellent corrosion resistance, used in plumbing and decorative applications.",
    longDescription: "Brass is a copper-zinc alloy valued for its corrosion resistance and malleability. We accept all brass materials including yellow brass, red brass, naval brass, and brass turnings. Mixed brass receives lower values than sorted, clean brass varieties.",
    grades: [
      {
        name: "Red Brass",
        description: "High copper content brass (85-95% copper)",
        priceRange: "$2.60 - $3.20",
        marketValue: 2.85,
      },
      {
        name: "Yellow Brass",
        description: "Standard brass with lower copper content",
        priceRange: "$2.30 - $2.80",
        marketValue: 2.55,
      },
      {
        name: "Naval Brass",
        description: "Tin-containing brass tubes and pipes",
        priceRange: "$2.40 - $3.00",
        marketValue: 2.7,
      },
      {
        name: "Brass Turnings",
        description: "Drilling and machining brass scraps",
        priceRange: "$1.80 - $2.30",
        marketValue: 2.05,
      },
    ],
    preparationTips: ["Separate red brass from yellow brass for higher value", "Remove all rubber, paint, or other attachments", "Cut brass pipes and tubes into shorter segments", "Sort plumbing brass from turnings when possible", "Clean metal free of oils and contaminants"],
    commonSources: ["Plumbing pipes, valves, and fittings", "Decorative brass items and furniture", "Industrial machining operations", "Electrical components and terminals", "Marine and aerospace equipment"],
    currentPrice: {
      value: 2.68,
      unit: "per lb",
      lastUpdated: "October 4, 2025",
    },
    seoKeywords: ["brass recycling near me", "brass scrap prices Texas", "red brass recycling value", "brass plumbing recycling", "brass turnings prices"],
  },
];

export const getMaterialDetail = (slug: string): MaterialDetail | undefined => {
  return allMaterialDetails.find((material) => material.slug === slug);
};

export const getMaterialCategories = (): {
  category: string;
  materials: MaterialDetail[];
}[] => {
  const ferrous = allMaterialDetails.filter((m) => m.category === "ferrous");
  const nonFerrous = allMaterialDetails.filter((m) => m.category === "non-ferrous");

  return [
    { category: "Non-Ferrous", materials: nonFerrous },
    { category: "Ferrous", materials: ferrous },
  ];
};

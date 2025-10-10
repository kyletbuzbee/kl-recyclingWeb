interface IndustryPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  keyChallenges: string[];
  ourSolutions: {
    service: string;
    description: string;
    benefit: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
  materialsGenerated: string[];
  contactCTA: string;
  seoKeywords: string[];
}

export const industryPages: IndustryPageData[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    subtitle: "Efficient Metal Waste Management Solutions for Manufacturers",
    description: "Manufacturing operations generate significant amounts of metal scrap that need efficient collection and recycling. We understand the production schedules and material flows in manufacturing environments, offering tailored solutions that minimize downtime and maximize returns.",
    heroImage: "/images/Construction.jpg",
    keyChallenges: ["Managing scrap metal generation during production runs", "Minimizing facility downtime for scrap removal", "Ensuring compliance with environmental regulations", "Maximizing value from mixed metal waste streams", "Scheduling pickups around manufacturing operations"],
    ourSolutions: [
      {
        service: "Scheduled Roll-Off Containers",
        description: "Dedicated containers placed strategically around your facility for convenient scrap deposition",
        benefit: "Eliminate delays in production while ensuring continuous scrap collection",
      },
      {
        service: "Material Sorting Support",
        description: "Expert guidance on separating ferrous and non-ferrous materials for optimal pricing",
        benefit: "Increase value recovery by up to 20% through proper material segregation",
      },
      {
        service: "On-Site Processing",
        description: "Mobile equipment for on-site crushing and processing of large metal components",
        benefit: "Reduce transportation costs and improve operational efficiency",
      },
      {
        service: "Compliance Reporting",
        description: "Detailed reporting on recycled tonnage for environmental and regulatory compliance",
        benefit: "Maintain strong environmental stewardship documentation",
      },
    ],
    testimonial: {
      quote: "K&L's scheduled pickup service fits perfectly into our production schedule. We never have to worry about overflow containers disrupting our operations, and their sorting recommendations have increased our scrap value significantly.",
      name: "Mike Rodriguez",
      title: "Plant Manager",
      company: "Texas Metal Works",
    },
    materialsGenerated: ["Steel machine shavings and turnings", "Aluminum extrusions and castings", "Copper wire and electrical components", "Stainless steel tooling and fixtures", "Mixed ferrous scrap from machinery"],
    contactCTA: "Streamline your manufacturing waste management today",
    seoKeywords: ["manufacturing scrap metal recycling", "industrial metal waste management Texas", "factory scrap metal pickups", "manufacturing waste recycling", "industrial scrap collection services"],
  },
  {
    slug: "demolition",
    title: "Demolition & Construction",
    subtitle: "Safe and Efficient Scrap Metal Removal During Demolition Projects",
    description: "Demolition projects generate large volumes of mixed metals that require specialized handling and processing. Our experienced teams work alongside demolition contractors to ensure safe removal, proper sorting, and maximum value recovery from structural steel, wiring, and miscellaneous metal components.",
    heroImage: "/images/demolition-safety.png",
    keyChallenges: ["Handling large volumes of mixed construction waste", "Separating metals from concrete and other construction debris", "Managing safety hazards from unstable structures", "Meeting tight project timelines for metal removal", "Coordinating with demolition crews and schedules"],
    ourSolutions: [
      {
        service: "Pre-Demolition Assessment",
        description: "Expert evaluation of metal content and value potential before project start",
        benefit: "Plan for maximum recovery and identify high-value metal components",
      },
      {
        service: "Dedicated Demolition Teams",
        description: "Experienced personnel trained in safe practices for metal salvage during active demolition",
        benefit: "Ensure safety while efficiently removing and sorting metals in progress",
      },
      {
        service: "Heavy Equipment Support",
        description: "Large-capacity roll-off containers and loaders for handling bulky construction scrap",
        benefit: "Efficient handling of rebar, structural steel, and concrete-embedded metals",
      },
      {
        service: "Post-Demolition Cleanup",
        description: "Comprehensive metal removal and processing after major demolition activities",
        benefit: "Complete site cleanup and maximum value recovery from all metal materials",
      },
    ],
    testimonial: {
      quote: "Working with K&L on our demolition projects has been outstanding. Their team understands the hazards and timing constraints unique to demolition work. We've seen significant improvements in our project margins thanks to their expertise.",
      name: "Jennifer Torres",
      title: "Operations Manager",
      company: "City Demo Services",
    },
    materialsGenerated: ["Structural steel beams and rebar", "Copper wiring and electrical systems", "Aluminum windows and framing", "Stainless steel fixtures and equipment", "Mixed ferrous scrap from construction"],
    contactCTA: "Make your demolition projects more profitable",
    seoKeywords: ["demolition scrap metal recycling", "construction metal salvage Texas", "demolition waste recycling", "construction scrap metal removal", "building demolition metal recovery"],
  },
  {
    slug: "electrical-contractors",
    title: "Electrical Contractors",
    subtitle: "Streamlined Copper and Wire Recycling for Electrical Professionals",
    description: "Electrical contractors generate significant amounts of copper wiring, cables, and electrical components during installation and maintenance work. We specialize in recovering maximum value from electrical scrap while providing compliant handling of hazardous materials and environmentally responsible processing.",
    heroImage: "/images/electric_motors.jpg",
    keyChallenges: ["Handling insulated copper wire and cable", "Managing mixed electrical components", "Dealing with hazardous materials in electrical equipment", "Maximizing value from various copper wire gauges", "Maintaining compliance with electrical waste regulations"],
    ourSolutions: [
      {
        service: "Copper Wire Processing",
        description: "Advanced stripping and processing of insulated copper wire and cables",
        benefit: "Recover maximum value from copper content while properly handling insulation",
      },
      {
        service: "Electrical Component Salvage",
        description: "Specialized handling and recycling of transformers, motors, and switchgear",
        benefit: "Safe processing of potentially hazardous electrical equipment",
      },
      {
        service: "Project-Based Collections",
        description: "Scheduled pickup services coordinated with project timelines",
        benefit: "Remove scrap throughout projects without interrupting work schedules",
      },
      {
        service: "Material Testing Services",
        description: "Copper purity and conductivity testing to ensure fair pricing",
        benefit: "Guarantee you're receiving market value for high-grade copper",
      },
    ],
    testimonial: {
      quote: "The value we get from our copper wire scrap through K&L is incredible. Their processing equipment and expertise in electrical materials ensure we get top dollar for our waste.",
      name: "David Chen",
      title: "CEO",
      company: "Precision Electrical Contractors",
    },
    materialsGenerated: ["Copper wire and cable (various gauges)", "Insulated electrical cables", "Copper busbar and grounding systems", "Electrical motors and transformers", "Aluminum electrical components"],
    contactCTA: "Turn your electrical scrap into profits",
    seoKeywords: ["electrical contractor scrap metal", "copper wire recycling Texas", "electrical equipment salvage", "contractor copper waste recycling", "electrical scrap metal collection"],
  },
];

export const getIndustryPage = (slug: string): IndustryPageData | undefined => {
  return industryPages.find((industry) => industry.slug === slug);
};

import { Service } from "@/types";

export const SERVICES_DATA: { [key: string]: Service } = {
  "mobile-crushing": {
    id: "mobile-crushing",
    title: "Mobile Car Crushing & On-Site Processing",
    description: "Provide high-volume, on-location car crushing services using specialized mobile equipment. Designed for auto salvage yards, municipalities, and industrial clients needing efficient vehicle disposal.",
    image: "/assets/car crushing/car-crushing.png",
    details: ["High-volume on-location processing", "Specialized mobile crushing equipment", "Immediate cash payments on-site", "Environmentally compliant operations"],
    benefits: ["Rapid deployment and setup", "Maximized scrap value recovery", "Environmentally compliant disposal", "Scalable for large lots or recurring pickups"],
    icon: "🔥",
    operationalDetails: {
      permits: ["EPA Mobile Processing Permits", "TEMPO Air Quality Permits", "Texas Railroad Commission Registration", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-6 personnel with mobile crushing unit operator",
      equipment: ["Mobile car crushing unit", "Certified industrial scale", "Fuel drainage and containment systems", "Generator and auxiliary power", "Environmental monitoring equipment"],
      notes: "Minimum 20 vehicles required for mobile service activation. 1-2 week scheduling notice preferred.",
    },
    availableLocations: ["texas", "oklahoma", "louisiana", "new-mexico", "kansas", "arkansas"],
    content: `
      <h3>Mobile Car Crushing & On-Site Processing</h3>
      <p>Provide high-volume, on-location car crushing services using specialized mobile equipment. Designed for auto salvage yards, municipalities, and industrial clients needing efficient vehicle disposal.</p>

      <h4>Key Benefits:</h4>
      <ul>
        <li>Rapid deployment and setup</li>
        <li>Maximized scrap value recovery</li>
        <li>Environmentally compliant disposal</li>
        <li>Scalable for large lots or recurring pickups</li>
      </ul>
    `,
  },
  "roll-off": {
    id: "roll-off",
    title: "Roll-Off Container Services",
    description: "Offer flexible roll-off container rentals for scrap metal, demolition debris, and industrial waste. Ideal for construction sites, manufacturing facilities, and clean-up projects.",
    image: "/assets/services/roll-off-container.jpg",
    details: ["Multiple container sizes (20–40 yd³)", "Flexible rental terms", "Weather-resistant construction", "Customized delivery and pickup schedules"],
    benefits: ["Multiple container sizes (20–40 yd³)", "Fast drop-off and pickup scheduling", "No-hassle call-in service", "Long-term or short-term rental options"],
    icon: "📦",
    content: `
      <h3>Roll-Off Container Services</h3>
      <p>Offer flexible roll-off container rentals for scrap metal, demolition debris, and industrial waste. Ideal for construction sites, manufacturing facilities, and clean-up projects.</p>

      <h4>Key Benefits:</h4>
      <ul>
        <li>Multiple container sizes (20–40 yd³)</li>
        <li>Fast drop-off and pickup scheduling</li>
        <li>No-hassle call-in service</li>
        <li>Long-term or short-term rental options</li>
      </ul>
    `,
  },
  "oilfield-demolition": {
    id: "oilfield-demolition",
    title: "Oilfield & Gas Demolition",
    description: "Deliver specialized demolition and equipment recovery services for oilfield and gas operations. Includes tank removal, pipeline deconstruction, and site cleanup.",
    image: "/assets/oilfield demo/Tank and Shear 2.jpg",
    details: ["Specialized oilfield equipment recovery", "Complete demolition and site cleanup", "DISA-certified operations", "Heavy equipment handling expertise"],
    benefits: ["Compliance with environmental and safety regulations", "Salvage and recycling of valuable materials", "Heavy equipment handling and logistics", "Project management from start to finish"],
    icon: "🛢️",
    operationalDetails: {
      permits: ["DISA Waste Management Certification", "Texas Railroad Commission Permitting", "EPA Hazardous Waste Handling", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-12 personnel depending on project scope",
      equipment: ["Heavy-duty cranes and excavators", "Hazardous material containment units", "Specialized oilfield equipment recovery", "Transport trailers for oversized loads", "Environmental monitoring"],
      notes: "Pre-demolition assessment required. Specialized training for oilfield equipment handling.",
    },
    availableLocations: ["texas", "oklahoma", "kansas", "louisiana", "arkansas", "new-mexico"],
    content: `
      <h3>Oilfield & Gas Demolition</h3>
      <p>Deliver specialized demolition and equipment recovery services for oilfield and gas operations. Includes tank removal, pipeline deconstruction, and site cleanup.</p>

      <h4>Key Benefits:</h4>
      <ul>
        <li>Compliance with environmental and safety regulations</li>
        <li>Salvage and recycling of valuable materials</li>
        <li>Heavy equipment handling and logistics</li>
        <li>Project management from start to finish</li>
      </ul>
    `,
  },
  "public-services": {
    id: "public-services",
    title: "Public Services & Community Recycling",
    description: "Support municipalities, neighborhoods, and public organizations with scrap collection, clean-up events, and recycling initiatives.",
    image: "/assets/equipment/in-action.png",
    details: ["Nine locations across East Texas and beyond", "Community-focused approach", "Educational outreach programs", "Municipal partnerships"],
    benefits: ["Residential drop-off programs", "Community-friendly scheduling", "Educational outreach and signage", "Dedicated neighborhood recycling solutions"],
    icon: "🧑‍🔧",
    content: `
      <h3>Public Services & Community Recycling</h3>
      <p>Support municipalities, neighborhoods, and public organizations with scrap collection, clean-up events, and recycling initiatives.</p>

      <h4>Key Benefits:</h4>
      <ul>
        <li>Residential drop-off programs</li>
        <li>Community-friendly scheduling</li>
        <li>Educational outreach and signage</li>
        <li>Dedicated neighborhood recycling solutions</li>
      </ul>

      <h4>Locations</h4>
      <p>With nine locations across East Texas and beyond, we're your neighborhood choice for honest scrap metal recycling services.</p>
    `,
  },
};

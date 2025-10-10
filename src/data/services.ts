import { Service } from "@/types";

export const SERVICES_DATA: { [key: string]: Service } = {
  "oilfield-demolition": {
    id: "oilfield-demolition",
    title: "Oilfield Demolition & Equipment Recovery",
    description: "Specialized oilfield demolition with DISA certification. Complete removal and recycling of oilfield equipment including tanks, rig structures, and processing facilities.",
    image: "/assets/oilfield demo/Tank and Shear 2.jpg",
    details: ["DISA-certified for oilfield waste management", "Complete equipment removal and transport", "Certified spill containment and cleanup", "Specialized heavy equipment recovery"],
    benefits: ["DISA compliance guaranteed", "Maximize value from specialized equipment", "Environmental responsibility", "Complete permitting and documentation"],
    icon: "🛢️",
    operationalDetails: {
      permits: ["DISA Waste Management Certification", "Texas Railroad Commission Permitting", "EPA Hazardous Waste Handling", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-12 personnel depending on project scope",
      equipment: ["Heavy-duty cranes and excavators", "Hazardous material containment units", "Specialized oilfield equipment recovery", "Transport trailers for oversized loads", "Environmental monitoring"],
      notes: "Pre-demolition assessment required. Specialized training for oilfield equipment handling.",
    },
    availableLocations: ["all-oilfield-areas", "east-texas-oilfields", "permian-basin"],
    content: `
      <h3>Oilfield Demolition Specialists with DISA Certification</h3>
      <p>K&L Recycling is a DISA-certified provider for oilfield demolition and equipment recovery. With decades of experience in the energy sector, we provide turnkey services for the complete removal, transport, and recycling of oilfield equipment.</p>

      <h4>DISA-Certified Expertise</h4>
      <p>Our DISA certification ensures the highest standards of safety and environmental compliance. We handle all aspects of oilfield facility decommissioning according to regulatory requirements.</p>

      <h4>Complete Equipment Recovery</h4>
      <p>From storage tanks and pump jacks to processing facilities and wellheads, we recover all recoverable materials while properly disposing of hazardous waste in compliance with environmental regulations.</p>

      <h4>Environmental Responsibility</h4>
      <p>All work is performed with strict environmental controls, including spill containment systems and soil remediation coordination when needed.</p>

      <h4>Schedule Oilfield Demolition</h4>
      <p>Ready to decommission your oilfield facilities? Our DISA-certified team ensures complete compliance and maximum recovery value.</p>

      <div class="cta-buttons">
        <a href="/contact?service=oilfield-demolition" class="btn-primary">Schedule Oilfield Demolition</a>
        <a href="tel:(903) 592-6299" class="btn-secondary">Call (903) 592-6299</a>
      </div>
    `,
  },
  "bulk-pickup": {
    id: "bulk-pickup",
    title: "Bulk Pickup Services",
    description: "Large-scale scrap metal collection with specialized equipment and transport. Industrial-grade handling for commercial and industrial operations.",
    image: "/images/Construction.jpg",
    details: ["Specialized heavy equipment transport", "Industrial-scale collection capabilities", "Scheduled and on-demand pickup", "Bulk material handling expertise"],
    benefits: ["Large capacity collection", "Dedicated equipment and crews", "Minimize operational downtime", "Comprehensive industrial support"],
    icon: "🚛",
    operationalDetails: {
      permits: ["OSHA Industrial Safety Compliance", "Commercial Transport Permits", "EPA Hazardous Material Handling", "Industrial Waste Permits"],
      crewSize: "4-8 personnel with specialized equipment operators",
      equipment: ["Heavy-duty flatbed trailers", "Industrial forklifts and cranes", "Hydraulic lift systems", "Bulk material containers"],
      notes: "Minimum volume requirements apply. Scheduled pickup coordination available.",
    },
    content: `
      <h3>Industrial Bulk Pickup Services</h3>
      <p>For large-scale industrial operations requiring specialized collection and transport, our bulk pickup services provide the scale and expertise needed to handle high-volume scrap metal collection efficiently and safely.</p>

      <h4>Specialized Equipment & Crews</h4>
      <p>Our dedicated teams are equipped with industrial-grade vehicles and equipment designed to handle large volumes of scrap metal, ensuring safe and efficient collection from your facility.</p>

      <h4>Flexible Scheduling</h4>
      <p>Whether you need regular scheduled pickups or emergency bulk collection, our services adapt to your operational requirements to minimize disruption.</p>
    `,
  },
  industrial: {
    id: "demolition",
    title: "Demolition & Industrial Cleanup",
    description: "50+ years of specialized demolition experience across Texas, Oklahoma, Kansas, Louisiana, Arkansas & New Mexico with mobile crews available nationwide.",
    image: "/assets/services/demolition-safety.png",
    details: ["Bulk crude tank removal from 400 bbl and up - regularly demolish 100,000 bbl tanks", "Laydown yard cleanouts and asset recovery/disposal services", "Frac tank disposal and pipeline removal", "No 'HOT WORK' required processes - certified cold cutting methods", "ISN member contractor with full compliance and safety certifications"],
    benefits: ["Professional removal of oilfield and industrial equipment", "Nationwide mobile service availability", "Zero environmental liability transfer", "Maximum value recovery from specialized equipment", "Complete permitting and documentation handling"],
    icon: "🏗️",
    operationalDetails: {
      permits: ["ISN Member Contractor Certification", "OSHA Compliance Certification", "EPA Environmental Permits", "Hazardous Waste Handling", "Texas Railroad Commission Registration"],
      crewSize: "4-12 specialized personnel with industry experience",
      equipment: ["Heavy-duty cranes and excavators", "Cold cutting equipment", "Hazardous material containment", "Industrial transport trailers", "Environmental monitoring systems"],
      notes: "Specialized oilfield and industrial equipment expertise. No hot work permits required.",
    },
    availableLocations: ["texas", "oklahoma", "kansas", "louisiana", "arkansas", "new-mexico", "nationwide"],
    content: `
      <h3>We Bring Our 50 Years of Experience To Your Demolition Site</h3>

      <h4>Specialized Oilfield & Industrial Demolition</h4>
      <ul>
        <li>Concentrated service in Texas, Oklahoma, Kansas, Louisiana, Arkansas & New Mexico</li>
        <li>Mobile crews available almost anywhere in the U.S. for specialized projects</li>
        <li>Major oil & gas companies trust us for bulk crude tank removal</li>
        <li>Tank removal services from 400 bbl and up - regularly demolish 100,000 bbl tanks</li>
      </ul>

      <h4>Complete Industrial Services</h4>
      <ul>
        <li>Laydown yard cleanouts and asset recovery/disposal</li>
        <li>Frac tank disposal and pipeline removal</li>
        <li>Processing facility decommissioning</li>
        <li>All types of industrial demolition and disposal</li>
      </ul>

      <h4>Safety & Compliance First</h4>
      <ul>
        <li>Processes do not require "HOT WORK" - certified cold cutting methods</li>
        <li>ISN Member Contractor status ensures highest safety standards</li>
        <li>Full regulatory compliance and environmental protection</li>
        <li>Professional equipment and experienced teams</li>
      </ul>

      <h4>Ready for Your Industrial Demolition Project?</h4>
      <p>Contact our specialized demolition team to discuss your project requirements and scheduling.</p>

      <div class="cta-buttons">
        <a href="/contact?service=demolition" class="btn-primary">Schedule Demolition Service</a>
        <a href="tel:+18005338081" class="btn-secondary">Call (800) 533-8081</a>
      </div>
    `,
  },
  "roll-off": {
    id: "roll-off",
    title: "Roll-Off Container Services",
    description: "East Texas businesses rely on our roll-off container rental for dependable scrap metal collection. Right-sized containers, timely service, fair pricing.",
    image: "/assets/services/roll-off-container.jpg",
    details: ["10-40 yard containers in open and enclosed options.", "Same-day delivery available across East Texas.", "Weathered steel construction for reliable outdoor use."],
    benefits: ["Store scrap on-site without truck trips", "Rent by the month or longer", "No hidden rental fees", "Emergency pickups when you need them"],
    icon: "📦",
    content: `
      <h3>Roll-Off Containers You Can Count On</h3>
      <p>East Texas businesses choose our roll-off container service because we deliver what we promise: clean containers on time, reliable pickups, and straightforward pricing you can trust.</p>

      <h4>Sized for Your Needs</h4>
      <p>From 10-yard containers for small projects to 40-yard monsters for big operations, we have the right size. Open-top for easy loading, enclosed for security and weather protection.</p>

      <h4>Delivery You Can Depend On</h4>
      <p>We deliver when we say we will and pick up when you need us - scheduled weekly, bi-weekly, or on-call. Our drivers are from your community and know the roads.</p>

      <h4>Clear, Fair Pricing</h4>
      <p>Know what you'll pay upfront. Monthly rental plus your actual scrap value when we pickup. No surprises, no add-ons, just fair Eastern Texas pricing.</p>
    `,
  },
  "mobile-crushing": {
    id: "mobile-crushing",
    title: "Mobile Car Crushing & On-Site Processing",
    description: "Our mobile crushing team brings industrial-grade processing directly to your location across TX, OK, LA, NM, KS, and AR. Cash paid on-site for all vehicles.",
    image: "/assets/car crushing/car-crushing.png",
    details: ["Mobile car crushing across Texas and surrounding states.", "Cash payments made immediately on-site.", "Fully insured, EPA-compliant operations.", "All permits and environmental compliance handled."],
    benefits: ["Save on transportation costs - we come to you", "IMMEDIATE cash payment with no waiting period", "Environmentally responsible processing", "No environmental liability for your business"],
    icon: "🔥",
    operationalDetails: {
      permits: ["EPA Mobile Processing Permits", "TEMPO Air Quality Permits", "Texas Railroad Commission Registration", "Local County Permits", "OSHA Safety Compliance"],
      crewSize: "4-6 personnel with mobile crushing unit operator",
      equipment: ["Mobile car crushing unit", "Certified industrial scale", "Fuel drainage and containment systems", "Generator and auxiliary power", "Environmental monitoring equipment"],
      notes: "Minimum 20 vehicles required for mobile service activation. 1-2 week scheduling notice preferred.",
    },
    availableLocations: ["premier", "acme"],
    content: `
      <h2>Mobile Car Crushing Services Across Texas and Beyond</h2>
      <p>Since 1956, K&L Recycling has pioneered mobile scrap metal processing, bringing industrial-grade car crushing equipment directly to your location. Whether you're an auto salvage yard, dealership, municipal facility, or industrial operation, our mobile crushing service eliminates transportation costs and delays while delivering immediate cash value for your scrap vehicles.</p>

      <h3>Our Mobile Crushing Process</h3>
      <p>Our streamlined process ensures maximum efficiency and value for your operation:</p>

      <h4>Step 1: Project Planning & Scheduling</h4>
      <p>We assess the scope of your vehicle inventory and coordinate the optimal timing for our mobile crushing unit to arrive at your location. Our experienced team works around your operational schedule to minimize disruption.</p>

      <h4>Step 2: Site Preparation & Safety Setup</h4>
      <p>Our team establishes a safe processing zone on your property. We bring all necessary safety equipment, signage, and containment materials to ensure a secure work environment that meets OSHA standards.</p>

      <h4>Step 3: Vehicle Processing & Payment</h4>
      <p>Each vehicle is properly drained of all fluids in an environmentally compliant manner before crushing. Our certified scales provide accurate weight measurements, and you receive immediate cash payment for each vehicle processed.</p>

      <h4>Step 4: Eco-Friendly Cleanup & Removal</h4>
      <p>All fluids are collected for proper disposal, and non-metallic components are handled according to EPA guidelines. We leave your site clean and environmentally sound.</p>

      <h3>Comprehensive Safety Checklist</h3>
      <p>Your safety and environmental compliance are our top priorities:</p>
      <ul>
        <li>✓ OSHA-compliant safety protocols</li>
        <li>✓ Spill containment systems for all fluids</li>
        <li>✓ Fire extinguishers and emergency equipment on-site</li>
        <li>✓ Safety vests and hard hats for all personnel</li>
        <li>✓ Traffic control for entry/exit points</li>
        <li>✓ Environmental monitoring and compliance checks</li>
        <li>✓ Emergency response plan established</li>
      </ul>

      <h3>Permits & Regulatory Compliance</h3>
      <p>All necessary permits and regulatory compliance are handled by our team:</p>
      <ul>
        <li><strong>EPA Mobile Processing Permits:</strong> Comprehensive environmental compliance</li>
        <li><strong>TEMPO Air Quality Permits:</strong> Texas environmental protection</li>
        <li><strong>Texas Railroad Commission Registration:</strong> For fluid handling</li>
        <li><strong>Local County Permits:</strong> Site-specific operational clearance</li>
        <li><strong>OSHA Safety Compliance:</strong> Certified workplace standards</li>
      </ul>

      <h3>Why Choose K&L Mobile Crushing?</h3>
      <p>Unlike competitors who charge premium rates for pickup service, we bring crushing equipment to your location at NO EXTRA COST. You receive the same fair market pricing for your scrap vehicles, but eliminate transportation expenses and delays. Our service extends across Texas, Oklahoma, Louisiana, New Mexico, Kansas, and Arkansas.</p>

      <h3>Frequently Asked Questions</h3>

      <h4>Q: What types of vehicles do you crush?</h4>
      <p>A: We process passenger cars, trucks, SUVs, vans, and light commercial vehicles. Our industrial-grade equipment can handle vehicles from running condition to complete rust buckets.</p>

      <h4>Q: How quickly can you schedule service?</h4>
      <p>A: We typically schedule mobile crushing within 1-2 weeks, though rush service is available for urgent situations. Contact us for current availability.</p>

      <h4>Q: What happens to the fluids and non-metallic parts?</h4>
      <p>A: All fluids (oil, antifreeze, brake fluid, etc.) are captured in our contained drainage system and disposed of according to EPA regulations. Plastic, rubber, and glass components are separated for proper recycling.</p>

      <h4>Q: Do you provide documentation for each vehicle?</h4>
      <p>A: Yes, each vehicle receives detailed processing documentation including weight tickets, payment receipts, and environmental compliance certificates.</p>

      <h4>Q: What are your payment terms?</h4>
      <p>A: We pay cash on-site immediately after each vehicle is processed and weighed. Payments are based on current market values for scrap metal content.</p>

      <h3>Ready to Book Mobile Crushing Service?</h3>
      <p>Don't let old vehicles take up valuable space and tie up capital. Let our mobile crushing team turn your automotive inventory into immediate cash flow. Contact us today to discuss your specific needs and schedule your service.</p>

      <p><strong>Serving:</strong> Texas (Tyler, Dallas, Houston, San Antonio, Austin, El Paso), Oklahoma, Louisiana, New Mexico, Kansas, Arkansas</p>

      <p><a href="/contact">Contact us</a> for current pricing in your area or to schedule service.</p>

      <h3>Satisfied Customer Testimonials</h3>
      <div class="testimonial">
        <p>"K&L's mobile crushing service was a game-changer for our dealership. We processed 50+ trade-ins in one day and got paid immediately. Their team was professional, safe, and efficient."</p>
        <cite>- Lone Star Auto Sales, Tyler TX</cite>
      </div>

      <div class="testimonial">
        <p>"We've used K&L mobile crushing for our salvage yard for over 5 years. They handle all the permits and environmental compliance, and their cash-on-site payment means we can reinvest in our business immediately."</p>
        <cite>- East Texas Salvage, Jacksonville TX</cite>
      </div>

      <p>For detailed pricing information, visit our <a href="/pricing">pricing page</a>. To see available service areas, check out our <a href="/locations">locations</a>.</p>
    `,
  },
  "public-services": {
    id: "public-services",
    title: "Public Drop-Off Services",
    description: "East Texas families and small businesses find us to be the straightforward choice for scrap metal drop-offs. Fair prices, no runaround, community values.",
    image: "/assets/equipment/in-action.png",
    details: ["Nine locations across East Texas and beyond.", "Top market prices for all metals we accept.", "Our team will help identify your materials.", "Cash in your pocket same day."],
    benefits: ["Stop in anytime, no appointment needed", "Get what your scrap is really worth", "Payment right as you leave the scale", "East Texas friendly service"],
    icon: "🧑‍🔧",
    content: `
      <h3>Your Neighbors' Choice for Scrap Metal</h3>
      <p>Since 1956, East Texas families and small business owners have chosen K&L Recycling for honest scrap metal processing. No confusing contracts, no lowball pricing - just fair market value and community trust.</p>

      <h4>We Buy It All</h4>
      <p>Steel beams, aluminum cans, copper pipe, brass fixtures, stainless sinks - if it's metal and fits in your truck, we want it. Our knowledgeable staff will help identify different grades and ensure you get paid for what you've got.</p>

      <h4>Get Paid What You Deserve</h4>
      <p>Drive onto our certified scale, unload your materials, and get paid immediately based on weight and current market prices. Our pricing is transparent - no 'processing fees' or hidden deductions.</p>

      <h4>Easy to Find, Easy to Get To</h4>
      <p>With eight locations across Texas and Kansas, there's a K&L Recycling yard close enough for your scrap run. We keep regular hours and are open when you need us - no appointment necessary.</p>
    `,
  },
};

// K&L Recycling Community & Sponsorship Program
export interface CommunityEvent {
  id: string;
  title: string;
  type: "sponsorship" | "partnership" | "community-outreach" | "environmental";
  description: string;
  location: string;
  date?: string; // For specific events
  frequency?: "annual" | "monthly" | "quarterly" | "ongoing";
  impact: string; // Quantifiable community benefit
  partnershipLevel: "platinum" | "gold" | "silver" | "in-kind";
  image?: string;
  testimonial?: string;
  contactPerson?: string;
}

export interface SponsorTier {
  level: "platinum" | "gold" | "silver" | "in-kind";
  benefits: string[];
  cost?: string;
  commitment?: string;
  examples: string[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    level: "platinum",
    benefits: ["Full page feature on K&L website", "Logo on all company vehicles and marketing materials", "Annual community event sponsorship", "Quarterly environmental impact report", "VIP invitations to K&L events", "Social media partnership promotion"],
    cost: "$10,000+ annually",
    commitment: "Multi-year partnership",
    examples: ["Local YMCA", "Regional Hospital", "County Chamber of Commerce"],
  },
  {
    level: "gold",
    benefits: ["Logo on K&L website and social media", "Quarterly partnership announcements", "Event sponsorship opportunities", "Environmental impact highlights in newsletters", "Recognition at community events"],
    cost: "$5,000-$9,999 annually",
    commitment: "Annual partnership",
    examples: ["Little League Baseball", "High School PTO", "Community Tennis Association"],
  },
  {
    level: "silver",
    benefits: ["Logo recognition on K&L website", "Monthly social media mentions", "Environmental awareness support", "Community volunteer opportunities", "Recycling education partnership"],
    cost: "$2,000-$4,999 annually",
    commitment: "Annual or project-based",
    examples: ["Elementary Schools", "Local Churches", "Environmental Clubs", "Boy/Girl Scouts"],
  },
  {
    level: "in-kind",
    benefits: ["K&L provides recycled metal materials for projects", "Equipment donation opportunities", "Environmental education support", "Community outreach collaboration", "Volunteer workforce for environmental initiatives"],
    cost: "$0-$1,999 value",
    commitment: "Project-based as available",
    examples: ["Art installations from recycled metal", "School environmental projects", "Community garden tool donations"],
  },
];

export const communityEvents: CommunityEvent[] = [
  {
    id: "east-texas-annual-litter-cleanup",
    title: "East Texas Annual Litter Cleanup",
    type: "environmental",
    description: "Annual collaborative cleanup of major highways and rivers across East Texas, removing tons of litter and educating communities about environmental responsibility.",
    location: "Multiple locations across East Texas counties",
    frequency: "annual",
    impact: "Removed 15 tons of litter in 2024, engaging 500+ local volunteers",
    partnershipLevel: "gold",
    testimonial: "K&L's partnership makes our cleanup drives more impactful every year. Their volunteers and equipment help us reach areas we couldn't access before.",
    contactPerson: "Sarah Johnson, Tyler County Environmental Coordinator",
  },
  {
    id: "kl-little-league-sponsorship",
    title: "K&L Little League Championship",
    type: "sponsorship",
    description: "Annual sponsorship of the Tyler Little League World Series, providing uniforms, equipment, and field maintenance for youth baseball programs.",
    location: "Oak Grove Fields, Tyler TX",
    frequency: "annual",
    impact: "Supported 200+ youth athletes and their families in 2024",
    partnershipLevel: "platinum",
    testimonial: "K&L isn't just another sponsor - they're part of our community family. The kids look forward to their visits and learn about recycling alongside baseball.",
    contactPerson: "Coach Mike Rodriguez, Tyler Little League",
  },
  {
    id: "recycling-drive-community-school-fundraiser",
    title: "School Recycling Drive Fundraisers",
    type: "partnership",
    description: "Quarterly recycling drives at local schools where K&L matches donations and provides educational programs about metal recycling and environmental stewardship.",
    location: "Partner schools across Tyler, Palestine, and Jacksonville",
    frequency: "quarterly",
    impact: "Raised $8,000+ for school programs and recycled 2.5 tons of metal in Q1 2025",
    partnershipLevel: "gold",
    testimonial: "Our students learn that recycling isn't just good for the earth - it can help their school too! K&L makes this hands-on learning experience possible.",
    contactPerson: "Principal Linda Martinez, Buena Vista Elementary",
  },
  {
    id: "veterans-ranch-metal-art-project",
    title: "Veterans' Ranch Metal Art Project",
    type: "community-outreach",
    description: "Year-round partnership with the Walter Bash Veteran Ranch, donating recycled metals for art therapy programs and supporting veteran education initiatives.",
    location: "Walter Bash Veteran Ranch, Jacksonville TX",
    frequency: "ongoing",
    impact: "Provided materials for veteran art therapy programs and community education since 2018",
    partnershipLevel: "in-kind",
    testimonial: "The materials K&L provides aren't just metal - they're healing for our veterans. The art they create from recycled materials gives them purpose and expression.",
    contactPerson: "Veteran Kenneth Miller, Therapy Program Coordinator",
  },
  {
    id: "tyler-chamber-environmental-awards",
    title: "Tyler Chamber Environmental Excellence Awards",
    type: "sponsorship",
    description: "Annual presentation of environmental awards to East Texas businesses demonstrating exceptional environmental responsibility and sustainability practices.",
    location: "Tyler Convention Center, Annual Awards Dinner",
    frequency: "annual",
    impact: "Recognized 12 businesses with $5,000 in total environmental achievement awards in 2024",
    partnershipLevel: "platinum",
    testimonial: "K&L sets the standard for environmental excellence in our community. Their backing of these awards motivates all businesses to do better.",
    contactPerson: "Executive Director Thomas Greene, Tyler Chamber of Commerce",
  },
  {
    id: "earth-day-river-cleanup-festival",
    title: "Earth Day River Cleanup & Festival",
    type: "environmental",
    description: "Comprehensive Earth Day celebration featuring river cleanup activities, environmental education booths, and family-friendly activities along the Neches River.",
    location: "Baldwin Park, Tyler TX and Riverside areas",
    frequency: "annual",
    impact: "Engaged 1,000+ participants and removed 8 tons of river debris in 2024 Earth Day event",
    partnershipLevel: "platinum",
    testimonial: "K&L turns a serious environmental effort into a community celebration. Their equipment and volunteers make our Earth Day festival possible.",
    contactPerson: "Coordinator Maria Sanchez, Tyler Environmental Coalition",
  },
];

// Community volunteer opportunities
export const volunteerOpportunities = [
  {
    title: "Litter Cleanup Volunteer Days",
    description: "Join our team for scheduled cleanup days along Texas highways and rivers. Equipment and training provided.",
    frequency: "Monthly",
    commitment: "1 day commitment",
    benefits: ["Free lunch provided", "Safety training included", "Environmental impact education", "Networking with local businesses"],
  },
  {
    title: "School Recycling Education Program",
    description: "Present interactive recycling lessons to local students, showing the transformation of scrap metal into new products.",
    frequency: "On-demand",
    commitment: "2-hour presentation",
    benefits: ["Educational materials provided", "Professional development opportunity", "Making a difference in local education", "Community recognition"],
  },
  {
    title: "Annual Environmental Fair Participation",
    description: "Staff information booths at local environmental fairs and festivals, educating the public about responsible metal recycling.",
    frequency: "Annual/Biannual",
    commitment: "Half-day commitment",
    benefits: ["Booth and materials provided", "Family member attendance welcome", "Networking opportunities", "Direct community impact"],
  },
];

// Sponsorship application process
export const sponsorshipProcess = {
  applicationSteps: ["Initial inquiry and partnership discussion", "Site visit to understand organization's mission and needs", "Customized sponsorship proposal development", "Partnership agreement and commitment", "Launch of sponsored programs/activities", "Quarterly partnership reviews and impact assessments"],
  decisionFactors: ["Organizational mission alignment with environmental responsibility", "Community impact potential", "Sustainability of the partnership", "Measurable outcomes and benefits", "Local community root development"],
};

// Dynamic Form Questions by Service Type
export interface FormQuestion {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "textarea" | "file" | "radio" | "checkbox";
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  dependsOn?: string[]; // Which services this question applies to
}

export interface ServiceFormConfig {
  name: string;
  icon: string;
  description: string;
  questions: FormQuestion[];
  cta: {
    serviceSpecific: string;
    general: string;
    url: string;
  };
}

export const serviceForms: Record<string, ServiceFormConfig> = {
  "roll-off": {
    name: "Roll-Off Container Service",
    icon: "📦",
    description: "Schedule your industrial container delivery and pickup",
    questions: [
      {
        id: "containerSize",
        label: "What size container do you need?",
        type: "select",
        required: true,
        options: [
          { value: "10", label: "10-yard container" },
          { value: "15", label: "15-yard container" },
          { value: "20", label: "20-yard container" },
          { value: "30", label: "30-yard container" },
          { value: "40", label: "40-yard container" },
        ],
      },
      {
        id: "deliveryDate",
        label: "Desired delivery date",
        type: "text",
        required: true,
        placeholder: "Select preferred delivery date",
      },
      {
        id: "frequency",
        label: "Service frequency",
        type: "radio",
        required: true,
        options: [
          { value: "one-time", label: "One-time pickup" },
          { value: "weekly", label: "Weekly service" },
          { value: "bi-weekly", label: "Bi-weekly service" },
          { value: "monthly", label: "Monthly rental" },
        ],
      },
    ],
    cta: {
      serviceSpecific: "Schedule Roll-Off Delivery",
      general: "Get Free Quote",
      url: "/contact?service=roll-off",
    },
  },

  demolition: {
    name: "Oil & Gas Demolition Service",
    icon: "🏗️",
    description: "Professional demolition for oilfield and industrial facilities",
    questions: [
      {
        id: "projectType",
        label: "Project type",
        type: "select",
        required: true,
        options: [
          { value: "tank-removal", label: "Storage tank removal" },
          { value: "rig-demolition", label: "Oil rig dismantling" },
          { value: "pipeline-decommissioning", label: "Pipeline decommissioning" },
          { value: "facility-demolition", label: "Process facility demolition" },
          { value: "equipment-removal", label: "Heavy equipment recovery" },
          { value: "other", label: "Other (specify below)" },
        ],
      },
      {
        id: "timeline",
        label: "Project timeline",
        type: "radio",
        required: true,
        options: [
          { value: "immediate", label: "Emergency/Immediate" },
          { value: "1-2-weeks", label: "1-2 weeks notice" },
          { value: "1-month", label: "1 month notice" },
          { value: "flexible", label: "Flexible schedule" },
        ],
      },
      {
        id: "sitePhoto",
        label: "Upload site photos (optional)",
        type: "file",
        required: false,
        validation: {
          message: "Please upload clear photos showing the demolition site and equipment",
        },
      },
      {
        id: "specialRequirements",
        label: "Special requirements or hazards",
        type: "textarea",
        required: false,
        placeholder: "Any hazardous materials, power lines, underground utilities, or special access requirements?",
      },
    ],
    cta: {
      serviceSpecific: "Schedule Demolition Assessment",
      general: "Get Free Quote",
      url: "/contact?service=demolition",
    },
  },

  "mobile-crushing": {
    name: "Mobile Car Crushing Service",
    icon: "🔥",
    description: "On-site vehicle processing service",
    questions: [
      {
        id: "vehicleCount",
        label: "Number of vehicles (minimum 20)",
        type: "number",
        required: true,
        validation: {
          min: 20,
          message: "Minimum 20 vehicles required for mobile service",
        },
        placeholder: "How many vehicles do you have?",
      },
      {
        id: "vehicleType",
        label: "Vehicle types",
        type: "checkbox",
        required: true,
        options: [
          { value: "cars", label: "Passenger cars" },
          { value: "trucks", label: "Trucks/SUVs" },
          { value: "vans", label: "Vans" },
          { value: "commercial", label: "Commercial vehicles" },
          { value: "other", label: "Other (specify below)" },
        ],
      },
      {
        id: "location",
        label: "Your location/city",
        type: "text",
        required: true,
        placeholder: "City and state where crushing should take place",
      },
      {
        id: "availability",
        label: "Preferred schedule",
        type: "radio",
        required: true,
        options: [
          { value: "morning", label: "Morning (7AM-12PM)" },
          { value: "afternoon", label: "Afternoon (12PM-5PM)" },
          { value: "flexible", label: "Flexible timing" },
        ],
      },
    ],
    cta: {
      serviceSpecific: "Schedule Mobile Crushing",
      general: "Get Free Quote",
      url: "/contact?service=mobile-crushing",
    },
  },
};

// Universal contact form questions (added to all service forms)
export const universalContactQuestions: FormQuestion[] = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    required: true,
    validation: {
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      message: "Please enter a valid email address",
    },
    placeholder: "your@email.com",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "text",
    required: true,
    placeholder: "(555) 123-4567",
  },
  {
    id: "company",
    label: "Company Name (optional)",
    type: "text",
    required: false,
    placeholder: "Your organization name",
  },
  {
    id: "message",
    label: "Message/Details",
    type: "textarea",
    required: false,
    placeholder: "Any additional information or specific requirements",
  },
];

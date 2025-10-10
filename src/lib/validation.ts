import { z } from "zod";

// Schema for the contact form
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(1, { message: "Message is required." }),
  attachments: z.array(z.instanceof(File)).optional(),
  honeypot: z.string().max(0, { message: "Honeypot must be empty." }).optional(),
});

// Schema for the schedule pickup form
export const schedulePickupFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
    message: "Invalid phone number.",
  }),
  address: z.string().min(1, { message: "Address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zip: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, {
    message: "Invalid ZIP code.",
  }),
  pickupDate: z.string().min(1, { message: "Pickup date is required." }),
  materials: z.string().min(1, { message: "Description of materials is required." }),
  honeypot: z.string().max(0, { message: "Honeypot must be empty." }).optional(),
});

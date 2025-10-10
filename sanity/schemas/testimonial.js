import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role/Title",
      type: "string",
      description: "Person's role or title at the company",
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "5 Stars", value: 5 },
          { title: "4 Stars", value: 4 },
          { title: "3 Stars", value: 3 },
          { title: "2 Stars", value: 2 },
          { title: "1 Star", value: 1 },
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "image",
      title: "Customer Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Optional photo of the customer",
    }),
    defineField({
      name: "projectType",
      title: "Project/Service Type",
      type: "string",
      options: {
        list: ["Industrial Scrap", "Demolition", "Construction Cleanup", "Vehicle Recycling", "Electronic Waste", "Other"],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City/State where project was completed",
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
      description: "Display prominently on homepage",
    }),
    defineField({
      name: "verified",
      title: "Verified Customer",
      type: "boolean",
      initialValue: true,
      description: "Customer has been verified",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      company: "company",
      rating: "rating",
      featured: "featured",
    },
    prepare(selection) {
      const { company, rating, featured } = selection;
      const stars = "⭐".repeat(rating);
      return Object.assign({}, selection, {
        subtitle: `${company} • ${stars}${featured ? " • Featured" : ""}`,
      });
    },
  },
});

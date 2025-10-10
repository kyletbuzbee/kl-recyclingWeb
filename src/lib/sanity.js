import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

// Query helpers
export async function getBlogs() {
  return sanityClient.fetch(`*[_type == "blog"] | order(publishedAt desc){
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    seoTitle,
    seoDescription
  }`);
}

export async function getBlogBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    body,
    excerpt,
    seoTitle,
    seoDescription
  }`,
    { slug },
  );
}

export async function getCareers() {
  return sanityClient.fetch(`*[_type == "career" && isActive == true] | order(postedAt desc){
    _id,
    title,
    slug,
    location,
    employmentType,
    department,
    description,
    requirements,
    benefits,
    salaryRange,
    contactEmail,
    applicationDeadline,
    isActive,
    postedAt
  }`);
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(publishedAt desc){
    _id,
    name,
    company,
    role,
    content,
    rating,
    image,
    projectType,
    location,
    featured,
    verified,
    publishedAt
  }`);
}

export async function getFeaturedTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial" && featured == true] | order(publishedAt desc)`);
}

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "../schemas";

export default defineConfig({
  name: "default",
  title: "K&L Recycling CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});

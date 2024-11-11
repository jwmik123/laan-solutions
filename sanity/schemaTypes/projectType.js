import { defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "streetname",
      title: "Street Name",
      type: "string",
    },
    {
      name: "postalcode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "collaborators",
      title: "Collaborators",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});

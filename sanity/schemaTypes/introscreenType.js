import { defineType } from "sanity";

export default defineType({
  name: "introscreen",
  title: "Introscreen",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
});

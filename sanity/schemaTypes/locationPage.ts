import { defineType, defineField } from "sanity";

export default defineType({
    name: "locationpage",
    title: "Location Page",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Location Name",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        }),
        defineField({
            name: "established",
            title: "Established Year",
            type: "string",
        }),
        defineField({
            name: "heroVideoUrl",
            title: "Hero Video URL",
            type: "url",
        }),
        defineField({
            name: "logo",
            title: "Location Logo",
            type: "image",
        }),
        defineField({
            name: "historyTitle",
            title: "History Title",
            type: "string",
            initialValue: "HISTORY",
        }),
        defineField({
            name: "historyDescription",
            title: "History Description",
            type: "text",
        }),

    ],
});
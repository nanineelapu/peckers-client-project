import { defineType, defineField } from "sanity";

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "price", type: "number" }),
        defineField({ name: "description", type: "text" }),
        defineField({ name: "available", type: "boolean" }),
        defineField({
            name: "category",
            type: "reference",
            to: [{ type: "category" }],
        }),
        defineField({ name: "image", type: "image" }),
    ],
});
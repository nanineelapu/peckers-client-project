import { defineType, defineField } from "sanity";

export default defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "clickCollectUrl",
            title: "Click & Collect URL",
            type: "url",
        }),
        defineField({
            name: "deliveryUrl",
            title: "Delivery URL",
            type: "url",
        }),
    ],
});
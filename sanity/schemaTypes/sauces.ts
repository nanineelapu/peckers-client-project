import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'sauce',
    title: 'Sauce',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),

        defineField({
            name: 'descLine1',
            title: 'Description Line 1',
            type: 'string'
        }),

        defineField({
            name: 'descLine2',
            title: 'Description Line 2',
            type: 'string'
        }),

        defineField({
            name: 'descLine3',
            title: 'Description Line 3',
            type: 'string'
        }),

        defineField({
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true }
        }),

        defineField({
            name: 'sauceImage',
            title: 'Sauce Image',
            type: 'image',
            options: { hotspot: true }
        })
    ]
})
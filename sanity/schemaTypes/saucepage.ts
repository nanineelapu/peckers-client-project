import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'saucePage',
    title: 'Sauce Page',
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
            name: 'cal',
            title: 'Calories',
            type: 'string'
        }),
        defineField({
            name: 'protein',
            title: 'Protein (g)',
            type: 'string'
        }),
        defineField({
            name: 'carbs',
            title: 'Carbs (g)',
            type: 'string'
        }),
        defineField({
            name: 'fat',
            title: 'Fat (g)',
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
        }),
        defineField({
            name: 'imageScaleBoost',
            title: 'Image Scale Boost',
            type: 'number',
            description: 'Override the default scale for the bottle/bowl image. (e.g., 1.5, 1.8)',
        }),
        defineField({
            name: 'imageYOffset',
            title: 'Image Y Offset (vw)',
            type: 'number',
            description: 'Vertical offset in vw to nudge the image up/down. Negative moves it up. (e.g., -2, 5)',
        })
    ]
})

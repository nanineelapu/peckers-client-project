export default {
    name: 'crewPage',
    title: 'Crew Page',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'crewMembers',
            title: 'Crew Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Member/Team Label',
                            type: 'string',
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
}

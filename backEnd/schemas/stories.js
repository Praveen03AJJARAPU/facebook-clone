export default {
    name: 'stories',
    title: 'Stories',
    type: 'document',
    fields: [
        {
            name: 'message',
            title: 'Message',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },      
    ],
    
}
export default {
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [
        {
            name: 'message',
            title: 'Message',
            type: 'string',
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
        {
            name: 'likes',
            title: 'Likes',
            type: 'number',
        },
        
    ],
    initialValue: {        
        likes: 0,
    }
}
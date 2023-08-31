export default {
    name: 'post',
    title: 'Post',
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
            name: 'userId',
            title: 'UserId',
            type: 'string',
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
            initialValue: 0,
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comments'}]
        },
    ],
    
}
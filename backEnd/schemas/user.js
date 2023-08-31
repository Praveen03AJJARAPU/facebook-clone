export default {
    name: 'user',
    title: 'User',
    type: 'document',
    initialValue: () => ({
        likes: 0,
        friends: 0,
    }),
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'  
        },
        {
            name: 'id',
            title: 'Id',
            type: 'string' 
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'number',
            initialValue: 0,
        },
        {
            name: 'friends',
            title: 'Friends',
            type: 'number',
            initialValue: 0,
        },
        {
            name: 'stories',
            title: 'Stories',
            type: 'array',
            of: [{type: 'stories'}]
        },
        
    ],
    initialValue: {
        likes: 0,
        friends: 0,
    }
}
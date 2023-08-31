export const postQuery = ( id) => {
    const query = `*[_type == 'post' &&  _id == '${id}' ]{
        message,_id,_createdAt,
        image {
            asset -> {
                url
            }
        }, 
        postedBy -> {
            _id,
            userName,
            image,
        },
        comments[] {
            message,
            _key,
            postedBy -> {
                _id,
                userName,
                image {
                    asset -> {
                        url
                    }
                },
            }
        },

    }`
    return query;
}
export const searchQuery = (name) => {
    const query = `*[_type == 'user' &&  userName match '${name}' ]`
    return query;
}

// export const storyQuery = () => {
//     const query = 
//     return query;
// }

export const profilePostsQuery = (userId) => {
    const query = `*[_type == 'post' && postedBy -> _id == '${userId}' ]{
        message,_id,_createdAt,
        image {
            asset -> {
                url
            }
        }, 
        postedBy -> {
            _id,
            userName,
            image,
        },
        comments[] {
            message,
            _key,
            postedBy -> {
                _id,
                userName,
                image {
                    asset -> {
                        url
                    }
                },
            }
        },

    }`
    return query;
}

export const storyQuery = (userId) => { 
    
    const query = `*[_type == 'user' && _id == '${userId}' ]{
    stories[] {
     message,color,_key,
        image  {
         asset -> {
           url
         }
        } ,
           postedBy -> {
               _id,
               userName,
               image 
           }
    }
   }`
   return query;
}
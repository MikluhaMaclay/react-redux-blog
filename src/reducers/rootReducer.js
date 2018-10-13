const initState = {
    posts: [
        {
            id: '1',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, corrupti?',
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa, facilis incidunt non reprehenderit voluptatem. Excepturi voluptate iste sequi illo voluptates officiis libero, non, magnam, repudiandae consectetur dolor inventore quisquam dolore error. Possimus repellat reiciendis tempora exercitationem, quaerat eos? Aliquam voluptatibus reiciendis suscipit nihil ratione officiis tenetur explicabo veritatis molestiae?"
        },
        {
            id:'2',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, corrupti?',
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa, facilis incidunt non reprehenderit voluptatem. Excepturi voluptate iste sequi illo voluptates officiis libero, non, magnam, repudiandae consectetur dolor inventore quisquam dolore error. Possimus repellat reiciendis tempora exercitationem, quaerat eos? Aliquam voluptatibus reiciendis suscipit nihil ratione officiis tenetur explicabo veritatis molestiae?"
        },
        {
            id:'3',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, corrupti?',
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa, facilis incidunt non reprehenderit voluptatem. Excepturi voluptate iste sequi illo voluptates officiis libero, non, magnam, repudiandae consectetur dolor inventore quisquam dolore error. Possimus repellat reiciendis tempora exercitationem, quaerat eos? Aliquam voluptatibus reiciendis suscipit nihil ratione officiis tenetur explicabo veritatis molestiae?"
        },
        {
            id:'4',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, corrupti?',
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa, facilis incidunt non reprehenderit voluptatem. Excepturi voluptate iste sequi illo voluptates officiis libero, non, magnam, repudiandae consectetur dolor inventore quisquam dolore error. Possimus repellat reiciendis tempora exercitationem, quaerat eos? Aliquam voluptatibus reiciendis suscipit nihil ratione officiis tenetur explicabo veritatis molestiae?"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        console.log(action)
        const newPosts = state.posts.filter(post => {
            return post.id !== action.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}
export default rootReducer


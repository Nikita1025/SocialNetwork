import {addPostAC, deletePostAC, initialStateType, profileReducer} from "./profile-reducer";

let initialState:initialStateType

beforeEach(()=>{
        initialState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "Its, my first post", likesCount: 11}
        ],
        profile: {
            aboutMe: "",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: "",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "",
            fullName: "",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            },
        },
        status: ""
    }
})

test('new post should be added', ()=>{

    let action = addPostAC('New Title')
    let newState= profileReducer(initialState,action)

    expect(newState.posts.length).toBe(3)
})
test('new message should be added', ()=>{

    let action = addPostAC('New Title')
    let newState= profileReducer(initialState,action)

    expect(newState.posts[2].message).toBe('New Title')
})
test('post should be delete', ()=>{
    let action = deletePostAC(2)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(1)
})

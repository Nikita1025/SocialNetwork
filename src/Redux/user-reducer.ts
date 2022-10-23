import {ActionsTypes, PostsType} from "./store";


export let initialState = {
    users: [
        {id: 1, photoURL:'https://cdn-icons-png.flaticon.com/512/21/21104.png',
            followed: false, fullName: "Dymich", status: "Boss", location:{city:"Minsk", country: "Belarus"} },
        {id: 2, photoURL:'https://cdn-icons-png.flaticon.com/512/21/21104.png',
            followed: false, fullName: "Nikita", status: "Front-end Dev", location:{city:"Minsk", country: "Belarus"} },
        {id: 3, photoURL:'https://cdn-icons-png.flaticon.com/512/21/21104.png',
            followed: true, fullName: "Ksenya", status: "Student", location:{city:"Moscow", country: "Russia"} },
        {id: 4, photoURL:'https://cdn-icons-png.flaticon.com/512/21/21104.png',
            followed: true, fullName: "Zahar", status: "Full stack dev", location:{city:"Posdny", country: "Poland "} },

    ]
}

export const usersReducer = (state= initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':{
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?{...u, followed: true } : u)
            }
        }
        case 'UNFOLLOW':{
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?{...u, followed: false } : u)
            }
        }
        // case 'SET_USERS':{
        //     return {
        //     ...state, users: [...state.users, ...action.users]
        //     }
        // }
        default:
            return state
    }
}
type ActionType = followACType | unfollowACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
//type setUsersACType= ReturnType<typeof setUsersAC>

export const followAC =(userID: number)=>{
    return{
        type: 'FOLLOW',
        userId: userID
    }
}
export const unfollowAC =(userID: number)=>{
    return{
        type: 'UNFOLLOW',
        userId: userID
    }
}

// export const setUsersAC =(users: Array<usersType>)=>{
//     return{
//         type: 'SET_USERS',
//         users: users
//     }
// }
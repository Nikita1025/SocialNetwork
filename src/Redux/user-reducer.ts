import {usersType} from "../components/Users/UsersContainer";

type UsersInitialStateType = {
    users: usersType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

export let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: ActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET_USERS': {
            return {
                ...state, users: action.users
            }
        }
        case 'SET_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_COUNT":{
            return {...state, totalCount: action.totalCount}
        }
        default:
            return state
    }
}
type ActionType = followACType | unfollowACType | setUsersACType | setPageACType |setTotalCountACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setPageACType = ReturnType<typeof setPageAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userId: userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userID
    } as const
}

export const setUsersAC = (users: Array<usersType>) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}
export const setPageAC = (currentPage: number) => {
    return {
        type: 'SET_PAGE',
        currentPage
    } as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    } as const
}
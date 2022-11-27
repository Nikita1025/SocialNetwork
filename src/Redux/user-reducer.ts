import {usersType} from "../components/Users/UsersContainer";
export type Arr= {

}
type UsersInitialStateType = {
    users: usersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Arr[]

}

export let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case "SET_TOTAL_COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case 'IS_FETCHING':{
            return {...state, isFetching: action.isFetching }
        }
        case "FOLLOWING_IN_PROGRESS":
            return {...state, followingInProgress:
                    action.isFetching
                        ?[...state.followingInProgress, action.userID]
                        : state.followingInProgress.filter(id=> id !== action.userID)}
        default:
            return state
    }
}
type ActionType = followACType | unfollowACType | setUsersACType | setPageACType | setTotalCountACType| setIsFetchingACType | followingInProgressType
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type setPageACType = ReturnType<typeof setPage>
type setTotalCountACType = ReturnType<typeof setTotalCount>
type setIsFetchingACType =ReturnType<typeof setIsFetching>
type followingInProgressType=ReturnType<typeof followingInProgressAC>
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userId: userID
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userID
    } as const
}

export const setUsers = (users: Array<usersType>) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}
export const setPage= (currentPage: number) => {
    return {
        type: 'SET_PAGE',
        currentPage
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'IS_FETCHING',
        isFetching
    } as const
}
export const followingInProgressAC=(isFetching: boolean, userID: number)=>{
    return{
        type:'FOLLOWING_IN_PROGRESS',
        isFetching, userID
    } as const
}
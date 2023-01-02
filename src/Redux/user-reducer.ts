import {usersType} from "../components/Users/UsersContainer";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";
import {ActionsTypes} from "./store";


export let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionTypeUser): UsersInitialStateType => {
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
        case 'IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userID]
                        : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

//actions
export const acceptFollow = (userID: number) => ({type: 'FOLLOW', userId: userID} as const)
export const acceptUnfollow = (userID: number) => ({type: 'UNFOLLOW', userId: userID} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET_USERS', users} as const)
export const setPage = (currentPage: number) => ({type: 'SET_PAGE', currentPage} as const)
export const setTotalCount = (totalCount: number) => ({type: 'SET_TOTAL_COUNT', totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'IS_FETCHING', isFetching} as const)
export const followingInProgressAC = (isFetching: boolean, userID: number) => ({
    type: 'FOLLOWING_IN_PROGRESS',
    isFetching,
    userID
} as const)

//thunks
export const getUsersThunkCreator = (currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setIsFetching(true))
        dispatch(setPage(currentPage))
        const res = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(res.items))
        dispatch(setTotalCount(res.totalCount))
    }
export const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, AC: any) => {
    dispatch(followingInProgressAC(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(AC(userId))
    }
    dispatch(followingInProgressAC(false, userId))
}
export const follow = (userId: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        await followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), acceptFollow)
    }

export const unfollow = (userId: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        await followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), acceptUnfollow)
    }

//types
export type ActionTypeUser =
    ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof followingInProgressAC>
export type Arr = {}
type UsersInitialStateType = {
    users: usersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Arr[]
}
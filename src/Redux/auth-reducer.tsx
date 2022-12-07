import {Dispatch} from "redux";
import {userAPI} from "../api/api";
import {acceptUnfollow, followingInProgressAC} from "./user-reducer";

export let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    password: null
}
export type AuthInitialStateType = {
    id: null
    email: null
    login: null
    isAuth: boolean
}
export const authReducer = (state = initialState, action: ActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        case "LOGIN-ME":
            return {...state, }
        default:
            return state
    }
}
type ActionsTypes = SetUserDataACType | LoginMeACType

type SetUserDataACType = ReturnType<typeof SetUserDataAC>
type LoginMeACType= ReturnType<typeof LoginMeAC>
export const SetUserDataAC = (id: null, email: null, login: null) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}
export const LoginMeAC = (email:string, password:string)=>{
    return{
        type: 'LOGIN-ME',
        email, password
    } as const
}
export const header = () => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        userAPI.header()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(SetUserDataAC(id, email, login))
                }
            })
    }
}
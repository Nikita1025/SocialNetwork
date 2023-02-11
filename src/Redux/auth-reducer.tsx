import {Dispatch} from "redux";
import {loginAPI, securityAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ActionsTypes} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux-store";

export let initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null as null| string
}
type initialStateType = typeof initialState
export const authReducer = (state = initialState, action: ActionsTypesAuth): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
        case "GET-CAPTCHA":
            return {...state, ...action.data}
        default:
            return state
    }
}
//action
export const SetUserDataAC = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}
export const getCaptchaUrlAC=(url: string)=>({type:"GET-CAPTCHA", data:{url} } as const)
//thunks
export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let res = await userAPI.header()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(SetUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: ThunkDispatch<RootState, void, ActionsTypes>) => {
        const res = await loginAPI.login(email, password, rememberMe,captcha)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())}
        else {
            if(res.data.resultCode===10){
                dispatch(getCaptchaUrl())
            }
            let message = res.data.messages.length > 0
                ? res.data.messages[0]
                : "Some error"
            stopSubmit('login', {_error: message})
        }
    }

export const logout = () =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        const res = await loginAPI.logout()
        if (res.data.resultCode === 0) {
            return  dispatch(SetUserDataAC('', '', '', false))
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch: Dispatch) => {
        const res = await securityAPI.getCaptchaURL()
        const captcha= res.data.url
        dispatch(getCaptchaUrlAC(captcha))
    }
//types
export type ActionsTypesAuth = ReturnType<typeof SetUserDataAC>| ReturnType<typeof getCaptchaUrlAC>

export type AuthInitialStateType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}
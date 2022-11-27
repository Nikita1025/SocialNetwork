
export let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
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
        default:
            return state
    }
}
type ActionsTypes=SetUserDataACType

type SetUserDataACType = ReturnType<typeof SetUserDataAC>
export const SetUserDataAC = (id: null, email: null, login: null) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    }as const
}
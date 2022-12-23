import {ActionsTypes} from "./store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux-store";

export let initialState = {
    initialized: false
}
export type AuthInitialStateType = {
    initialized: boolean
}
export const appReducer = (state = initialState, action: ActionsTypesApp): AuthInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}
export type ActionsTypesApp = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

export const initializeApp = () => (dispatch: ThunkDispatch<RootState, void, ActionsTypes>) => {
     dispatch(getAuthUserData())
        .then(()=>{
            dispatch(initializedSuccess())
        })

}


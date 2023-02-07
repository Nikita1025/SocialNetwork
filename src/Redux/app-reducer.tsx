import {ActionsTypes} from "./store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux-store";

export let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypesApp): AuthInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

//actions
export const initializedSuccess = () => ({type: 'SET-INITIALIZED',} as const)

//thunks
export const initializeApp = () =>
    async (dispatch: ThunkDispatch<RootState, void, ActionsTypes>) => {
        const res = await dispatch(getAuthUserData())
        console.log(res)
        dispatch(initializedSuccess())

    }


//types
export type ActionsTypesApp = ReturnType<typeof initializedSuccess>
export type AuthInitialStateType = {
    initialized: boolean
}
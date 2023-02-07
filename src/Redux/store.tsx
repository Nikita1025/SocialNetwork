import {ActionTypesProfile} from "./profile-reducer";
import {ActionTypeDialog} from "./dialogs-reducer";
import {ActionTypeUser} from "./user-reducer";
import {ActionsTypesAuth} from "./auth-reducer";
import {ActionsTypesApp} from "./app-reducer";


export type ActionsTypes = ActionTypeDialog
    | ActionTypesProfile
    | ActionTypeUser
    | ActionsTypesAuth
    | ActionsTypesApp

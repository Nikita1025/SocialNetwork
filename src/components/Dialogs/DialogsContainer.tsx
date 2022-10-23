import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {LibStoreType, RootState} from "../../Redux/redux-store";
import {MessagesPageType} from "../../Redux/dialogs-reducer";
import {newMessageBodyAC, SandMessageAC} from "../../Redux/store";
import {Dispatch} from "redux";


type mapStateToPropsType={
    MessagesPage:MessagesPageType
}
type mapDispatchToProps={
    newMessageBodyAC:(body: string)=>void
    SandMessage:()=>void
}
export type DialogsType = mapStateToPropsType & mapDispatchToProps
let mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        MessagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps=> {
    return {
        newMessageBodyAC: (body: string) => {
            dispatch(newMessageBodyAC(body))
        },
        SandMessage: () => {
            dispatch(SandMessageAC())
        }

    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {MessagesPageType} from "../../Redux/dialogs-reducer";
import {SandMessageAC} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import {HocComponent} from "../../HOC/HocComponent";


type mapStateToPropsType = {
    MessagesPage: MessagesPageType
    isAuth: boolean
}
type mapDispatchToProps = {
    SandMessage: (newMessageBody:string) => void
}
export type DialogsType = mapStateToPropsType & mapDispatchToProps
let mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        MessagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        SandMessage: (newMessageBody:string) => {
            dispatch(SandMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
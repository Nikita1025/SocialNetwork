import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {MessagesPageType} from "../../Redux/dialogs-reducer";
import {newMessageBodyAC, SandMessageAC} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import {HocComponent} from "../../HOC/HocComponent";


type mapStateToPropsType = {
    MessagesPage: MessagesPageType
    isAuth: boolean
}
type mapDispatchToProps = {
    newMessageBodyAC: (body: string) => void
    SandMessage: () => void
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
        newMessageBodyAC: (body: string) => {
            dispatch(newMessageBodyAC(body))
        },
        SandMessage: () => {
            dispatch(SandMessageAC())
        }

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
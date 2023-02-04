import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import { logout} from "../../Redux/auth-reducer";



type MapDispatchToPropsType = {
    logout: ()=>void
}
type MapStateToProps = {
    isAuth: boolean
    login: string
    ava: string
}
export type HeaderContainerType = MapDispatchToPropsType & MapStateToProps
const HeaderContainer = (props: HeaderContainerType) => {
    return <Header isAuth={props.isAuth} login={props.login} logout={props.logout} ava={props.ava}/>
}

const MapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ava: state.profilePage.profile.photos.small
})
export default connect(MapStateToProps, {logout})(HeaderContainer)

import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {header} from "../../Redux/auth-reducer";


type MapDispatchToPropsType = {
    header: () => void
}
type MapStateToProps = {
    isAuth: boolean
    login: null
}
type HeaderContainerType = MapDispatchToPropsType & MapStateToProps
const HeaderContainer = (props: HeaderContainerType) => {
    props.header()
    return <Header isAuth={props.isAuth} login={props.login}/>
}

const MapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(MapStateToProps, {header})(HeaderContainer)

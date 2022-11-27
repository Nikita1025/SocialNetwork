import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {SetUserDataAC} from "../../Redux/auth-reducer";

type MapDispatchToPropsType = {
    SetUserDataAC: (id: null, email: null, login: null) => void
}
type MapStateToProps = {
    isAuth: boolean
    login: null
}
type HeaderContainerType = MapDispatchToPropsType & MapStateToProps
const HeaderContainer = (props: HeaderContainerType) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                props.SetUserDataAC(id, email, login)
            }
        })

    return <Header isAuth={props.isAuth} login={props.login}/>
}

const MapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(MapStateToProps, {SetUserDataAC})(HeaderContainer)

import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";
import {Header} from "./Header";


type MapDispatchToPropsType = {
    logout: () => void
    getAuthUserData: () => void
}
type MapStateToProps = {
    isAuth: boolean
    login: string
    ava: string
}
export type HeaderContainerType = MapDispatchToPropsType & MapStateToProps

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const MapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ava: state.profilePage.profile.photos.small
})
export default connect(MapStateToProps, {getAuthUserData, logout})(HeaderContainer)

import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileInitialStateType, ProfileThunk} from "../../Redux/profile-reducer";
import {RootState} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
export type  CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
const ProfileContainer = (props: CommonPropsType) => {
    useEffect(() => {
        let userId = +props.match.params.userId
        if(!userId){
            userId = 2
        }
        props.ProfileThunk(userId)
    }, [])
    if(!props.isAuth)  return <Redirect to={'/Login'}/>

    return (
            <Profile {...props} profile={props.profile}/>
    )


}
export type ProfileContainerType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    profile: ProfileInitialStateType
    isAuth: boolean
}
type MapDispatchToProps = {
    ProfileThunk: (userId: number) => void
}
let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let witchRoutC = withRouter(ProfileContainer)
export default connect(mapStateToProps, {ProfileThunk})(witchRoutC)


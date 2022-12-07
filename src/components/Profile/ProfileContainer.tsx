import React, {ComponentType, useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, ProfileInitialStateType, ProfileThunk, updateStatusThunk} from "../../Redux/profile-reducer";
import {RootState} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {HocComponent} from "../../HOC/HocComponent";
import {compose} from "redux";

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
        props.getStatusThunk(userId)

    }, [])

    return (
            <Profile {...props} profile={props.profile} status={props.status}
            updateStatusThunk={props.updateStatusThunk}
            />
    )


}


export type ProfileContainerType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    profile: ProfileInitialStateType
    isAuth: boolean
    status: string
}
type MapDispatchToProps = {
    ProfileThunk: (userId: number) => void
    getStatusThunk:(userId: number)=>void
    updateStatusThunk:(status: string)=>void
}
let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})



export default compose<ComponentType>(
    connect(mapStateToProps, {ProfileThunk,
        getStatusThunk,
        updateStatusThunk}),
    withRouter,
    HocComponent
)(ProfileContainer)
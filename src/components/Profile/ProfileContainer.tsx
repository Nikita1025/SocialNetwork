import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInitialStateType, setUserProfile} from "../../Redux/profile-reducer";
import {RootState} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
export type  CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
const ProfileContainer = (props: CommonPropsType) => {
    useEffect(() => {
        let userID = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userID)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return (
            <Profile {...props} profile={props.profile}/>
    )


}
export type ProfileContainerType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    profile: ProfileInitialStateType
}
type MapDispatchToProps = {
    setUserProfile: (profile: any) => void
}
let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let witchRoutC = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(witchRoutC)


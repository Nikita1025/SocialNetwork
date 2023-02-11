import React, {ComponentType, useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunk,
    ProfileInitialStateType,
    ProfileThunk,
    savePhoto,
    updateStatusThunk
} from "../../Redux/profile-reducer";
import {RootState} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {HocComponent} from "../../HOC/HocComponent";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
export type ProfileContainerType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    profile: ProfileInitialStateType
    isAuth: boolean
    status: string
    authorizedUserId: string
}
type MapDispatchToProps = {
    ProfileThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
    savePhoto: (file: File) => void
}
export type  CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<CommonPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorizedUserId !== null) {
            userId = this.props.authorizedUserId.toString()
            if (!userId) {
                this.props.history.push('login')
            }
        }
        this.props.ProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<CommonPropsType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}


let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})


export default compose<ComponentType>(
    connect(mapStateToProps, {
        ProfileThunk,
        getStatusThunk,
        updateStatusThunk,
        savePhoto
    }),
    withRouter,
    HocComponent
)(ProfileContainer)
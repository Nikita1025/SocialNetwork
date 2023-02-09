import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Mypostcontainer from "./Myposts/Mypostcontainer";
import {CommonPropsType} from "./ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import s from './Profile.module.css'
import Nav from "../Nav/Nav";
import {ProfileInitialStateType} from "../../Redux/profile-reducer";
type PropsType={
    profile: ProfileInitialStateType
    status: string
    isOwner:boolean
    updateStatusThunk:(status: string)=>void
    savePhoto:(file: File)=>void
}
const Profile = (props:PropsType) => {

    return (
        <div >
            {/*<HeaderContainer />*/}
            <div className={s.container}>
                <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                              updateStatusThunk={props.updateStatusThunk} updatePhoto={props.savePhoto}/>
                <Nav/>
                <Mypostcontainer />
            </div>


        </div>

    )
}
export default Profile;
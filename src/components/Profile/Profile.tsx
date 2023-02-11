import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Mypostcontainer from "./Myposts/Mypostcontainer";

import s from './Profile.module.css'
import {ProfileInitialStateType} from "../../Redux/profile-reducer";
import {Nav} from "../Nav/Nav";
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
            <div className={s.container}>
                <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                              updateStatusThunk={props.updateStatusThunk} updatePhoto={props.savePhoto}/>
                <Mypostcontainer />
            </div>


        </div>

    )
}
export default Profile;
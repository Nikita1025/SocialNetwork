import React from 'react';
import Preolader from "../../Comman/Preolader/Preolader";
import {ProfileInitialStateType} from "../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "../Myposts/ProfileStatusWithHooks";
import userPhoto from "../../../image/person.png";
import s from './Profileinfo.module.css'

type ProfileInfoType = {
    profile: ProfileInitialStateType
    status: string
    updateStatusThunk: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preolader/>
    }
    return (
        <div className={s.image}>
            <div className={s.infoContainer}>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar}/>
                <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            </div>
        </div>

    )
}

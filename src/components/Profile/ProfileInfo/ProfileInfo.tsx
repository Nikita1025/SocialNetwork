import React, {ChangeEvent} from 'react';
import Preolader from "../../Comman/Preolader/Preolader";
import {ProfileInitialStateType} from "../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "../Myposts/ProfileStatusWithHooks";
import userPhoto from "../../../image/user.png";
import s from './Profileinfo.module.css'
import IconButton from '@mui/material/IconButton';
import icon from '../../../image/photo.png'

type ProfileInfoType = {
    profile: ProfileInitialStateType
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    updatePhoto: (file: File) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preolader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.image}>
            <div className={s.infoContainer}>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar}/>
                <label htmlFor={'load_avatar'}>
                    <input id={'load_avatar'} className={s.input} type="file" onChange={mainPhotoSelected}/>
                    <IconButton component="span" className={s.icon}>
                        <img src={icon}/>
                    </IconButton>
                </label>


            </div>
            <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}
                                    profile={props.profile}/>
        </div>

    )
}

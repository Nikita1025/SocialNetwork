import React from 'react';
import Preolader from "../../Comman/Preolader/Preolader";
import {ProfileInitialStateType} from "../../../Redux/profile-reducer";
import {ProfileStatus} from "../Myposts/ProfileStatus";
type ProfileInfoType={
   profile: ProfileInitialStateType
    status: string
    updateStatusThunk: (status: string)=>void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preolader/>
    }
    return (
        <div>

            <div>
                <img
                    src='https://abrakadabra.fun/uploads/posts/2022-01/1642519550_17-abrakadabra-fun-p-fon-dlya-prezentatsii-sotsseti-23.jpg'
                    style={{width: "100%"}}
                />
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            </div>
        </div>

    )
}

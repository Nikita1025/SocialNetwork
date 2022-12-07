import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Mypostcontainer from "./Myposts/Mypostcontainer";
import {CommonPropsType} from "./ProfileContainer";


const Profile = (props:CommonPropsType) => {

    return (
        <div>
            <ProfileInfo  profile={props.profile} status={props.status}
                          updateStatusThunk={props.updateStatusThunk}/>
            <Mypostcontainer />

        </div>

    )
}
export default Profile;
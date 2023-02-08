import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Mypostcontainer from "./Myposts/Mypostcontainer";
import {CommonPropsType} from "./ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import s from './Profile.module.css'
import Nav from "../Nav/Nav";

const Profile = (props:CommonPropsType) => {

    return (
        <div >
            {/*<HeaderContainer />*/}
            <div className={s.container}>
                <ProfileInfo  profile={props.profile} status={props.status}
                              updateStatusThunk={props.updateStatusThunk}/>
                <Nav/>
                <Mypostcontainer />
            </div>


        </div>

    )
}
export default Profile;
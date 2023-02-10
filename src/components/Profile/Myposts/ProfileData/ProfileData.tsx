import React from 'react';
import {ProfileInitialStateType} from "../../../../Redux/profile-reducer";
import vk from '../../../../image/vk.png'
import github from '../../../../image/git.png'
import instagram from '../../../../image/instagram.png'
import facebook from '../../../../image/facebook.png'
import twitter from '../../../../image/twitter.png'
import youtube from '../../../../image/youtube.png'
import mainLink from '../../../../image/me.png'
import website from '../../../../image/website.png'
type ProfileDataType = {
    profile: ProfileInitialStateType
}
type SocialsType = {
    vk: string | null
    github: string | null
    instagram: string | null
    facebook: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
const ProfileData = (props: ProfileDataType) => {
    const contacts = Object.entries(props.profile.contacts).filter(([name, address]) => [name, address])
    const socials: SocialsType = {vk, github, instagram, facebook, twitter, website, youtube, mainLink}
    return (
        <div>
            <div>
                <b>Looking for a job:</b>{props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob && (<div>
                    <b>My professional skills</b>{props.profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>About me</b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:{Object.keys(props.profile.contacts).map((el)=>{
                    return<Contact key={el} name={el} address={props.profile.contacts}/>
            })
            }
            </div>
        </div>
    );
};

export default ProfileData;

type ContactType={
    name:string
    address: SocialsType
}
const Contact =(props:ContactType)=>{
    return <><b>{props.name}</b>:{props.address}</>
}
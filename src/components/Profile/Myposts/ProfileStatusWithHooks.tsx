import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './ProfileStatusWithHooks.module.css'
import {ProfileInitialStateType} from "../../../Redux/profile-reducer";
import {TextField} from "@mui/material";
type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
    profile: ProfileInitialStateType
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
     let [editMode, setEditMode] = useState(false )
     let [state, setState] = useState(props.status )

    useEffect(()=>{
        setState(props.status)
    },[props.status])
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setState(e.currentTarget.value)
    }

    const deactivateEditMode=()=>{
         setEditMode(false)
        props.updateStatusThunk(state)
    }
    const activateEditMode=()=>{
         setEditMode(true)
        setState(state)
    }

    return <div className={s.textContainer}>
        <span   className={s.userName}>{props.profile.fullName}</span>
        {!editMode &&
            <div>
                    <span style={{color: 'white'}}
                          className={s.text}
                          onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
        }
        {editMode &&
            <div>
                <TextField id="standard-basic"
                           label='New status'
                           variant="standard"
                           onChange={onChangeHandler}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           value={state}
                           className={s.input}
                />
            </div>}
    </div>
}




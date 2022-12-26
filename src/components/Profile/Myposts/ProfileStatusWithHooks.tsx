import React, {ChangeEvent, useState} from 'react'

type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
     let [editMode, setEditMode] = useState(false )
     let [state, setState] = useState(props.status )


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

    return <div>
        {!editMode &&
            <div>
                    <span style={{color: 'white'}}
                          onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onChangeHandler} onBlur={deactivateEditMode} autoFocus={true} value={state}/>
            </div>}
    </div>
}




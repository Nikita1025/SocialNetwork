import React from 'react';
import s from './../Dialogs.module.css';

type MessageType = {
    message: string
    id: number
    avatar: string
}

export const Message = (props: MessageType) => {
    return <div className={s.messageContainer}>
        <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
        <div className={s.messageBox}>
            <span>{props.message}</span>
        </div>
    </div>
}



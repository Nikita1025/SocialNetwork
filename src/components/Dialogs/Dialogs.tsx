import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsType) => {
    let {MessagesPage, SandMessage, newMessageBodyAC} = props
    let dialogsElements = MessagesPage.dialogs.map((d) => <DialogsItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = MessagesPage.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
    //let newMessageBody = props.dispatch
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        newMessageBodyAC(body)
    }
    let onSendMessageClick = () => {
        SandMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={MessagesPage.newMessageBody}
                                   placeholder='Enter your message'></textarea></div>

                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>


    );
};


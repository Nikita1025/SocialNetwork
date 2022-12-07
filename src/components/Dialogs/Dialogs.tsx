import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";
import {TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsType) => {
    let {MessagesPage, SandMessage, newMessageBodyAC} = props
    let dialogsElements = MessagesPage.dialogs.map((d) => <DialogsItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = MessagesPage.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        newMessageBodyAC(body)
    }
    let onSendMessageClick = () => {
        SandMessage()
    }
    if(!props.isAuth)  return <Redirect to={'/Login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                <div style={{color: "white"}}>{messageElements}</div>
                <div className={s.addContent}>
                    <div>
                        <TextField id="outlined-basic" variant="outlined"
                                   style={{backgroundColor: "#656565", borderRadius: "5px"}}
                                   onChange={onNewMessageChange}
                                   value={MessagesPage.newMessageBody}
                                   placeholder='Enter your message'/>
                    </div>
                    <div>
                        <SendIcon style={{marginLeft: '10px', color: "#f9f9f9"}} onClick={onSendMessageClick}/>
                    </div>
                </div>
            </div>


        </div>
    );
};


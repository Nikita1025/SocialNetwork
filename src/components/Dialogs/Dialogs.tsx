import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";
import {TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormRedux, FormDataType} from "../Comman/FormMessage";

export const Dialogs = (props: DialogsType) => {
    let {MessagesPage, SandMessage} = props
    let dialogsElements = MessagesPage.dialogs.map((d) => <DialogsItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = MessagesPage.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
    let addNewMessage = (values:FormDataType) => {
        SandMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to={'/Login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div style={{color: "white"}}>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>


        </div>
    );
};


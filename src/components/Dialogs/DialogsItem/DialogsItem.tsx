import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogsItemType = {
    name: string
    id: number
}
export const DialogsItem = (props: DialogsItemType) => {
    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink className={s.NavLink}  to={'/dialogs/6' + props.id}>{props.name}</NavLink>
    </div>)}
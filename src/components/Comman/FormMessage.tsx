import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs/Dialogs.module.css";

export type FormDataType = {
    newMessageBody: string
}
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={s.addContent} onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
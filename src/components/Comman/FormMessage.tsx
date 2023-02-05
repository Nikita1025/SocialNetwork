import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs/Dialogs.module.css";
import {Input, Textarea} from "./FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Button from "@mui/material/Button";

export type FormDataType = {
    newMessageBody: string
}
const maxLength50= maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={s.addContent} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required, maxLength50]}
                       name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <Button variant='contained' type='submit' style={{marginLeft:'15px', }}>Send</Button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
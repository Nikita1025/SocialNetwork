import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs/Dialogs.module.css";

export type FormDataType = {
    newPostText: string
}
export const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name={'newPostText'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPost)
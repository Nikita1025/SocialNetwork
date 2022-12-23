import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs/Dialogs.module.css";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "./FormsControls";

export type FormDataType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)
export const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPost)
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./FormProfile.module.css";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "./FormsControls";
import SendIcon from '@mui/icons-material/Send';

const maxLength10 = maxLengthCreator(300)
export const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.container}>
                <div>
                    <Field component={Input} name={'newPostText'}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <SendIcon type={'submit'} className={s.button} onSubmit={props.handleSubmit}>
                        Add post
                    </SendIcon>
                </div>
            </div>
        </form>
    )
}
export const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPost)


export type FormDataType = {
    newPostText: string
}
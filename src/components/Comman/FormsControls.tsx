import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import {TextField} from "@mui/material";

const FormControl = (props: any) => {
    const showError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {showError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <TextField style={{minWidth: '550px'}} id="standard-basic" label="New post" variant="outlined" {...input} {...restProps}  />
    </FormControl>
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <TextField style={{minWidth: '550px'}} id="standard-basic" label="New message" variant="outlined" {...input} {...restProps}  />
    </FormControl>
}
export const CreateField = (placeholder: string | null, name: string, validate: ((value: string) => (undefined | string))[], component: any,props={},text='') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validate}
               {...props}
        />{text}
    </div>
)
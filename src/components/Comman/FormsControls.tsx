import React from 'react'
import s from './FormsControls.module.css'

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
    const {input, meta, child, ...restProps}=props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps}=props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}
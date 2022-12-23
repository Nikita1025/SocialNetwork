import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/Comman/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {RootState} from "../Redux/redux-store";
import {Redirect} from "react-router-dom";
import s from '../components/Comman/FormsControls.module.css'
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToProps = {
    isAuth: boolean
}
type LoginType = mapDispatchToProps & mapStateToProps
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div style={{color: 'white'}}>
                <Field component={Input}
                       name={'remember me'}
                       type={'checkbox'}

                /> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                ERROR
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1 style={{color: 'white'}}>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state: RootState): mapStateToProps => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CreateField, Input} from "../components/Comman/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {RootState} from "../Redux/redux-store";
import s from '../components/Comman/FormsControls.module.css'
import {Redirect} from "react-router-dom";
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
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
                {CreateField('email','email',[required],Input)}
                {CreateField('Password','password',[required],Input, )}
            <div style={{color: 'white'}}>
                {CreateField(null,'remember me', [],Input,{type:'checkbox'}, 'remember me')}
            </div>
            { error && <div className={s.formSummaryError}>
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
const Login:React.FC<LoginType> = ({isAuth,login}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
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
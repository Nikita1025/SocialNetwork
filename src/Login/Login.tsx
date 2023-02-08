import React, {useState} from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import {Checkbox, FormControlLabel, FormGroup, IconButton, LinearProgress} from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {Redirect} from "react-router-dom";
import {login} from "../Redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/redux-store";
import s from './Login.module.css'
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const Login = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector<RootState>(state => state.auth.isAuth)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(show => !show)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Minimum number of characters 8')
            .required('Password is required'),
    })

    const {touched, values, errors, handleSubmit, getFieldProps} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(login(values.email, values.password, values.rememberMe))
        },
    })

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={s.container}>
            <h1 className={s.h1}>Social Network</h1>

        <Paper>
            <FormControl>
                <form onSubmit={handleSubmit}>
                    <FormGroup className={s.containerLogin}>
                        <h2 className={s.h2}>Sign in</h2>
                        <p className={s.p}>You are now logged out.</p>
                        <FormControl sx={{m: 1}} variant="standard">
                            <InputLabel>Email</InputLabel>
                            <Input {...getFieldProps('email')} />
                            {touched.email && errors.email && (
                                <div style={{color:'red'}}>{errors.email}</div>
                            )}
                        </FormControl>

                        <FormControl sx={{m: 1}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                {...getFieldProps('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {touched.password && errors.password && (
                                <div style={{color:'red'}}>{errors.password}</div>
                            )}
                        </FormControl>
                        <FormControl sx={{m: 1}} variant="standard">
                            <FormControlLabel
                                label={'Remember me'}
                                control={
                                    <Checkbox {...getFieldProps('rememberMe')} checked={values.rememberMe}/>
                                }
                            />
                        </FormControl>
                        <Button type={'submit'} variant={'contained'} className={s.button}>
                            Sign In
                        </Button>
                    </FormGroup>
                </form>

            </FormControl>
        </Paper>
        </div>
    )
}


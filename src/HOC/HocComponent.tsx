import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../Redux/redux-store";
type MapStateToPropsType ={
    isAuth: boolean
}
const mapStateToProps =(state:RootState):MapStateToPropsType=>{
    return{
        isAuth: state.auth.isAuth
    }
}
export function HocComponent  <T extends object>(Component:ComponentType<T>)  {
    function RedirectComponent (props:MapStateToPropsType):JSX.Element{
        let {isAuth, ...restProps}= props
        console.log(isAuth)
        if(!isAuth)  return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
};
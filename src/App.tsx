import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";





export const App  = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><Login/>}/>
                </div>

            </div>
        </BrowserRouter>
    );


}

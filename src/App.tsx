import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


export const App  = () => {
    // const state=props.store.getState()
//let message= state.profilePage.posts[0].message;
//let message2= state.profilePage.posts[1].message;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    );


}

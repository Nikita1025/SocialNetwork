import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootState} from "./Redux/redux-store";
import Preolader from "./components/Comman/Preolader/Preolader";

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToProps = {
    initializeApp: () => void
}
type AppType = mapStateToPropsType & mapDispatchToProps
const mapStateToProps = (state: RootState):mapStateToPropsType => ({
    initialized: state.app.initialized
})

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preolader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>

                    <div className='app-wrapper-content'>

                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>

                </div>
            </BrowserRouter>
        );


    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
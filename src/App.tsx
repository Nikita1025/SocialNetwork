import React, {Suspense} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootState, store} from "./Redux/redux-store";
import Preolader from "./components/Comman/Preolader/Preolader";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToProps = {
    initializeApp: () => void
}
type AppType = mapStateToPropsType & mapDispatchToProps
const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    initialized: state.app.initialized
})

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preolader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>

                    <div className='app-wrapper-content'>

                        <Route path='/dialogs' render={() => {
                            return <Suspense fallback={<div>...Loading</div>}>
                                <DialogsContainer/>
                            </Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <Suspense fallback={<div>...Loading</div>}>
                                <ProfileContainer/>
                            </Suspense>
                        }}/>
                        <Route path='/users' render={() => {
                            return <Suspense fallback={<div>...Loading</div>}>
                                <UsersContainer/>
                            </Suspense>
                        }}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>

                </div>
            </BrowserRouter>
        );


    }
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)
(App)


const SamuraiApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiApp

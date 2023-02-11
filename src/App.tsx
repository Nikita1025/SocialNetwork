import React, {Suspense} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootState, store} from "./Redux/redux-store";
import {Login} from './Login/Login';
import CircularIndeterminate from "./components/Comman/Preolader/Preolader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LinearProgress from '@mui/material/LinearProgress';

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
            return <CircularIndeterminate/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/login'  exact={true} render={() => <Login/>}/>

                    <Route path='/dialogs'  exact={true} render={() => {
                        return <Suspense fallback={<LinearProgress />}>
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/'  exact={true} render={() => <Suspense fallback={<LinearProgress />}>
                        <ProfileContainer/>
                    </Suspense>}/>
                    <Route path='/profile/:userId?' exact={true} render={() => {
                        return <Suspense fallback={<LinearProgress />}>
                            <ProfileContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/users'   exact={true} render={() => {
                        return <Suspense fallback={<LinearProgress />}>
                            <UsersContainer/>
                        </Suspense>
                    }}/>


                </div>

            </div>
        );


    }
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)
(App)


const SamuraiApp = () => {
    return <AppContainer/>

}
export default SamuraiApp

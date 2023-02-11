import SamuraiApp from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter basename={"SocialNetwork"}>
     <Provider store={store}>
        <SamuraiApp />
     </Provider>
    </BrowserRouter>
);


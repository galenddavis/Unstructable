import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store'

// test imports
import { signup, login, logout } from './util/session_api_util';
// 

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.logout = logout;
    window.signup = signup;
    // 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})


// Left off after just finishing the store. Just about to start the root components and the add the store to the entry file. 
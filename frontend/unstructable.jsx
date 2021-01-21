import React from 'react';
import ReactDOM from 'react-dom';

// test imports
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store'
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
    ReactDOM.render(<h1>Welcome to Full Stack!</h1>, root)
})


// Left off after just finishing the store. Just about to start the root components and the add the store to the entry file. 
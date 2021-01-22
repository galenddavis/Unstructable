import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store'

// test imports
// import { signup, login, logout } from './util/session_api_util';
// 

document.addEventListener('DOMContentLoaded', () => {
    // testing
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    // 

    
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})


// Left off after just finishing the store. Just about to start the root components and the add the store to the entry file. 
import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './sessions/login_form';
import SignupForm from './sessions/signup_form';
import login_form_container from './sessions/login_form_container';
import signup_form_container from './sessions/signup_form_container';
import { Link } from 'react-router-dom';


const App = () => (
    <div>
        <header>
        <h1>Loading Projects....</h1>
        
        </header>
        {/* <LoginForm /> */}
        {/* <SignupForm /> */}


        {/* <Route path="/" component={login_form_container} /> */}
        <Route path="/login" component={login_form_container} />
        <Route path="/signup" component={signup_form_container} />

    </div>
)

export default App;
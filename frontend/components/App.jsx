import React from 'react';
import { Route } from 'react-router-dom';
import login_form_container from './sessions/login_form_container';
import signup_form_container from './sessions/signup_form_container';
import NavBar from './ navbar/nav_bar_container' 
import  { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <NavBar />
        </header>

        {/* <Route exact path="/" component={nav_bar_container} /> */}
        <AuthRoute path="/login" component={login_form_container} />
        <AuthRoute path="/signup" component={signup_form_container} />

    </div>
)

export default App;
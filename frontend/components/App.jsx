import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  { AuthRoute } from '../util/route_util';

import login_form_container from './sessions/login_form_container';
import signup_form_container from './sessions/signup_form_container';
import NavBar from './ navbar/nav_bar_container' 
import Footer from './ navbar/footer'
import Index from './ navbar/index'


const App = () => (
    <section>
        <header>
            <NavBar />
        </header>

        
            <Switch> 
                <Route exact path="/" component={Index} />
                <AuthRoute path="/login" component={login_form_container} />
                <AuthRoute path="/signup" component={signup_form_container} />

            </Switch>
        
        
        <footer>
            <Footer />
        </footer>
    </section>
)

export default App;
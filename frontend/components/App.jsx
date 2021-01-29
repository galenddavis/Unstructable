import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  { AuthRoute, ProtectedRoute } from '../util/route_util';

import login_form_container from './sessions/login_form_container';
import signup_form_container from './sessions/signup_form_container';
import NavBar from './ navbar/nav_bar_container' 
import Footer from './ navbar/footer'
import Index from './ navbar/index'
import project_create from './Projects/create_project_form_container'
import project_splash from './Projects/project-splash'


const App = () => (
    <section>

        <header>
            <NavBar />
        </header>

            <Switch> 
                <Route exact path="/" component={Index} />
                <AuthRoute path="/login" component={login_form_container} />
                <AuthRoute path="/signup" component={signup_form_container} />
                <ProtectedRoute exact path="/create" component={project_splash} />
                <ProtectedRoute exact path="/project/new" component={project_create} />
            </Switch>
        
        <footer>
            <Footer />
        </footer>

    </section>
)

export default App;
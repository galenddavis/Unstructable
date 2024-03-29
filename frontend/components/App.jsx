import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  { AuthRoute, ProtectedRoute } from '../util/route_util';

import login_form_container from './sessions/login_form_container';
import signup_form_container from './sessions/signup_form_container';
import NavBar from './ navbar/nav_bar_container' 
import Footer from './ navbar/footer'
import Index from './ navbar/index_container'
import project_create from './Projects/create_project_form_container'
import project_edit from './Projects/edit_project_form_container'
import step_create from './Steps/create_step_container'
import step_edit from './Steps/edit_step_container'
import project_splash from './Projects/project-splash'
import ProjectShow from './Projects/project_show_container'
import CategoryIndex from './categories/category_index_container'


const App = () => (
    <section>

        <header>
            <NavBar />
        </header>

            <Switch> 
                <Route exact path="/" component={Index} />
                <Route exact path="/index/:category" component={CategoryIndex} />
                <AuthRoute path="/login" component={login_form_container} />
                <AuthRoute path="/signup" component={signup_form_container} />
                <ProtectedRoute exact path="/create" component={project_create} />
                <ProtectedRoute path='/project/edit/:id' component={project_edit} />
                <ProtectedRoute path='/project/step/edit/:id' component={step_edit} />
                <ProtectedRoute path='/project/step/create' component={step_create} />
                <Route exact path='/project/:id' component={ProjectShow}/>
            </Switch>
        
        <footer>
            <Footer />
        </footer>

    </section>
)

export default App;
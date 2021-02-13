
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Navbar from './common/Navbar/index';
import Profile from './profile/containers/index';
const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path='/about' component={About} /> 
                <Route exact path='/contact' component={Contact} /> 
                <Route exact path='/profile' component={Profile} /> 
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

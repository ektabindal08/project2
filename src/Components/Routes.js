
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar/index';

const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/Contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

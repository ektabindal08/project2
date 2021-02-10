
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Navbar from './Navbar/index';
import Login from './Login/index';


const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                 <Route exact path='/Home' component={Home} /> 
                <Route exact path='/About' component={About} /> 
                <Route exact path='/Contact' component={Contact} /> 
                <Route path='/' component={Login} />
               <Route exact path='/Login' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;


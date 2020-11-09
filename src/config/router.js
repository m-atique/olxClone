import React, { Component } from 'react';

import {Router,Switch,Route} from 'react-router-dom'
import history from './history'

// -----------------------------------import compnents
import Auth from '../Components/auth/auth'
import Home from '../Components/Home'
// import Switch from 'react-bootstrap/esm/Switch';


class Approuter extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
               <Route exact path='/' component={Home}/>
                <Route exact path='/auth' component={Auth}/>
                </Switch>
            </Router>
        );
    }
}

export default Approuter;
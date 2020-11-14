import React, { Component } from 'react';

import {Router,Switch,Route} from 'react-router-dom'
import history from './history'

// -----------------------------------import compnents
import Auth from '../Components/auth/auth'
import Post from '../Components/post/post'
import Home from '../Components/Home'
import PostMain from '../Components/PostMain/PostMain'
import selleradd from '../Components/selleradd'
// import Switch from 'react-bootstrap/esm/Switch';


class Approuter extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
               <Route exact path='/' component={Home}/>
                <Route exact path='/auth' component={Auth}/>
                <Route exact path='/Post' component={Post}/>
                <Route exact path='/PostMain' component={PostMain}/>
                <Route exact path='/selleradd' component={selleradd}/>
                </Switch>
            </Router>
        );
    }
}

export default Approuter;
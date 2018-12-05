import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';

import App from './App';
import form from './components/login/form';
import createBrowserHistory from 'history/createBrowserHistory'


class Rout extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <div className="App">
                    
            
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={form} />
                        
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default Rout;

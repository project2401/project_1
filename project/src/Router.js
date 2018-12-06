import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import {Link} from 'react-router-dom';

import App from './App';
import form from './components/login/form';
import createBrowserHistory from 'history/createBrowserHistory'
import Registrations from './components/login/registrations'


class Rout extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <div className="conteiner">
                    <div className="footer"> 
                         
                        <div className="footerTitle">
                            <Link to="/">Post </Link>  
                        </div>
                        <div className="footerTitle">
                            <Link to="/login">Login</Link>  
                        </div>
                        <div className="footerTitle">
                            <Link to="/registrations">Registrations</Link>  
                        </div>
                        
                    </div>                  
            
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={form} />
                        <Route exact path="/registrations" component={Registrations} />
                        
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default Rout;

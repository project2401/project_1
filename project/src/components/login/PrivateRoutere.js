import React from 'react';
import App from './App';
import form from './components/login/form';
import Registrations from './components/login/registrations';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    
  },
  signout(cb) {
    this.isAuthenticated = false
    
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default function AuthExample () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/registrations">Public Page</Link></li>
          <li><Link to="/">Protected Page</Link></li>
        </ul>
        <Route path="/registrations" component={Registrations}/>
        <Route path="/login" component={form}/>
        <PrivateRoute path='/' component={App} />
      </div>
    </Router>
  )
}
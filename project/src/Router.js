import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import App from './App';
import Form from './components/login/Form';
import Registration from './components/login/Registrations'
import {connect} from 'react-redux'
import {isAuth} from './actions/index'



// const PrivateRoutePost = ({ component: App, ...rest }) => {
//     console.log('isLogin11111',isLogin, isLogin === true);
//     const isLogin = localStorage.getItem('token')
//     return(
//         <Route {...rest} render={(props) => {
//             console.log(props);
//             return(
//                 isLogin
//                 ? <App {...props}  /> 
//                 : <Redirect to='/login' />
//             )
//         }} />
//     )
// } 

// const PrivateRouteForm = ({ component: Form, ...rest})=>{
//     const isLogin = localStorage.getItem('token')
//     console.log(isLogin)
//     return(
//         <Route {...rest} render = {(props) => (
//             isLogin
//                 ? <Redirect to ='/home'/>
//                 : <Form {...props}/>
//         )}/>
//     )
// }


class Rout extends Component {
   
componentDidMount(){
    if(localStorage.getItem('token')) {
        this.props.isAuth()
    }
}

    
    render() {
        const isLogin = localStorage.getItem('token')
        // console.log(isLogin)
        
        console.log('from router')
        return (
            <Router >
                <div className="conteiner">
                    <Switch>
                        {isLogin  && (
                            <Switch>
                                <Route  path="/home"  exact component={App} />
                                <Redirect  from='/' to='/home' />
                            </Switch>
                        )}
                        {!isLogin && (
                            <Switch>
                                <Route  path="/login"  exact component={Form} />
                                <Route  path="/registration"  exact component={Registration} />
                                {/* <Route component={Form} /> */}
                                <Redirect  from='/' to='/login' />
                            </Switch>
                        )}
                    </Switch>
                </div>
             </Router>
        );
    }
}

const mapStateToProps = state => {
    return{
        isAuth: state.authenticated.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return{
      isAuth: () => dispatch(isAuth())
    }
  }
export default connect (mapStateToProps, mapDispatchToProps)(Rout);

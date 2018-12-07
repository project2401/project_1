import React, { Component } from 'react';
import Button from '../Button';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import axios from 'axios';
// import {MyContext} from '../MyProvider';
// import MyProvider from '../MyProvider';
export class MyForm extends Component {
  state={
    login:'',
    pass: '',
    email:'',
    token:[],
    isAuthenticated:false
  }
  myClick = (e) => {
    var formData = new FormData();
    formData.append('email',this.state.email); 
    formData.append('password', this.state.pass);
    let  myHeaders = new Headers({
      "Accept": "application/json"
    });
    
    fetch('http://api.year-progress.org/api/sign-in',{
      method:'post',
      body: formData,
      headers:myHeaders
    })
    .then(response => {
      response
          .json()
          .then(resJson => {
            if (!!resJson.access_token){
              localStorage.setItem('token', resJson.access_token) 
              window.location.href = "http://localhost:3000/"
              // isAuthenticated.FunkAuthenticatedTrue
              this.setState({isAuthenticated: true})
            } else {
              localStorage.removeItem('token')
              alert('You are not registred')
              window.location.href = "http://localhost:3000/registrations"
              this.setState({isAuthenticated:false})
            }
        
      }).catch(error => {
        console.log('error', error)
      })  
    })
    .catch(error => {
      console.log('error', error)
    })
  }
    onMyChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
  }
  res = (reg) => {
    console.log(reg.state);
    
  }
  
fun = (theme) =>{
  console.log(theme);
  
}

  render() {
    return (
      <div className="Form">
        <div className="FormDiv">
            <p>Email:</p>
            <input placeholder="Enter you email" type="email" 
            onChange={this.onMyChange} name="email"/>
        </div>
        <div className="FormDiv">
            <p>Password:</p>
            <input placeholder="Enter password" type="password" 
            onChange={this.onMyChange} name="pass"/>
        </div>
        

        <input type="button" onClick={this.myClick} value="Registrations" />
      </div>
  )
              
    
  }
}



export default MyForm
          
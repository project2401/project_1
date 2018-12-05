import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class MyForm extends Component {
  state={
    login:'',
    pass: '',
    email:'',
    token:[]
  }
  myClick = (e) => {
    var formData = new FormData();
      formData.append('name', this.state.login);
      formData.append('email', this.state.email);
      formData.append('password', this.state.pass);
      let  myHeaders = new Headers({
        "Accept": "application/json"
      });
      if(e.target.value === "Sign-in"){
      fetch('http://api.year-progress.org/api/sign-in',{
        method:'post',
        body: formData,
        headers:myHeaders
      })
      .then(response => response.json() 
        .then(token => localStorage.setItem('token', JSON.stringify(token.access_token))
        )
        .catch(function (error) {
          console.log(error)
      }))  
      }else{
      fetch('http://api.year-progress.org/api/sign-up',{
        method:'post',
        body: formData,
        headers:myHeaders
      })
      .then(response => response.json() 
        .then(token => console.log(token)
        
        )
        .catch(function (error) {
          console.log(error)
      }))   
      }
    }

    onMyChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
        <div className="Form">
          <div className="FormDiv">
              <p className="FormTItle">Login:</p>
              <input placeholder="Enter login" type="text" 
              onChange={this.onMyChange} name="login"/>
          </div>
          <div className="FormDiv">
              <p>Password:</p>
              <input placeholder="Enter password" type="pass" 
              onChange={this.onMyChange} name="pass"/>
          </div>
          <div className="FormDiv">
              <p>Email:</p>
              <input placeholder="Enter you email" type="email" 
              onChange={this.onMyChange} name="email"/>
          </div>

          <input type="button" onClick={this.myClick} value="Registrations" />
          <input type="button" onClick={this.myClick} value="Sign-in" />
        </div>
    )
  }
}



export default MyForm

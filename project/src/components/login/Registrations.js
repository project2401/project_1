import React, { Component } from 'react';

export class Registrations extends Component {
  state={
    login:'',
    pass: '',
    email:'',
    token:[],
    isRegistration:false
  }
  myClick = (e) => {
    var formData = new FormData();
      formData.append('email',this.state.email); 
      formData.append('password', this.state.pass);
      formData.append('name', this.state.login);
      let  myHeaders = new Headers({
        "Accept": "application/json"
      });
    fetch('http://api.year-progress.org/api/sign-up',{
        method:'post',
        body: formData,
        headers:myHeaders
      })
      .then(response => response.json() 
        .then(token => {
          if(token.message === 'Successfully created user!'){
            this.props.history.push('/home')
            
          }
    }
        )
        .catch(function (error) {
          console.log(error)
      }))   
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
              <input placeholder="Enter password" type="password" 
              onChange={this.onMyChange} name="pass"/>
          </div>
          <div className="FormDiv">
              <p>Email:</p>
              <input placeholder="Enter you email" type="email" 
              onChange={this.onMyChange} name="email"/>
          </div>
          <input type="button" onClick={this.myClick} value="Registrations" />
        </div>
    )
  }
}



export default Registrations
          
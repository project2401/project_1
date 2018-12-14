import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


export class MyForm extends Component {
  state={
    login:'',
    pass: '',
    email:'',
    token:[],
    isAuthenticated:false
  }
  componentDidMount(){
    console.log('from Form')
    // console.log('this.props',this.props);
    
  }
  myClick = (e) => {
    
    e.preventDefault()
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
              this.props.login(this.state.email, this.state.pass)
              localStorage.setItem('emailUser', this.state.email)
              this.props.history.push('/home')
            } else {
              localStorage.removeItem('token')
              this.props.history.push('/registration')
              // window.location.href = "http://localhost:3000/registrations"
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
                <input type="button" onClick={(e)=>this.myClick(e)} value="Login" />
                <a href="http://localhost:3000/registration">Registration</a>

            </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    login: (name, password) => { dispatch({ type: 'IS_AUTH', name: name, password: password }) }
  }
}

export default connect (null, mapDispatchToProps)(MyForm)
          
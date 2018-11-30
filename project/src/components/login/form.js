import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export class MyForm extends Component {
  constructor(props)
  {
     super(props);
        this.state = {
      login:'',
      pass:'',
      allow:''
  } 
  }
  onMyChange = (e) => {
    if(e.target.name ==='login'){
        this.setState({login: e.target.value})
        
        
    }else{
        this.setState({pass: e.target.value})
        
    }
    
  }
  myClick = () =>{
    var formData = new FormData();
    formData.append('email', this.state.login);
    formData.append('password', this.state.pass);
    fetch( 'http://ec2-54-88-87-181.compute-1.amazonaws.com:8889/login',
        {
            method: "post",
            body: formData,
            credentials: 'omit',
            mode: 'cors',
        })
        .then((res) => {
            res.json()
            .then((response) => {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        })
        .catch((err) => {
            console.log('error',err)
        });
  }

  render() {

    return (
        <div>
            <div>
                <div>Логин: 
                    <input type="text"onChange={this.onMyChange} name="login"/>
                </div>
                <div>Пароль:
                    <input type="password"onChange={this.onMyChange} name="pass"/>
                </div>

                <input type="button" onClick={this.myClick} value="Войти" />

            </div>
        </div>
    )
  }
}



export default MyForm;
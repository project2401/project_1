import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component{
    state = {
        isRegistration : false,
        isAuthenticated: false
    }

    render(){
        return(
            <MyContext.Provider value = {{ 
                state: this.state,
                FunkAuthenticatedTrue: () =>{
                    this.setState({
                        isAuthenticated: true
                    })
                } 
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider
import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:'',
            time:''
        }
    }
    
  render() {
    
    
    return (
      <div className="Form">
      <input onChange={this.handleChanch}/>
      <input/>
      <button>Click</button>
        
      </div>
    );
  }
}

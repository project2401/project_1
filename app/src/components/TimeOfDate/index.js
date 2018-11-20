import React, { Component } from 'react';

export default class TimeOfDate extends Component {
    
    
  render() {
    return (
      <div className="TimeOfDate">
          <div className='title'>
              {this.props.timeOfDate.map(elem => {
                  return (
                      <div className='time'>
                          <div key={elem.id}>{elem.time}</div>
                      </div>
                      
                  );
              })}
          </div>
      </div>
    );
  }
}
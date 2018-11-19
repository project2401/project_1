import React, { Component } from 'react';

export default class Month extends Component {
  render() {
    return (
      <div className="Month">
          <p>Комната</p>
            <div>
                <p></p>
                <p>{this.props.month}</p> 
                <p></p>                   
            </div>   
            <div className="day">
                {this.props.day.map(elem => {
                   return(
                       <div>
                            <div >{elem.id}</div>
                            <div>{elem.number} </div>
                            <div>{elem.dayOfTheWeek} </div>
                       </div>
                       
                   ); 
                })
            }
            </div>    
      </div>
    );
  }
}

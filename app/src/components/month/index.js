import React, { Component } from 'react';
import TimeOfDate from '../TimeOfDate'

export default class Month extends Component {
  
  render() {
    
    let days = null
    if(this.props.day){
      days = this.props.day.map((elem, index)=>{
        
        return(
          <div>
            <div className='dayTitle'  >
              <div className='dayTitlelText' key={elem.id}>{elem.number} </div>
              <div>{elem.dayOfTheWeek} </div>
            </div>
            <div className='green'>
                  <p>Зеленая</p>
                  <TimeOfDate/>
                </div>
          </div>
          
          
        )
      })
    }
  
    
    return (
      <div className="Month">
        <div className='rum'>
          <p className='rumText'>Комната</p>
          <div className='sectionRum'>
            <div className='rumMouth'>
              <div>&lt;</div>
              <div>{this.props.month}</div> 
              <div>&gt;</div>
            </div>
            <div className="day">
              {days}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

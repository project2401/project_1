import React, { Component } from 'react';

export default class Month extends Component {
  render() {
    console.log('3333333', this.props);
    
    let days = null
if(this.props.day){
      days = this.props.day.map((elem, index)=>{
        return(
          <div className='dayTitle'>
                          <div key={elem.id}>{elem.number} </div>
                          <div>{elem.dayOfTheWeek} </div>

                      </div>
        )
      })
    }
    console.log(this.props.day);
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

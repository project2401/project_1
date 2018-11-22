import React, { Component } from 'react';


export default class Month extends Component {
    
  sendDay = (e) =>{
    e.target.style.color = e.target.style.color === 'rgb(0, 39, 255)' ? '#000' : 'rgb(0, 39, 255)'
    // this.setState({
    //   day: e
    // })
  };
  
  
  render() {
    
    let days = null
    if(this.props.day){
        console.log('day',this.props.day);
        
        days = this.props.day.map( day => {
            return(
                <div>
                    <div className = 'dayTitle'  onClick = { e=>this.sendDay(e) }>
                        <div className = 'dayTitlelText' key = { day.id }>{ day.number }
                            {day.dayOfTheWeek} 
                            
                        </div>
                        
                    </div>
                    
                </div>
            )
        })
    }
  
    
    return (
      <div className="Month">
        <div className='rum'>
            {/* <p className='rumText'>Комната</p>
            <p>Зеленая</p> */}
                    {/* <TimeOfDate 
                        time={this.props.day.timeOfDate} 
                        number={this.props.day.number} 
                        dayOfTheWeek={this.props.day.dayOfTheWeek}
                    /> */}
          <div className='sectionRum'>
            <div className='rumMouth'>
              <div>&lt;</div>
              <div>{this.props.month}</div> 
              <div>&gt;</div>
            </div>
            <div className="day">
              {days}
              <div className='green'>
                    {/* <p>Зеленая</p>
                    <TimeOfDate 
                    time={day.timeOfDate} 
                    number={day.number} 
                    dayOfTheWeek={day.dayOfTheWeek}
                    /> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

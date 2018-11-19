import React, { Component } from 'react';

export default class Month extends Component {
  render() {
    return (
      <div className="Month">
        <div className='rum'>
          <p className='rumText'>Комната</p>
            <div className='sectionRum'>
              <div className='rumMouth'>
                <div>1</div>
                <div>{this.props.month}</div> 
                <div>2</div>  
              </div>
              <div className="day">
              {this.props.day.map(elem => {
                  return(
                      <div className='dayTitle'>
                          <div key={elem.id}>{elem.number} </div>
                          <div>{elem.dayOfTheWeek} </div>
                      </div>
                  ); 
                })
              }
              </div>
            </div>
        </div>
      </div>
    );
  }
}

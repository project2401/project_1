import React, { Component } from 'react';
import './style.css';
import Time from './components/Time';
import Calendar from 'react-calendar';

class App extends Component {
    state={
        timeOfDate:
      [
        {
          id:1,
          time:'9:00'
        },
        {
          id:2,
          time:'10:00'
        },
        {
          id:3,
          time:'11:00'
        },
        {
          id:4,
          time:'12:00'
        },
        {
          id:5,
          time:'13:00'
        },
        {
          id:6,
          time:'14:00'
        },
        {
          id:7,
          time:'15:00'
        },
        {
          id:8,
          time:'16:00'
        },
        {
          id:9,
          time:'17:00'
        },
        {
          id:10,
          time:'18:00'
        }
      ],
      booking:[
        {
          userId:1,
          time:1,
          date:'11/23/2018',
          placeId:'green'
        }
        
      ],
      changeDate:false,
      date: new Date(),
      zone : ['Зеленая', 'Крассная', 'Синяя', 'Фиолетовая']
      
      
    }
    clickTime = (e, idTime) => {
      e.target.style.color = e.target.style.color === 'rgb(0, 39, 255)' ? '#000' : 'rgb(0, 39, 255)'
      console.log(idTime);
      
      //   this.setState({
      //   changeDate: !this.state.changeDate
      // })
  }
  // changeTime=(e)=>{
    
    
  // }
  render() {
    
    return (
      <div className="App">
        <div className='wrapper'>
        <Calendar onChange={(e)=>this.changeTime(e)}
            onChange={this.onChange}
            value={this.state.date}/>
          <div className='headar'>  
            <h1 className='headerTitle' >  Бронирование переговорок</h1>
            <section>
                {/* <div className='rum'>
                    <div>
                        <div className="rumTitle" >Комната</div>
                    </div>
                    <div className="rumDey">
                        <div className="mouth" >
                            <div>&lt;</div>
                            <div>Июль</div>
                            <div>&gt;</div>
                        </div>
                        <div className="dey">
                            <div>10 понедельник</div>
                            <div>11 вторник</div>
                            <div>12 среда</div>
                            <div>13 четверг</div>
                            <div>14 пятница</div>
                        </div>
                    </div>
                  
                </div> */}
                <div className='sectionRgeen'>
                    <div className="greenZone">
                    {this.state.zone.map(zone =>{
                      return(
                        <div className="zoneTitle">
                          <div>{zone}</div>
                        <Time time={this.state.timeOfDate}
                          clickTime={this.clickTime}
                          // changeDate={this.state.changeDate}
                            />
                        </div>
                        
                      )
                    })}
                        
                    </div>
                    
                </div>
                {/* <div className='sectionRgeen'>
                    <div className="greenZone">
                        <div>Крассная</div>
                    </div>
                  <Time time={this.state.timeOfDate}
                    clickTime={this.clickTime}/>
                    
                </div> */}
                {/* <div className='sectionRgeen'>
                    <div className="greenZone">
                        <div>Синяя</div>
                    </div>
                  <Time time={this.state.timeOfDate}
                    clickTime={this.clickTime}/>
                    
                </div> */}
                {/* <div className='sectionRgeen'>
                    <div className="greenZone">
                        <div>Фиолетовая</div>
                    </div>
                  <Time time={this.state.timeOfDate}
                    clickTime={this.clickTime}/>
                    
                </div> */}
            </section>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

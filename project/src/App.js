import React, { Component } from 'react';
import './style.css';
import Time from './components/Time';
import Calendar from 'react-calendar';
// import 'moment-timezone';
// import moment from 'moment';

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
      date: new Date(
         new Date().getFullYear(),
         new Date().getMonth() + 1,
         new Date().getDate() 
      ),
      zone : ['Зеленая', 'Красная', 'Синяя', 'Фиолетовая'],
    }

    toggle  =(e, time, zone, dtd) => {
      if(getComputedStyle( e.target).color === 'rgb(0, 0, 0)'){
        this.clickTime(e, time, zone, dtd)
      }else{
        this.remove(e, time, zone, dtd)
      }
    }

    remove = (e, time, zone, dtd) => {
      
      let arr = JSON.parse(localStorage.getItem('data')) == null ? []: JSON.parse(localStorage.getItem('data'));
          // console.log('this arrr',arr);
          
      for (let i = 0; i < arr.length; i++) {
              if (arr[i].day === dtd.toISOString()
                  && arr[i].color === zone
                  && arr[i].id === 1
                  && arr[i].time === time) {
                    e.target.style.color = e.target.style.color === 'rgb(0, 39, 255)' ? 'rgb(0, 0, 0)' : 'rgb(0, 39, 255)'
                  arr.splice(i,1)
                  localStorage.setItem('data', JSON.stringify(arr))
              }
          }
    }

    clickTime = (e, time, zone, date) => {
      // debugger
      e.target.style.color = e.target.style.color === 'rgb(0, 39, 255)' ? 'rgb(0, 0, 0)' : 'rgb(0, 39, 255)'

      let arr = JSON.parse(localStorage.getItem('data')) == null ? []: JSON.parse(localStorage.getItem('data'));
     
      let obj = {
        day:date,
        color:zone,
        id: 1,
        time: time
      }
      arr.push(obj)
      localStorage.setItem('data', JSON.stringify(arr))
    }

    infOrder = (time, zone, dtd)  =>  {
      let arr = JSON.parse(localStorage.getItem('data')) == null ? []: JSON.parse(localStorage.getItem('data'));
          for (let i = 0; i < arr.length; i++) {
              if (arr[i].day === dtd.toISOString()
                  && arr[i].color === zone
                  && arr[i].id === 1
                  && arr[i].time === time) {
                  return 'rgb(0, 39, 255)';
              }
          }
      }
  
      onChange = date => this.setState({ date })
    
  
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
                <div className='sectionRgeen'>
                    <div className="greenZone">
                    {this.state.zone.map(zone =>{
                      // console.log(zone)
                      return(
                        <div className="zoneTitle">
                          <div>{zone}</div>
                        <Time time={this.state.timeOfDate}
                          clickTime={this.clickTime}
                          zone={zone}
                          infOrder={this.infOrder}
                          date={this.state.date}
                          remove={this.remove}
                          toggle={this.toggle}
                          // changeDate={this.state.changeDate}
                            />
                        </div>
                      )
                    })}
                    </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
  
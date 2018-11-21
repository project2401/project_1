import React, { Component } from 'react';
import Month from './components/month'
// import TimeOfDate from './components/TimeOfDate'
import './style.css'
// import Api from './api'
// import Form from './components/Form';

class App extends Component {
  state ={
    arr:JSON.parse(localStorage.getItem('data')),
    SelectedDay: [
      {
      okTest: "test"
    }
    ],
    server:[],
    serverLocal:
    {
      month: "Июль",
      day: 
      [
        {
        id: 1,
        number: 10,
        dayOfTheWeek: "Понедельник"
      },
      {
        id: 2,
        number: 11,
        dayOfTheWeek: "Вторник"
      },
      {
        id: 3,
        number: 12,
        dayOfTheWeek: "Среда"
      },
      {
        id: 4,
        number: 13,
        dayOfTheWeek: "Четверг"
      },
      {
        id: 5,
        number: 14,
        dayOfTheWeek: "Пятница"
      }
      ],
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
      ]
    }
    
  }
  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem('data')))
    this.state.arr = JSON.parse(localStorage.getItem('data'))
    console.log(this.state.arr)
    // Api().then(json => {
    //   this.setState({ server: json });
    //   console.log(this.state.server);
    //   console.log('day', this.state.server[2].day);
      
    // });
  }
  // chanchDate = () =>{
  //   this.setState({
  //     SelecteDay: 
  //   })
  // }
  
  render() {
    
    return (
      <div className="App">
          <div className='wrapper'>
            <h1>Бронирование переговорок</h1>
            
            

            <Month 
              month={this.state.serverLocal.month} 
              day={this.state.serverLocal.day}
              SelectedDay={this.state.SelecteDay}
              chanchDate={this.chanchDay}
              


              />
              
  {/* <Form/> */}
          </div>
      </div>
    );
  }
}

export default App;

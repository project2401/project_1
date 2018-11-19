import React, { Component } from 'react';
import Month from './components/month'

class App extends Component {
  state ={
    month: "Июль",
    day: [{
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
    ]
  }
  render() {
    return (
      <div className="App">
          <div className='wrapper'>
            <h1>Бронирование переговорок</h1>
            <Month month={this.state.month} day={this.state.day}/>
            
          </div>
      </div>
    );
  }
}

export default App;

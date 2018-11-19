import React, { Component } from 'react';
import Month from './components/month'
import TimeOfDate from './components/TimeOfDate'
import './style.css'
import Api from './api'

class App extends Component {
  state ={
    server:[]
  }
  componentDidMount() {
    Api().then(json => {
      this.setState({ server: json });
      console.log(this.state.server);
    });
  }
  render() {
    return (
      <div className="App">
          <div className='wrapper'>
            <h1>Бронирование переговорок</h1>
            
            

            {/* <Month 
              month={this.state.server.month} 
              day={this.state.server.day}
              />
              <div className='green'>
                <p>Зеленая</p>
                <TimeOfDate timeOfDate={this.state.server.timeOfDate}/>
              </div> */}

          </div>
      </div>
    );
  }
}

export default App;

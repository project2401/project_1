import React, { Component } from 'react';
import Month from './components/month'
import Time from './components/time'
import './style.css'
// import TimeOfDate from './components/TimeOfDate'
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
      columnСolor:[
        {
            color:'Зеленая',
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
        },
        {
            color:'Красная',
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
        },
        {
            color:'Синяя',
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
        },
        {
            color:'Фиолетовая',
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
        },
    ],
      day: 
      [
        {
        id: 1,
        number: 10,
        dayOfTheWeek: "Понедельник",
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
      },
      {
        id: 2,
        number: 11,
        dayOfTheWeek: "Вторник",
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
      },
      {
        id: 3,
        number: 12,
        dayOfTheWeek: "Среда",
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
      },
      {
        id: 4,
        number: 13,
        dayOfTheWeek: "Четверг",
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
      },
      {
        id: 5,
        number: 14,
        dayOfTheWeek: "Пятница",
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
  
  render() {
    const { serverLocal} = this.state
    return (
      <div className="App">
            <div className='wrapper'>
                <h1>Бронирование переговорок</h1>
                    <div className='wrapperSection' >
                        <div className='section' >
                            <div className='firstSection' >
                                <p>Комната</p>
                                <Month 
                                    month={this.state.serverLocal.month} 
                                    day={this.state.serverLocal.day}
                                    SelectedDay={this.state.SelecteDay}
                                    chanchDate={this.chanchDay}
                                />
                            </div>
                            <div className='secondSection' > 
                                <div  className='color' >
                                    {serverLocal.columnСolor.map(elem => {
                                            return(
                                                <div className='titleColor' > 
                                                    <div className='colorText' >
                                                        {elem.color}
                                                    </div>
                                                    <div className='titleTime' >
                                                        <Time />
                                                        <Time />
                                                        <Time />
                                                        <Time />
                                                        <Time />
                                                    </div>

                                                        
                                                </div>
                                                
                                                )
                                        })} 
                                </div>
                                {/* <div className='sectionTime' >
                                    <Time/>
                                    <Time/>
                                    <Time/>
                                    <Time/>
                                    <Time/>
                                </div> */}
                                
                                
                                
                                {/* <div>
                                    
                                    {serverLocal.columnСolor.map(colum => 
                                        <div>
                                            {colum.timeOfDate.map(time => 
                                            <div>
                                                {time.time}
                                            </div>
                                        
                                                
                                            )}
                                        </div>
                                        )
                                    }
                                </div> */}
                                
                            </div>        
                        </div>
                    
                    
        {/* // <Form/>  */}
                    {/* <div className='table' >
                        <div className='tableTitle'>
                            {this.state.serverLocal.columnСolor.map(elem => {
                            return(
                                <div className='titleColor' > 
                                    <div className='colorText' >
                                        {elem.color}
                                    </div>
                                    <div className='time' >
                                    <div className='timeTitle' >
                                        {elem.timeOfDate.map(time => {
                                            return(
                                                <div className='timeText' >
                                                    {time.time}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                </div>
                                
                            )
                        })}
                        </div>
                        
                    </div> */}
                </div>
                
          </div>
      </div>
    );
  }
}

export default App;

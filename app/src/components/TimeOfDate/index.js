import React, { Component } from 'react';

export default class TimeOfDate extends Component {
    constructor(props) {
        super(props);
        this.state={
            global_arr: null,
            inputField:'help'
        }
        this.arr = JSON.parse(localStorage.getItem('data')) == null ? []: JSON.parse(localStorage.getItem('data'));
    }

    sendData (id, time, day, color) {
        let arr= this.arr;
        // console.log(arr)
        // debugger
        let obj = {
            day:day,
            color:color,
            id:id,
            time: time
        }
        arr.push(obj)
        localStorage.setItem('data', JSON.stringify(arr))
    }
    color(id, time,  day, color){

        for(let i = 0; i<this.arr.length;i++){
            
            if(this.arr[i].time === time 
                && this.arr[i].id === id
                && this.arr[i].day === day
                && this.arr[i].color === color){
                // console.log(this.arr[i].time == time)
                return {
                    background :'red'
                }
            }
        }
    }
  render() {
    //   console.log('time',this.props.time.timeOfDate);
      
    return (
      <div className="TimeOfDate">
          <div className='title'>
                <div className='time'>
                {this.props.time.map(elem=>{
                    return(
                        <div onClick={() => this.sendData(elem.id, elem.time)}
                style={this.color(elem.id, elem.time, elem.color, elem.day)} > 
                            {elem.time}
                        </div>
                    
                    )
                })} 
                    {/* <input id='1' name="inputField" value='9:00'/>
                    <input id='3' name="inputField" value='10:00'/>
                    <input id='3' name="inputField" value='11:00'/>
                    <input id='4' name="inputField" value='12:00'/>
                    <input id='5' name="inputField" value='13:00'/>
                    <input id='6' name="inputField" value='14:00'/>
                    <input id='7' name="inputField" value='15:00'/>
                    <input id='8' name="inputField" value='16:00'/>
                    <input id='9' name="inputField" value='17:00'/>
                    <input id='10' name="inputField" value='18:00'/> */}
                </div>
          </div>
      </div>
    );
  }
}
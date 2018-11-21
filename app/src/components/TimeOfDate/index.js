import React, { Component } from 'react';

export default class TimeOfDate extends Component {
    constructor(props) {
        super(props);
        this.state={
            global_arr: null
        }
        // this.start();
    }
     
    // start(){
    //     let newGlobalaArr = this.setState({
    //     }) this.props.arr
    //     if(this.global_arr === undefined || this.global_arr === null){
    //         this.global_arr =[]
    //     }
    //     console.log(this.global_arr);
    // }

    // sendData (id, time) {
    //     console.log('asdasd')
    //     let arr= this.global_arr;
    //     let obj = {
    //         day:'',
    //         color:'',
    //         id:id,
    //         time: time
    //     }
    //     arr.push(obj)
    //     localStorage.setItem('data', JSON.stringify(arr))
    // }
    sendData = e => e.target.style.color =  e.target.style.color === 'red' ? '#000' : 'red';
        
    
  render() {
    return (
      <div className="TimeOfDate">
          <div className='title'>
                <div className='time' onClick={e=>this.sendData(e)}>
                    <div>9:00</div>
                    <div>10:00</div>
                    <div>11:00</div>
                    <div>12:00</div>
                    <div>13:00</div>
                    <div>14:00</div>
                    <div>15:00</div>
                    <div>16:00</div>
                    <div>17:00</div>
                    <div>18:00</div>
                </div>
          </div>
      </div>
    );
  }
}
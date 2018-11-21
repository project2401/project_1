import React, { Component } from 'react';

export default class TimeOfDate extends Component {
    constructor(props) {
        super(props);
        this.state={
            global_arr: null,
            inputField:'help'
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
    sendData = (e, value) => {
        // console.log();
        
        e.target.style.color =  e.target.style.color === 'red' ? '#000' : 'red'
        // this.setState({})
        
    };
        
    
    
  render() {
    //   console.log('props',this.props.time);
      
    return (
      <div className="TimeOfDate">
          <div className='title'>
                <div className='time' onClick={(e, value) => this.sendData(e, value)}>
                {this.props.time.map(elem=>{
                    return(
                        <input value={elem.time}/>
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
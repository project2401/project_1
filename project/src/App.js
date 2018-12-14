import React, { Component } from "react";
import "./style.css";
import Time from "./components/Time";
import Calendar from "react-calendar";
// import { Route } from 'react-router';
// import {Redirect} from 'react-router-dom';
// import MyForm from "./components/login/form";
// import axios from "axios";
// import { Router, Route, hashHistory} from 'react-router';
// import{ BrowserRouter, Route, Link} from "react-router-dom";
// import createBrowserHistory from "history/createBrowserhistory";
// import 'moment-timezone';
// import moment from 'moment';
import {connect} from 'react-redux'
import {isAuth} from './actions/index'




class App extends Component {
  // componentDidMount(){
  //   if(localStorage.getItem("token")){
  //     // console.log(localStorage.getItem("token"));
      
  //     return(
  //       this.props.isAuth(true)
  //     )
      
  //   }
  // }

  state = {
    datas: JSON.parse(localStorage.getItem("data")) || [],
    timeOfDate: [
      {
        id: 1,
        time: "9:00"
      },
      {
        id: 2,
        time: "10:00"
      },
      {
        id: 3,
        time: "11:00"
      },
      {
        id: 4,
        time: "12:00"
      },
      {
        id: 5,
        time: "13:00"
      },
      {
        id: 6,
        time: "14:00"
      },
      {
        id: 7,
        time: "15:00"
      },
      {
        id: 8,
        time: "16:00"
      },
      {
        id: 9,
        time: "17:00"
      },
      {
        id: 10,
        time: "18:00"
      }
    ],
    
    changeDate: false,
    date: new Date(
      new Date().getFullYear(),
      new Date().getMonth() ,
      new Date().getDate()
    ),
    zone: ["Зеленая (до 5 персон)", "Красная (до 15 персон)", "Синяя (до 25 персон)", "Фиолетовая (до 25 персон)"],
  };

  toggle = (e, time, zone, dtd, userId) => {
    let color = getComputedStyle(e.target).color;
    color === "rgb(51, 51, 51)" ?
     this.clickTime(e, time, zone, dtd,userId) : 
      color === "rgb(0, 0, 255)" ? 
     this.remove(e, time, zone, dtd, userId) : 
      null
  };

  remove = (e, time, zone, dtd, id) => {
    let arr =
      JSON.parse(localStorage.getItem("data")) == null
        ? []
        : JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].day === dtd.toISOString() &&
        arr[i].color === zone &&
        arr[i].id === id &&
        arr[i].time === time
      ) {
        arr.splice(i, 1);
        localStorage.setItem("data", JSON.stringify(arr));
        this.setState({ datas: arr });
      }
    }
  };

  clickTime = (e, time, zone, date, userId) => {
    let data = JSON.parse(localStorage.getItem("data"))
    let arr =
    data === null || data === undefined || data.length === 0
        ? []
        : JSON.parse(localStorage.getItem("data"));
    let obj = {
      day: date,
      color: zone,
      id: userId,
      time: time
    };
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    this.setState({ datas: arr });
  };

  infOrder = (time, zone, date, userId) => {
    let arr =
      JSON.parse(localStorage.getItem("data")) == null
        ? []
        : JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].day === date.toISOString() &&
        arr[i].color === zone &&
        arr[i].time === time
      ) {
        return arr[i].id === userId ? 'activeUser time' : 'activeNoUser time' 
      }
    }
    return 'time'
   
  };
  onChange = date => this.setState({ date });

  logout =() =>{
    localStorage.removeItem('token')
    localStorage.removeItem('emailUser')
    // window.location.href = "http://localhost:3000/login"
    // this.props.history.push('/login')
    this.props.logOut()
  }
  render() {
    console.log(this.props)
    return (
          <div className="App">
          <div className="wrapper">
            <Calendar 
              onChange={this.onChange}
              value={this.state.date}
            />
            <div className="logOut">
                <button onClick={this.logout}>Logout</button>
            </div>
            <div className="headar">
              <h1 className="headerTitle"> Бронирование переговорок</h1>
              <section>
                <div className="sectionRgeen">
                  <div className="greenZone">
                    {this.state.zone.map((zone, i) => {
                      return (
                        <div key={i} className="zoneTitle">
                          <div className="zoneText">{zone}</div>
                          <Time
                            time={this.state.timeOfDate}
                            clickTime={this.clickTime}
                            zone={zone}
                            infOrder={this.infOrder}
                            date={this.state.date}
                            remove={this.remove}
                            toggle={this.toggle}
                            userId={localStorage.getItem('emailUser')}
                            // isId={this.isId}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    );
  }
}
const mapStateToProps = store => {
  // console.log('name!!!!!!',store.authenticated.name);
  return {
    userId: store.authenticated.name
  }
}

const mapDispatchToProps = dispatch => {
  return{
    isAuth: obj => dispatch(isAuth(obj)),
    logOut: ()=>(dispatch({type:'LOGOUT'}))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
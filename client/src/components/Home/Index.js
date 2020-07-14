import React from 'react';
import Helmet from 'react-helmet';
import moment from "moment";
import "./Home.css"
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const now = moment();
    //var monthDays = now.daysInMonth()
    //var days = moment.weekdays()
    var arrDays = [];
    var date = new Date;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //var daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]

    for (var i = 0; i < 8; i++) {
        var dd = date.getDate("DD");
        
        date.setDate(date.getDate() + 1);
        arrDays.push(dd)
        console.log(date)

    }

    // monthDays = monthDays + 1;
    // for (var i = 0; i < monthDays; i++) {
    //     while (monthDays >= 2) {
    //         monthDays --;
    //         arrDays.push(monthDays);
    //     }
    // }

    arrDays.sort(function(a, b){
        return a-b
    });
    
    
    return (
        <React.Fragment>
            <Helmet bodyAttributes={{style: 'background-color : #4BB543'}}/>
            <div className = "container">
                <div style = {{marginTop: "20px"}} className = "row">
                    <div className = "col-md-4">
                        <img alt = "calendar-img" style = {{height: "45px", width: "45px", float: "left"}} src = "https://i1.wp.com/nascompares.com/wp-content/uploads/2018/08/Synology-Calendar-logo.png?fit=256%2C256&ssl=1" />
                        <a style = {{color: "white", fontFamily: 'Dosis, sans-serif', fontSize: "2rem", marginLeft: "10px" }} href = "#">Calendar View</a>
                    </div>
                    <div className = "col-md-3 offset-5">
                        <div className ="form-group">
                            <label style = {{ fontFamily: 'Dosis, sans-serif', fontSize: "1.2rem", float: "right", color: "rgba(255, 217, 0, 0.845)" }} htmlFor="search">🔎 Search Date</label>
                            <input style = {{ fontFamily: 'Dosis, sans-serif', height: "25px", width: "58%", float: "right", marginTop: "10px", borderRadius: "20px"}} type="date" className ="form-control" id="search"/>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div style = {monthAndLinks} className = "col-md-2">
                        <h1>{ months[date.getMonth()] }</h1>
                    </div>
                    <div style = {addLinks} className = "col-md-4 offset-6">
                        <a style = {{ float: "right"}} href = "#">+ Add Bad Habit</a>
                        <a style = {{ marginRight: "20px", float: "right"}} href = "#">+ Add Goal</a>
                    </div>
                </div>
                <div style = {listedCalendarStyle} className = "row listedCal">
                    <div className = "col-md-12 listedCalendar">
                    {arrDays.map(dayNum => (
                        <div key = { uuidv4() } className = "calList">
                            <div className = "row">
                                <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.8rem", marginBottom: "10px"}}>{ dayNum }</h1>
                                <div style = {calListStyle} className = "col-md-12">

                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const listedCalendarStyle = {
    border: "1px solid black",
    marginTop: "10px",
    padding: "20px",
    height: "700px",
    overflow: "auto",
    backgroundColor: "rgb(210, 210, 210)",
    borderRadius: "5px"
}

const monthAndLinks = {
    marginTop: "20px",
    fontFamily: 'Dosis, sans-serif',
    fontSize: "3rem"
}

const addLinks = {
    marginTop: "50px",
    fontFamily: 'Dosis, sans-serif',
    fontSize: "1.5rem"
}

const calListStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    height: "100px",
    marginBottom: "30px",
    backgroundColor: "white"
}
export default Home;
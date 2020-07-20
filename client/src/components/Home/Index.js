import React from 'react';
import Helmet from 'react-helmet';
import moment from "moment";
//import DeleteButton from "../DeleteButton/Index"
import "./Home.css"
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Home(props) {
    const now = moment();
    var monthDays = now.date()
    //console.log(monthDays)
    //var days = moment.weekdays()
    var arrDays = [];
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //var currentTime = moment().format("h:mm a")
    
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
                    <div className = "col-md-4">
                        <h1 style = {{textAlign: "center"}}>{ props.clock } </h1>
                    </div>
                    <div className = "col-md-4 offset-">
                        <div className ="form-group">
                            <label style = {{ fontFamily: 'Dosis, sans-serif', fontSize: "1.2rem", float: "right", color: "rgba(255, 217, 0, 0.845)" }} htmlFor="search"><span role = "img" aria-label = "magnifying-glass">🔎</span> Search Date</label>
                            <input style = {{ fontFamily: 'Dosis, sans-serif', height: "25px", width: "65%", float: "right", marginTop: "10px", borderRadius: "20px"}} type="date" className ="form-control" id="search"/>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div style = {monthAndLinks} className = "col-md-2">
                        <h1>{ months[date.getMonth()] }</h1>
                    </div>
                    <div style = {addLinks} className = "col-md-4 offset-6">
                        <Link to = "/badHabit" style = {{ float: "right"}} href = "#">+ Add Bad Habit</Link>
                        <Link to = "/Goal" style = {{ marginRight: "20px", float: "right"}} href = "#">+ Add Goal </Link>
                    </div>
                </div>
                <div style = {listedCalendarStyle} className = "row listedCal">
                    <div className = "col-md-12 listedCalendar">
                    {/* //{arrDays.map(dayNum => ( */}
                        <div key = { uuidv4() } className = "calList">
                            <div className = "row">
                                <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.8rem", marginBottom: "10px"}}>{ monthDays }</h1>
                                <div style = {calListStyle} className = "col-md-12">
                                    <div className = "row">
                                        <div style = {allGoals} className = "col-md-12 allGoals">
                                            <div className = "row">
                                                {props.goal.map(results => (
                                                    <div key = {results._id} className = "col-md-2">
                                                        <div style = { checkStyle } className="form-check">
                                                            <input style = {{marginRight: "5px"}} className="form-check-input position-static" type="checkbox" id="goalCheckbox" value = {results.description} aria-label="..." />
                                                            <label className="form-check-label" htmlFor="goalCheckbox">
                                                                {results.description}
                                                            </label>
                                                            <div>
                                                                <button onClick={() => props.handleDelete(results)} style = { deleteStyle }>delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* ))} */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const listedCalendarStyle = {
    border: "1px solid black",
    marginTop: "10px",
    marginBottom: "50px",
    padding: "20px 60px",
    height: "fit-content",
    overflow: "auto",
    backgroundColor: "rgb(210, 210, 210)",
    borderRadius: "5px",
    boxShadow: "3px 3px 10px",
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
    height: "fit-content",
    marginBottom: "30px",
    backgroundColor: "white",
    padding: "5px 15px"
}

const checkStyle = {
    //float: "left",
    margin: "10px 15px",
    fontFamily: 'Dosis, sans-serif',
    padding: "0",
    //display: "inline-block"
}

const deleteStyle = {
    backgroundColor: "white",
    border: "none",
    color: "red",
    marginTop: "5px"
}

const allGoals = {
    float: "left"
}
export default Home;
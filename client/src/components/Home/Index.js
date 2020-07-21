import React from 'react';
import Helmet from 'react-helmet';
import moment from "moment";
//import DeleteButton from "../DeleteButton/Index"
import "./Home.css"
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import app from '../../firebase';

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
                                                            <input id = {results._id} onChange = {props.handleCheck} style = {{marginRight: "5px"}} data-toggle = {results.checked} className="form-check-input position-static" type="checkbox" aria-label="..." />
                                                            <label className="form-check-label" htmlFor="goalCheckbox">
                                                                {results.description}
                                                            </label>
                                                            <div>
                                                                <button className = "delBtn" onClick={() => props.handleDelete(results)} style = { deleteStyle }>delete</button>
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
                    </div>
                </div>
                <button onClick = {() => app.auth().signOut()}>Sign Out</button>
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
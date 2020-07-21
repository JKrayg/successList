import React from 'react'
import "./HomeHead.css"

function HomeHeader(props) {
    return (
        <div>
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
                            <label className = "search" style = {{ fontFamily: 'Dosis, sans-serif', fontSize: "1.2rem", float: "right", color: "rgba(255, 217, 0, 0.845)" }} htmlFor="search"><span role = "img" aria-label = "magnifying-glass">🔎</span> Search Date</label>
                            <input style = {{ fontFamily: 'Dosis, sans-serif', height: "25px", width: "65%", float: "right", marginTop: "10px", borderRadius: "20px"}} type="date" className ="form-control" id="search"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default HomeHeader;
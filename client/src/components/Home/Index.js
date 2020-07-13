import React from 'react'

function Home() {
    return (
        <React.Fragment>
            <div className = "container">
                <div style = {{marginTop: "20px"}} className = "row">
                    <div className = "col-md-4">
                        <img style = {{height: "45px", width: "45px", float: "left", marginLeft: "10px"}} src = "https://i1.wp.com/nascompares.com/wp-content/uploads/2018/08/Synology-Calendar-logo.png?fit=256%2C256&ssl=1" />
                        <a style = {{color: "black", fontFamily: 'Dosis, sans-serif', fontSize: "2rem", marginLeft: "10px" }} href = "#">Calendar View</a>
                    </div>
                    <div className = "col-md-3 offset-5">
                        <div class="form-group">
                            <label style = {{ fontFamily: 'Dosis, sans-serif', fontSize: "1.2rem", float: "right" }} for="search">🔎 Search Date</label>
                            <input style = {{ fontFamily: 'Dosis, sans-serif', height: "25px", width: "58%", float: "right", marginTop: "10px", borderRadius: "20px"}} type="date" class="form-control" id="search"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;
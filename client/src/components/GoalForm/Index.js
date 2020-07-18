import React from 'react';

function GoalForm(props)  {
        return (
            <React.Fragment>
                <div className = "container">
                    <div className = "row">
                        <div style = {mainCon} className = "col-md-8">
                            <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "3rem", marginBottom: "15px"}}>Goal</h1>
                            <div className="form-group">
                                <textarea
                                style = {{ border: "5px solid #4BB543", fontFamily: 'Dosis, sans-serif'}}
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={props.goal}
                                name="goal"
                                onChange={props.handleChange}
                                placeholder="Goal"
                                />
                            </div>
                            <button onClick = {props.handleSubmit} style = {{fontFamily: 'Dosis, sans-serif'}} type="submit" className="btn btn-primary">Create</button>
                        </div>    
                        <div style = {suggestCon} className = "col-md-3 offset-1">
                            <h3 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.5rem"}}>Suggestions</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

const mainCon = {
    border: "1px solid black",
    borderRadius: "5px 20px",
    marginTop: "30px",
    padding: "20px 60px",
    backgroundColor: "rgb(210, 210, 210)"
}

const suggestCon = {
    border: "1px solid black",
    marginTop: "30px",
    padding: "5px 10px"
}

export default GoalForm;
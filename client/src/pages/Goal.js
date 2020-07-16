import React, { Component } from 'react';
//import Goal from "../components/Goal/Index";
import API from "../util/API"

export class GoalPage extends Component {

    state = {
        goalsList: [],
        goal: ""
    }

    componentDidMount() {
        this.loadGoals();
      }
    
      loadGoals = () => {
        API.getGoals()
          .then(res =>
            this.setState({ goalsList: res.data, goal: "" })
          )
          .catch(err => console.log(err));
      };

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
          
        });
        console.log(this.state.goal)
    };

    handleSubmit = event => {
        event.preventDefault();
          API.saveGoal({
            description: this.state.goal
          })
            .then(res => this.loadGoals())
            .catch(err => console.log(err));
            console.log(this.state.goal)
      };

    render() {
        return (
            <React.Fragment>
            <div className = "container">
                <div className = "row">
                    <div style = {mainCon} className = "col-md-8">
                        <h1 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "3rem", marginBottom: "15px"}}>Goal</h1>
                        <div className="form-group">
                            <textarea
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.goal}
                            name="goal"
                            onChange={this.handleChange}
                            placeholder="Goal"
                            />
                        </div>
                        <button onClick = {this.handleSubmit} style = {{fontFamily: 'Dosis, sans-serif'}} type="submit" className="btn btn-primary">Create</button>
                    </div>    
                    <div style = {suggestCon} className = "col-md-3 offset-1">
                        <h3 style = {{fontFamily: 'Dosis, sans-serif', fontSize: "1.5rem"}}>Suggestions</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

const mainCon = {
    border: "1px solid black",
    marginTop: "30px",
    padding: "10px 40px"
}

const suggestCon = {
    border: "1px solid black",
    marginTop: "30px",
    padding: "5px 10px"
}

export default GoalPage;

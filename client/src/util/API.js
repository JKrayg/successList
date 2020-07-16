import axios from "axios";

export default {
  getGoals: function() {
    return axios.get("/api/goals").then(result => result.data);
  },
  saveGoal: function (goalData) {
    return axios.post("/api/goals", goalData).then(result => result.data);
  }
};
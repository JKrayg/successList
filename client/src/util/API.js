import axios from "axios";

export default {
  getGoals: function() {
    return axios.get("/api/goals").then(result => result.data);
  },
  getGoal: function(id) {
    return axios.get("/api/goals/" + id).then(result => result.data);
  },
  saveGoal: function (goalData) {
    return axios.post("/api/goals", goalData).then(result => result.data);
  },
  deleteGoal: function(id) {
    return axios.delete("/api/goals/" + id).then(result => result.data);
  },
};
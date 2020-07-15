import axios from "axios";

export default {
  getGoals: function() {
    return axios.get("/api/list");
  },
  saveGoal: function(goalData) {
    return axios.get("/api/list", goalData);
   }
};
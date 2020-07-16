const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/successlistdb"
);

const checklistSeed = {
    description: "Exercise",
    type: "Goal",
    checked: true,
    date: new Date(Date.now())
};

db.List
.remove({})
.then(() => db.List.collection.insert(checklistSeed))
.then(data => {
    console.log(data.results);
    process.exit(0)
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
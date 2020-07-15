const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/successListdb"
);

const checklistSeed = {
    description: "Exercise",
    type: "Goal",
    checked: true,
    date: new Date(Date.now())
};

db.List.remove({})
.then(() => db.List.insertMany(checklistSeed))
.then(data => {
    console.log(data);
    process.exit(0)
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkList = new Schema({
    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        require: true
    },

    checked: {
        type: Boolean,
        require: true
    },

    date: { 
        type: Date,
        default: Date.now }

});

const List = mongoose.model("List", checkList);
module.exports = List;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    userName: {
        type: String,
        unique: true,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    text: {
        type: [String], // Updated to an array of strings
        default: []
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
});


const Todo = mongoose.model("toDo_full_v2.0", mySchema);

module.exports = Todo;
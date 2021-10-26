const mongoose = require('mongoose')
const {Schema, model} = mongoose

const todoSchema = new Schema({
    title : String,
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: String

}, {
    timestamps : true
})


module.exports = model('todos', todoSchema )
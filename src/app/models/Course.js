const mongoose = require('mongoose');
// Define model of course
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255},
    decs: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});

module.exports =  mongoose.model('Course', Course); 
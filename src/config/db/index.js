const mongoose = require('mongoose');
// Connect to MongoDB
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/learnNode_dev');
        console.log("Connect sucessfully");
    } catch (error) {
        console.log("Connect fail");
    }
}

module.exports = {connect};
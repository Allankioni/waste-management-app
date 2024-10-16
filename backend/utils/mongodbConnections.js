const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/Waste");
const userconnection = mongoose.createConnection("mongodb://127.0.0.1:27017/User")

module.exports = {userconnection,connection}

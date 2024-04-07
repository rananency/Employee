const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employee",{ bufferCommands: false });
const db = mongoose.connection;


db.on('connected', function() {
    console.log('Connected to MongoDB');
});
db.on('error', function(err) {
    console.error('Error in MongoDB connection:', err);
});

db.on('disconnected', function() {
    console.log('Disconnected from MongoDB');
});

const mongoose = require("mongoose");

const employeeSchema = {
    employeeNo:String,
    name: String,
    age: Number,
    email: String,
    dateOfBirth: Date,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    photo: String,
    isDeleted: Boolean
}



const employee = mongoose.model("employee", employeeSchema);

module.exports={
    employee
}
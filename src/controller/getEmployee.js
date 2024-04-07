
const { employee } = require("../database/employeeModal");

function getEmployee() {
    return employee.find().then((emp) => {
        return emp;
    }).catch(err => {
        console.error('Error retrieving employees:', err);
        throw err;
    });
}


module.exports={
    getEmployee
}
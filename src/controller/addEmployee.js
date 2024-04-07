const { employee } = require("../database/employeeModal");


 async function addEmployee(req,res) {
    const emp =new employee(req.body);
      await emp.save();
}

module.exports={
    addEmployee
}
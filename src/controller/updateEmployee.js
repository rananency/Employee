const { employee } = require("../database/connection");

 async function updateEmployee() {
    await employee.updateOne({ name: "dummy" }, { age: 10 })
  }

module.exports={
    updateEmployee
}
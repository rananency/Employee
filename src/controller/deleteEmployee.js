const { employee } = require("../database/connection");

 function deleteEmployee() {
    employee.updateOne({ name: "dummy" }, { isDeleted: false }).then(res=>{
        console.log("inserted")
      }).catch(err=>{
        console.log(err)
      })
}

module.exports={
    deleteEmployee
}
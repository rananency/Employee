const express = require('express');
const router = express.Router();
const { addEmployee } = require("../controller/addEmployee");
const { deleteEmployee } = require("../controller/deleteEmployee");
const { getEmployee } = require("../controller/getEmployee");
const { updateEmployee } = require("../controller/updateEmployee");
const { employee } = require('../database/employeeModal');

router.post('/', async (req, res) => {
  
    try {
      const emp = new employee({  ...req.body,isDeleted:false  });
      await emp.save();
      res.send({
        ok:true,
        message:`Employee added successfully`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

router.get('/', (req, res) => {
    return employee.find({isDeleted:false}).then((emp) => {
        res.send(emp);
    }).catch(err => {
        console.error('Error retrieving employees:', err);
        throw err; 
    });
});

router.put('/:empid', async(req, res) => {
    const { empid } = req.params;
    try {
        const emp = await employee.findByIdAndUpdate(empid, req.body, { new: true });
        res.send({
            ok:true,
            message:`Employee with ${empid} updated successfully`
          });
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
});

router.delete('/:empid', async (req, res) => {
    const { empid } = req.params;
  
    try {
      const emp = await employee.findByIdAndUpdate(empid,{isDeleted:true});
      res.send({
        ok:true,
        message:`Employee with ${empid} deleted successfully`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

module.exports = router;

const express = require('express');
const employeeController = require('../controller/employee.controller');
const router = express.Router();
// const travelController = require('../controller/travel.controller');

router.post('/', employeeController.addEmployee); //whenever the post method is called it calls addgig from gig contoller
router.get('/', employeeController.findEmployees);  //similiarly 
router.get('/:id', employeeController.findEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteById);

module.exports = router;


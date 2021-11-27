const Employee= require('../models/Employee');

var employeeDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEmployee: updateEmployee
}

function findAll() {   //inbuilt method to find  all the elemnts in a database
    return  Employee.findAll();     
}

function findById(id) {        
    return Employee.findByPk(id);     //inbuilt method find elemnts by particular id
}

function deleteById(id) {
    return Employee.destroy({ where: { id: id} });   //inbuilt method to delelte elemnts with particular id
}

function create(employee) {  //inbuilt method to create elemnts
    var newEmployee = new Employee(employee);
    return newEmployee.save();    //saving the newgig
}

function updateEmployee(employee,id) {
    var updateEmployee = {
        emp_id :employee.emp_id,
        first_name :employee.first_name,
        last_name: employee.last_name,
        age: employee.age,
        gender: employee.gender,
        address:employee.address,
        phone_number:employee.phone_number,
        i_id:employee.i_id

    };
    return Employee.update(updateEmployee, { where: { id: id } });
}
module.exports = employeeDao;
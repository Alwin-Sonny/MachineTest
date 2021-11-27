

const Sequelize = require('sequelize');
const db = require('../config/database');

// const travel = db.define('employee_registration', {
//    emp_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     first_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
   
//     last_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     gender: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     address: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     phone_number: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     i_id: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

const Travel = db.define('travel', {
   id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
     },
     cause_travel: {
         type: Sequelize.STRING,
         allowNull: false
     },
    
     source: {
         type: Sequelize.STRING,
         allowNull: false
     },
     destination: {
         type: Sequelize.STRING,
         allowNull: false
     },
     mode: {
         type: Sequelize.STRING,
         allowNull: false
     },
     from_date: {
         type: Sequelize.DATEONLY,
         allowNull: false
     },
     to_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    no_days: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority:{
        type: Sequelize.STRING,
        allowNull: false

    },
    project_id:{
        type: Sequelize.STRING,
        allowNull: false
},  
 emp_id:{
    type: Sequelize.STRING,
    allowNull: false
},
status:{
    type: Sequelize.STRING,
    allowNull: false
},


 });
 
module.exports = Travel
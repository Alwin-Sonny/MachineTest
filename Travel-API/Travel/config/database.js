//creates the databse
const { Sequelize } = require('sequelize');
const db = new Sequelize('travels', 'sqlite', 'Welcome123', {          //codegig is the db name ,followed by username and pswd
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',

    pool: {
        max: 5,              //pool is used to deals with the threads 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db; 
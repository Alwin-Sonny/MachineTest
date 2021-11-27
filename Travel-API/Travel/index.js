const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

//since we are using postman we need express
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Product routes
app.use('/', require('./routes/routes')); //obtaining the path from routes file from the routes folder

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));



axios.get("http://localhost:5000/travels/")
  .then(response => {
    console.log(response.data);
   
  })
  .catch(error => {
    console.log(error);
  });

  axios.get("http://localhost:5000/employees/")
  .then(response => {
    console.log(response.data);
   
  })
  .catch(error => {
    console.log(error);
  });
const express = require('express');
const router = express.Router();
const travelRoutes = require('./travels.route');
const employeeRoutes = require('./employees.route')
router.use('/travels', travelRoutes); //here travesl is the rroot and gigs route act as an addditon to the path /gigs
router.use('/employees',employeeRoutes)
module.exports = router;


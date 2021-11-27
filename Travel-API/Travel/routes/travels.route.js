const express = require('express');
const travelController = require('../controller/travel.controller');
const router = express.Router();
// const travelController = require('../controller/travel.controller');

router.post('/', travelController.addTravel); //whenever the post method is called it calls addgig from gig contoller
router.get('/', travelController.findTravels);  //similiarly 
router.get('/:id', travelController.findTravelById);
router.put('/:id', travelController.updateTravel);
router.delete('/:id', travelController.deleteById);

module.exports = router;


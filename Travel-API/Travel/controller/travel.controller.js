

//importing the dao
// const { updatetravel } = require('../dao/travel.dao');
const travelDao = require('../dao/travel.dao');
var travelController = {
    addTravel: addTravel,
    findTravels: findTravels,
    findTravelById: findTravelById,
    updateTravel: updateTravel,
    deleteById: deleteById
}
//it uses promise in a different way 
//promise
 //.then
  //error

function addTravel(req, res) { //function to create data
    let travel = req.body;   //acessing the data from the body of postman  
    travelDao.create(travel). //calling the create function defined in dao and passing the data
        then((data) => {   
            res.send(data); //if true then send the data
        })
        .catch((error) => {   
            console.log(error); //else show the error
        });
}

function findTravelById(req, res) {     
    travelDao.findById(req.params.id).  //call the function from dao
                                    //obtain the datafrom the url where req.params.id ie gigs/1
    then((data) => {
            res.send(data);    //if true send data
        })
        .catch((error) => {
            console.log(error);  //else show the error
        });
}

function deleteById(req, res) {
    travelDao.deleteById(req.params.id). 
        then((data) => {
            res.status(200).json({
                message: "travel deleted successfully",
                travel: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTravel(req, res) {
    travelDao.updateTravel(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "travel updated successfully",
                travel: data           //no.of data updated
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravels(req, res) {
    travelDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = travelController;

//defining the operations


const Travel= require('../models/Travel');

var travelDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTravel: updateTravel
}

function findAll() {   //inbuilt method to find  all the elemnts in a database
    return  Travel.findAll();     
}

function findById(id) {        
    return Travel.findByPk(id);     //inbuilt method find elemnts by particular id
}

function deleteById(id) {
    return Travel.destroy({ where: { id: id} });   //inbuilt method to delelte elemnts with particular id
}

function create(travel) {  //inbuilt method to create elemnts
    var newTravel = new Travel(travel);
    return newTravel.save();    //saving the newgig
}

function updateTravel(travel,id) {
    var updateTravel = {
        // request_id: travel.request_id,
        cause_travel: travel.cause_travel,
        source: travel.source,
        destination: travel.email,
        password: travel.password
    };
    return Travel.update(updateTravel, { where: { id: id } });
}
module.exports = travelDao;
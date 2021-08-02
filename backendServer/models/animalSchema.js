const mongoose = require('mongoose');

// Setting Schema as a type of mongoose schema
const Schema = mongoose.Schema;

// Defining animal schema
const animalSchema = new Schema({
    age_upon_outcome: {type:String},
    animal_id: {type:String},
    animal_type: {type:String},
    breed: {type:String},
    color: {type:String},
    date_of_birth: {type:String},
    datetime: {type:String},
    monthyear: {type:String},
    name: {type:String},
    outcome_subtype: {type:String},
    outcome_type: {type:String},
    sex_upon_outcome: {type:String}
});

// Defining database to be used for Animal data
const animalDB = mongoose.connection.useDb('AAC');

// Creating mongoose model with collection name animals, using definined schema
const animalInfo = animalDB.model('animals', animalSchema);

// Exporting model
module.exports = animalInfo;
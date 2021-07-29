const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const animalDB = mongoose.connection.useDb('AAC');

const animalInfo = animalDB.model('animals', animalSchema);

module.exports = animalInfo;
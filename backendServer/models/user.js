const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userDB = mongoose.connection.useDb('User');

const userInfo = userDB.model('users', userSchema);

module.exports = userInfo;
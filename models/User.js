const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthday: {
        type: Date,
    }
}); //dit model kent zowel de inlog als signup functie

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
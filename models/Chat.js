const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }, 
    channel: {
        type: Date,
        required: true
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
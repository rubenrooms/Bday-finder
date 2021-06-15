const { get } = require("../../../routes");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Chat = mongoose.model('Chat', chatSchema);

const getAll = (req, res) =>{
    res.json({
        "status": "succes",
        "data": {
            "chats": [ ]
        }
    });
}

const create = (req, res) =>{
    let chat = new Chat();
    chat.sender = "Ruben";
    chat.receiver = "kosmodod";
    chat.message = "wdj vnv?";
    chat.date = Date.now();
    chat.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not transfer"
            });
        }

        if(!err) {
            res.json({
                "status": "succes",
                "data": {
                    "chat": doc
                }
            });
        }
    });

    
}

module.exports.getAll = getAll;
module.exports.create = create;
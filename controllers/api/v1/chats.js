const Chat = require("../../../models/Chat");

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
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
    chat.sender = req.user.username;
    chat.message = req.body.text;
    chat.channel = req.user.birthday;
    chat.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not send message"
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
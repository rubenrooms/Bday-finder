const { get } = require("../../../routes");

const getAll = (req, res) =>{
    res.json({
        "status": "succes",
        "data": {
            "chats": [ ]
        }
    });
}

const create = (req, res) =>{
    res.json({
        "status": "succes",
        "data": {
            "chat": {
                "sender": "Ruben",
                "receiver": "kosmodod",
                "message": "wdj vnv?",
                "date": "5 aug. 2021", 
                "id": "1"
            }
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;
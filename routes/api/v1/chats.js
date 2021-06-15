const express = require('express');
const router = express. Router();

/* /api/v1/chats */

router.get("/", (req, res) =>{
    res.json({
        "status": "succes",
        "data": {
            "chats": [ ]
        }
    });
});

router.post("/", (req, res) =>{
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
});

module.exports = router;
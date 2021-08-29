const User = require("../../../models/User");

const getBirthdayById = (req, res) => {
    let id = req.params.id;
    console.log(id);
    User.findById(id).exec((err, doc) => {
        if (err) {
            res.json({
                status: "error",
                message: "Birthday not found"
            });
        }
        if (!err) {
            res.json({
                status: "succes",
                data: doc
            });
        }
    });
};

const getAllUsersByBirthday = (req, res) => {
    let birthday = req.params.birthday;
    console.log("jow");
    User.find({
        birthday: birthday
    })
    .exec((err, doc) => {
        if(err) {
            res.json({
                status: "error",
                message: "No users with the same birthday"
            });
        }
        if (!err) {
            res.json({
                status: "succes",
                data: doc 
            });
        }
    });
};

module.exports.getBirthdayById = getBirthdayById;
module.exports.getAllUsersByBirthday = getAllUsersByBirthday;
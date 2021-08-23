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

module.exports.getBirthdayById = getBirthdayById;
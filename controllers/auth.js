const User = require('../models/User');
const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    console.log(req.body);
    
    let username = req.body.username; //komt uit UI of postman
    let password = req.body.password;
     
    const user = new User({username: username}); //user object wordt aangemaakt
    await user.setPassword(password); // ww wordt geset en dit zorgt voor encryptie
    await user.save().then(result => {  // wordt gesaved via mongoose
        res.json({
            "status": "succes"
        })
    }).catch(error => {
        res.json({
            "status":"error"
        })
    }); 
};

module.exports.signup = signup;
const User = require('../models/User');
const passport = require('../passport/passport');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    let username = req.body.username; //komt uit UI of postman
    let password = req.body.password;
    let birthday = req.body.birthday;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    const user = new User({ 
        username: username,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday
    }); //user object wordt aangemaakt
    
    await user.setPassword(password); // ww wordt geset en dit zorgt voor encryptie
    await user.save().then(result => {  // wordt gesaved via mongoose
        
        console.log(result);
        
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, process.env.secret || config.get('jwt.secret'));
        
        res.json({
            "status": "succes",
            "data": {
                "token": token,
                "id": result._id,
                "birthday": birthday,
                "username": username
            }
        })

    }).catch(error => {
        res.json({
            "status": "error" 
        })
    });
};

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        console.log(result);
        if (!result.user) {
            return res.json({
                "status": "failed",
                "message": "Login failed",
            });
        }
        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
            }, process.env.secret || config.get('jwt.secret'));

        return res.json({
            "status": "succes",
            "data": {
                "token": token,
                "id": result.user._id,
                "birthday": result.user.birthday,
                "username": result.user.username
            },
        });
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
};

module.exports.signup = signup;
module.exports.login = login;
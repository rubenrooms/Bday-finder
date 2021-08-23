var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');
const usersController = require('../controllers/api/v1/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get("/birthday/:id", usersController.getBirthdayById);

module.exports = router;

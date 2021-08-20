const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

//dit is nodig voor sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
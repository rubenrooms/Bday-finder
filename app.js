const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiChatsRouter = require('./routes/api/v1/chats');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

//fout met db conn, video nog eens checken
mongoose.connect('mongodb+srv://adminUser:V@R@jpZ.44D4Myq@cluster0.vpr7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/chats', apiChatsRouter);

//data van html halen
app.get('/index', (req, res)=> {
  res.sendFile('index.html', { root: 'public'});
})

app.get('/signup', (req, res)=> {
  res.sendFile('signup.html', { root: 'public'});
})

app.get('/login', (req, res)=> {
  res.sendFile('login.html', { root: 'public'});
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
    message: err.message,
    error: err,
  });
});

var listener = app.listen(8888, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

module.exports = app;

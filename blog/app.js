// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registeRouter=require("./routes/registe");
var loginRouter=require("./routes/login");
var logoutRouter=require("./routes/logout");
var commitRouter=require("./routes/commit");
var commit_contentRouter=require("./routes/commit_content");
var tagRouter=require("./routes/tag");
var blog_detailRouter=require("./routes/blog-detail");
var delRouter=require("./routes/del");
var replyRouter=require("./routes/reply")


//导入自定义获取time的方法
// const getCurrentTime=require("./utils/get_time");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/",registeRouter);
app.use("/",loginRouter);
app.use("/",logoutRouter);
app.use("/",commitRouter);
app.use("/",commit_contentRouter);
app.use("/",tagRouter);
app.use("/",blog_detailRouter);
app.use("/",delRouter);
app.use("/",replyRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

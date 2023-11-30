var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require("./routes/home");
// order表数据
var orderListRouter = require("./routes/orderList")
// 新增数据
var addOrderRouter = require("./routes/addOrder")
// 搜索
var likeRouter = require('./routes/like');
// 删除
var delRouter = require('./routes/del');
//  修改
var updateRouter = require('./routes/update');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// 解析 url-encoded格式的表单数据
app.use(express.urlencoded({ extended: false }));
// 解析json格式的表单数据
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/orderList', orderListRouter);
// 上传数据
app.use('/addOrder', addOrderRouter);
// 搜索喜欢
app.use('/like', likeRouter);
// 删除
app.use('/del',delRouter);
app.use('/update',updateRouter);

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
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

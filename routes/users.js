var express = require('express');
var router = express.Router();
var db = require("../db/mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 这个是index下面的login 
router.post('/login', function(req, res, next) {
	//获取用户输入的值
	console.log(req.body);
	var userInfoData = req.body;
	var username = userInfoData.username
	var password = userInfoData.password
	//查询数据库
	var selectSql = "select * from users where username = ? and password = ? ";
	// 查询条件的参数
	var selectParams = [username,password];
	db.query(selectSql, selectParams, function(err, result) {
		if (result.length > 0) {
			res.end("登录成功");
		} else if (err) {
			throw err;
		} else {
			res.end("登陆失败");
		}   
	})
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require("../db/mysql");
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});


router.get('/home.html', function(req, res, next) {
	res.render('home');
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
	var selectParams = [username, password];
	db.query(selectSql, selectParams, function(err, result) {
		if (result.length > 0) {
			
			console.log("登陆成功");
			// res.render('home')
			res.render('main');
			// res.end("登陆成功");
		} else if (err) {
			throw err;
		} else {
			res.write('<head><meta charset="utf-8"/></head>');
			res.end("登陆失败")
		}
	})
});

module.exports = router;

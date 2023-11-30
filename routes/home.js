var express = require('express');
var router = express.Router();
var db = require("../db/mysql");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('home');
});



module.exports = router;

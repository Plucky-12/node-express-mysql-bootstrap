var express = require('express');
var router = express.Router();
var db = require("../db/mysql");
var multiparty = require("multiparty");


router.post('/',function(req,res,next){
	var form = new multiparty.Form();
	// 上传图片需要保存某一个目录，目录必须纯在
	form.uploadDir = '../public/upload';
	console.log(form.uploadDir);
	form.parse(req,function(err,fields,files){
		console.log("------------");
		// 图片路径
		var path = files.pic[0].path;
		console.log(fields);
			console.log(files);
		//  字段名字 需要设置Name
		var title = fields.title[0]
		var author = fields.author[0]
		var readCount = fields.readCount[0]
		var status = fields.status[0]
		
		var insertSql = "insert into orderlist (title,imgUrl,author,readCount,status) values (?,?,?,?,?)"
		var parseData =[title,path,author,readCount,status]
		console.log(parseData);
		db.query(insertSql,parseData,function(err,results){
			if (err) {	
				throw err
			} else{
				var selectSql = "select * from orderlist"
				db.query(selectSql,function(err,result){
					var pager = {}
					// 总记录条数
					pager.maxNum = result.length;
					// 每一页显示8条
					pager.pageSize = 5;
					// 一共多少页数
					pager.pageCount = parseInt(Math.ceil(pager.maxNum/pager.pageSize));
					// 当前第几页 默认第一页
					pager.pageCurrent = 1;
					// 修改了传递数据的数量
					var resultList = result.slice(
						(pager.pageCurrent-1)*pager.pageSize,(pager.pageCurrent-1)*pager.pageSize+pager.pageSize
					)
					if (err) {
						return err
					} else{
						console.log(resultList);
						res.render('orderList',{
							orderList:resultList,
							pager:pager
						});
					}
				});
			}
		})
	})
});


module.exports = router;
var express = require('express');
var router = express.Router();
var db = require("../db/mysql");


router.get("/",function(req,res,next){
		var like = req.query.like || req.query.selectVal;
		console.log(like);
		var pageNum = req.query.page;
		var selectSql = `select * from orderlist where title like '%${like}%'  `;
		console.log(selectSql);
		var paramsData = [like];
		db.query(selectSql,function(err,result){
			console.log(result.length);
			var pager = {}
			// 总记录条数
			pager.maxNum = result.length;
			// 每一页显示8条
			pager.pageSize = 10;
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
		})
		
})


module.exports = router;


var express = require('express');
var router = express.Router();
var db = require("../db/mysql");


router.get("/",function(req,res,next){
		var id = req.query.id;
		console.log(id);
		var deleteSql = `delete from orderlist where id =${id}  `;
		console.log(deleteSql);
		db.query(deleteSql,function(err,result){
				var selectSql = "select * from orderlist";
				// get 请求用query  post 请求用req.body
				db.query(selectSql,function(err,result){
					console.log(result.length);
					var pager = {}
					// 总记录条数
					pager.maxNum = result.length;
					// 每一页显示8条
					pager.pageSize = 5;
					// 一共多少页数
					pager.pageCount = parseInt(Math.ceil(pager.maxNum/pager.pageSize));
					// 当前第几页 默认第一页
					pager.pageCurrent =1;
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
		
})


module.exports = router;


var mysql= require('mysql');
var db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  database : 'xsqk'
});

db.connect((err, result) => {
  if (err) {
    console.log(err);
    console.log("数据库连接失败");
    return;
  }
  console.log(result);
  console.log("数据库连接成功");
});
module.exports=db;
 
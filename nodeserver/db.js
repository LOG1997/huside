let mysql = require("mysql");
// sql对应在父函数中写的sql语句
exports.base = (sql, data, callback) => {
  let connection = mysql.createConnection({
    host: "81.68.199.4", //本机连接不用改动
    user: "root", //root用户一般默认都有，可以不改
    password: "123456", //改成自己的密码
    database: "wxapp", //改成自己的数据库名（注意数据库名和表名的区别）
  });
  connection.connect();
  //如果不存在，创建数据库,数据库表Login
  connection.query(
    "create table if not exists Login\
     (`username` varchar(16) unique not null,`password` varchar(16) not null);",
    (error, results, fields) => {
      if (error) throw error;
      {
        console.log(error);
      }
      console.log(results);
    }
  );
  // 在数据库中查找对应数据
  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      console.log(error);
    }
    console.log(results);
    callback && callback(results, error);
  });
  connection.end();
};

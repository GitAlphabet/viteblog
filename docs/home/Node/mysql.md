### node 连接 mysql

#### 连接 Mysql

```js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '47.96.236.204',
  user: 'root',
  password: 'alphabet',
  database: 'stu_list',
  multipleStatements: true, // 开始多条查询语句
});
connection.connect();
connection.end();
```

#### 多条 sql

+ 多条 sql 分号隔开, results[results[0],results[1],...] 对应的查询结果，自行拼接数据结构;
+ 根据参数来查询，用 ‘?’ 来占位，connection.query 第二个参数是数组对应的查询参数. [params1,params2,...];
+ 分页查询使用 limit 查询，mysql 分页查询是从 0 开始的，需要 node 处理一下;
+ **get 请求获取的参数是 string,对应的 pageSize 和 pageNo 需要转换为 Number 类型；**
+ SELECT COUNT(*) as total FROM stu_list; 使用别名在 results 中好获取;
+ 模糊查询需要在参数里加 ‘%’;
+ 多表新建需要关联时使用 **LAST_INSERT_ID()** 来获取插入的 id;

```js
const { pageNo, pageSize } = req.query;
const sql =
  'SELECT * FROM stu_list limit ?,?;SELECT COUNT(*) as total FROM stu_list;SELECT * FROM stu_pos';
connection.query(
  sql,
  [(pageNo - 1) * pageSize, pageSize],
  (error, results, fields) => {
    if (error) throw error;
    callback(null, {
      data: {
        list: results[0],
        total: results[1][0].total,
        pageSize: 20,
        pageNo: 1,
      },
      success: true,
    });
  }
);
```

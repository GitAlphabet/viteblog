### Node 编写接口

#### 初始化

```bash
# 1、先创建一个文件夹,并初始化。
npm init
# 2、安装Express
npm install express --save
# 3、新建 app.js 和 index.html文件
```

#### app.js 代码如下

```js
let express = require('express');

// post请求需要 bodyParser
//bodyParser 解析json数据。bodyParser变量是对中间件的引用。
//请求体解析后，解析值都会被放到req.body属性，内容为空时是一个{}空对象。
let bodyParser = require('body-parser');
let app = express();
// 使用 application/json 解析
app.use(bodyParser.json());
//使用 application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({ extended: true }));

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 模拟假数据
let arr = [
  { id: 1, name: 'React', age: 2 },
  { id: 2, name: 'Vue', age: 3 },
  { id: 3, name: 'Angular', age: 4 },
];

// get请求
app.get('/api/all', function(req, res) {
  res.status(200);
  res.json(arr);
});

// get请求,通过 req.query 获取参数。
app.get('/api/some', function(req, res) {
  let id = req.query.id;
  let obj = arr.find((item) => {
    return item.id == id;
  });
  if (obj) {
    res.status(200);
    res.json(obj);
  }
});

// post请求,通过 req.body 获取参数。
app.post('/api/post', function(req, res) {
  let name = req.body.name;
  let obj = arr.find((item) => {
    return item.name == name;
  });
  if (obj) {
    res.status(200);
    res.json(obj);
  }
});

//配置服务端口
let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('http://localhost:3000', host, port);
});
```

::: tip post 请求
// bodyParser 解析 json 数据。bodyParser 变量是对中间件的引用。请求体解析后，解析值都会被放到 req.body 属性，内容为空时是一个{}空对象。  
let bodyParser = require('body-parser');  
// 使用 application/json 解析  
app.use(bodyParser.json());  
//使用 application/x-www-form-urlencoded 解析  
app.use(bodyParser.urlencoded({ extended: true }));
:::

::: warning 获取参数
1、post 请求: req.body  
2、get 请求:req.query
:::

#### index.html 里面的 js 代码如下

```js
<script>
$(() => {
      //get 请求所有数据
      $.ajax({
            url: `http://localhost:3000/api/all`,
            type: `get`,
      }).then((data) => {
            console.log(data);
            /* [
                  {id: 1,name: 'React', age: 2},
                  {id: 2,name: 'Vue',age: 3},
                  {id: 3,name: 'Angular',age: 4}
            ] */
      }).catch((err) => {
            console.log(err);
      })

      //get 请求 id 为 2 的数据
      $.ajax({
            url: `http://localhost:3000/api/some`,
            type: `get`,
            data: {id: 2}
      }).then((data) => {
            console.log(data);
            //{id: 2,name: 'Vue',age: 3}
      }).catch((err) => {
            console.log(err);
      })

      //post 请求 name 为 React 的数据
      $.ajax({
            url: `http://localhost:3000/api/post`,
            type: `post`,
            data: {name: 'React'}
      }).then((data) => {
            console.log(data);
            //[{id: 1,name: 'React', age: 2}]
      }).catch((err) => {
            console.log(err);
      })
})
</script>
```

#### 开启服务

```bash
node app.js
# 接着访问地址查看控制台即可
```

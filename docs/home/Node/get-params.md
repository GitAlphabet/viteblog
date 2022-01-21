### Express 解析请求参数

#### package.json

```json
{
  "dependencies": {
    "art-template": "^4.13.2",
    "express": "^4.17.1",
    "express-art-template": "^1.0.1"
  }
}
```

#### app.js

```js
const express = require('express');

const app = express();

// 注册模版 
// 参数1:文件的后缀名
app.engine('html', require('express-art-template'));

// 解析 body 的参数，之前是 body-Parser 中间件（已经启用）。
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 设置静态目录可以访问
app.use('/public/', express.static('./public/'));

let commentList = [
  { name: '张三', content: '你犯罪了。', time: '1999-99-99' },
  { name: '李四', content: '你诬陷。', time: '1999-99-99' },
];

// 通过 express res.render 渲染
// 默认渲染的是 views 下的文件。如需修改设置
// app.set('views', path.join(__dirname, 'xxx'));
app.get('/', (req, res) => {
  res.render('index.html', {
    commentList,
  });
});

app.get('/post', (req, res) => {
  res.render('post.html');
});

// get 直接通过 req.query 获取
// post 请求通过 req.body 获取
app.post('/post', (req, res) => {
  console.log(req.body);
  const obj = {
    ...req.body,
    time: '1999-99-99',
  };
  commentList = [...commentList, obj];
  res.redirect('/');
});
app.listen(3000);

```

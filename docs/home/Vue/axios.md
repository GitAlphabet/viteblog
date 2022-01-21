### Axios

#### 使用 npm 安装 axios

```bash
npm install axios --save
```

安装其他插件的时候，可以直接在 main.js 中引入并 Vue.use()，但是 axios 并不能 use，只能每个需要发送请求的组件中即时引入。
为了解决这个问题，有两种开发思路，一是在引入 axios 之后，修改原型链，二是结合 Vuex，封装一个 aciton。这里只说修改原型链的方式
改写原型链。

#### 首先在 main.js 中引入 axios

```js
import axios from 'axios'
```

这时候如果在其它的组件中，是无法使用 axios 命令的。所以我们将 axios 改写为 Vue 的原型属性。

```js
Vue.prototype.axios = axios
```

在其他组件中使用方式

```js
this.axios
  .get('url')
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err) {
    console.log(err)
  })
```

#### 配置 axios

实际上只有 url 是必须的，完整的 api 可以参考[https://www.kancloud.cn/yunye/axios/234845](https://link.jianshu.com?t=https://www.kancloud.cn/yunye/axios/234845)

1、对于 get 请求

```js
axios.get('/user', {
  params: {
    name: 'virus'
  }
})
```

2、对于 post 请求

```js
axios.post('/user', {
  name: 'virus'
})
```

3、一次性并发多个请求

```js
function getUserAccount() {
  return axios.get('/user/12345')
}
function getUserPermissions() {
  return axios.get('/user/12345/permissions')
}
axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function(acct, perms) {
    //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
  })
)
```

4、axios 可以通过配置（config）来发送请求

```js
//发送一个`POST`请求
axios({
  method: 'POST',
  url: '/user/1111',
  data: {
    name: 'virus'
  }
})
```

#### 完整的请求还应当包括 .then 和 .catch

```js
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})
```

当请求成功时，会执行 .then，否则执行 .catch。
这两个回调函数都有各自独立的作用域，如果直接在里面访问 this，无法访问到 Vue 实例,这时只要添加一个 .bind(this) 就能解决这个问题

```js
.then(function(res){
    console.log(this.data)
}.bind(this))
```

#### 请求方式的别名，这里对所有已经支持的请求方式都提供了方便的别名

```js
axios.request(config);
axios.get(url[,config]);
axios.delete(url[,config]);
axios.head(url[,config]);
axios.post(url[,data[,config]]);
axios.put(url[,data[,config]])
axios.patch(url[,data[,config]])
```

#### 另外，补充

vue cli 脚手架前端调后端数据接口时候的本地代理跨域问题，如我在本地 localhost 访问接口 https://api.douban.com/ 是要跨域的，相当于浏览器设置了一到门槛，会报错XMLHTTPRequest can not load https://api.douban.com/ Response to preflight request doesn’t pass access control…. 为什么跨域同源非同源自己去查吧，在 webpack 配置一下 proxyTable 就 OK 了，如下 config/index.js

```js
dev: {
    加入以下
    proxyTable: {
      '/api': {
        target: 'https://api.douban.com/',//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
        '^/api': '/'
          //这里理解成用‘/api’代替target里面的地址，
          //后面组件中我们掉接口时直接用api代替 比如我要调
          //用'https://api.douban.com//user/add'，直接写‘/api/user/add’即可
        }
      }
    },
```

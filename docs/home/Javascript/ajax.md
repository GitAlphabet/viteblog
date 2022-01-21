### 原生 ajax

#### json 转化为字符串

```js
function json2str(data) {
  //随机因子,解决IE浏览器只要URL相同就会返回上次的结果 的问题
  data.t = Math.random()
  //json转化为数组
  var arr = []
  for (var key in data) {
    //encodeURI 解决ie中文不支持问题
    arr.push(key + '=' + encodeURI(data[key]))
  }
  //数组转化为用"&"连接的字符串并返回
  return arr.join('&')
}
```

#### ajax 封装

```js
function ajax(options) {
  //预处理,传入的数据没有URL,直接return;
  if (!options.url) {
    return
  }
  options.type = options.type || 'get'
  options.timeout = options.timeout || 0
  options.data = options.data || null

  //将数据转换成字符串格式
  var str = json2str(options.data)
  //创建异步对象,兼容低版本的IE
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest()
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  //设置URL并发送
  if (options.type == 'get') {
    // 设置URL
    xhr.open(options.type, options.url + '?' + str, true)
    //发送求情
    xhr.send()
  } else {
    //设置URL
    xhr.open(options.type, options.url, true)
    //设置请求头部,必须写在open和send之间
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    //发送请求
    xhr.send(str)
  }

  //监听状态改变事件
  xhr.onreadystatechange = function() {
    //清除超时处理
    clearTimeout(timer)
    //判断状态,避免每次状态改变都会调用
    if (xhr.readyState == 4) {
      //进一步判断状态,防止404出现
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        options.success(xhr.responseText)
      } else {
        //返回状态码
        options.error(xhr.status)
      }
    }
  }
  
  //超时处理
  if (options.timeout) {
    var timer = setTimeout(function() {
      xhr.abort() //中断请求
    }, options.timeout)
  }
}
```

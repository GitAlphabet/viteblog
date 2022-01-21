### 访问图片返回403

#### 解决办法

html 中添加以下代码

```md
 <meta name="referrer" content="no-referrer" />
```

#### 原因

```md
默认http请求中会带有一个referrer字段，服务器端可以通过referrer值判断请求是否来自本站，若不是则返回403或者重定向返回其他信息，从而实现图片的防盗链。通过添加上面的html，告诉客户端不带这个referrer信息
```

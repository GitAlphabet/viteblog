### 路由模式

* hash 模式
* H5 history 模式

#### hash 模式

* hash 变化会触发路由的跳转，即浏览器的前进或者后退
* hash 变化不会刷新页面，spa必需的特点
* hash 永远不会提交到 server 端

```md
window.onhashchange 监听 hash 的变化。
location.href = '#login'。修改 hash
```

#### H5 history 模式

* 用url 规范路由，但跳转时不刷新页面
* history.pushState
* window.onpopstate

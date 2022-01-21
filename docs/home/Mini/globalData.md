### 全局变量（globalData）

#### 1、app.js中修改

```js
App({
    globalData: {
        userInfo: null
    },
  onLaunch() {
    this.globalData.userInfo = {
        name:'test',
        age:20
    }
  }
})
```

#### 2、其他页面中修改

```js
//获取应用实例
const app = getApp()
Page({
  onLoad() {
    console.log(app.globalData)
  },
})
```
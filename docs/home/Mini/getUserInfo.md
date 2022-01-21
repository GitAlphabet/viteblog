### 获取用户信息

```js
wx.showModal({
    title: '提示',
    content: '需要授权获取用户信息',
    success: (res) => {
        if (res.confirm) {
            wx.getUserProfile({
                desc: '你的用户信息将用于小程序',
                success: (res) => {
                    this.globalData.userInfo = res.userInfo;
                },
                fail: res => {
                    console.log(res)
                }
            })
        } else if (res.cancel) {
            console.log('用户点击取消')
        }
    }
})
```
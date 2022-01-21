### nextTick 和 set

#### 1、Vue.nextTick( [callback, context] )

1、参数

```html
{ Function } ;[callback]
{ Object } ;[context]
```

1、用法
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

```js
// 修改数据
this.msg = 'Hello'
// DOM 还没有更新
this.nextTick(function() {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
this.nextTick().then(function() {
  // DOM 更新了
})
```

::: tip
2.1.0 起新增：如果没有提供回调且在支持 Promise 的环境中，则返回一个 Promise。请注意 Vue 不自带 Promise 的 polyfill，所以如果你的目标浏览器不原生支持 Promise (IE：你们都看我干嘛)，你得自己提供 polyfill。
:::

#### 2、Vue.set( target, key, value )

1、参数

```html
{Object | Array} target
{string | number} key {any} value
```

2、用法
向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')

```js
export default {
  data() {
    return {
      obj: {}
    }
  },
  created() {
    fetchData()
      .then(res => {
        this.obj.children = res.list //Vue 无法探测普通的新增属性
        this.set(this.obj, 'children', res.list)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
```

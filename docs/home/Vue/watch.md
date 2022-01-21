### watch 注意点

#### 1、watch 监听方式

```js
// 监听对象需要深度监听（数组不需要）
watch: {
    obj: {
      handler: function(nVal, oVal) {
        // 处理逻辑
      }
      // 设置deep: true，将深度监听对象
      deep: true,
      // 设置 immediate: true,将立即以表达式的当前值触发回调，解决第一次传参不触发问题。
      immediate: true
    }
}
// 非对象类型监听方式
watch: {
    count: function(newVal,oldVal){
        // 处理逻辑
    }
}
```

::: warning 获取参数
注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
:::

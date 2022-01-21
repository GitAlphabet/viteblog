### 防抖与节流

#### 1、防抖（debounce）

- 所谓防抖，就是指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

```js
const debounce = (func, wait) => {
  let timeout
  return function() {
    const context = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
```

```js
const context = this
const args = [...arguments]
// 防抖函数的代码使用这两行代码来获取 this 和 参数，是为了让 debounce 函数最终返回的函数 this 指向不变以及依旧能接受到 e 参数。
```

#### 2、节流（throttle）

- 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率。

```js
const throttle = (func, wait) => {
  let timeout
  return function() {
    let context = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
```

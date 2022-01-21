### this 指向

#### 1、箭头函数

箭头函数的 this 是在创建它时外层 this 的指向。这里的重点有两个：

+ 创建箭头函数时，就已经确定了它的 this 指向。
+ 箭头函数内的 this 指向外层的 this。
+ **箭头函数中 this 不会被修改**

```js
func = () => {
  // 这里 this 指向取决于外层 this,不会被修改
  console.log(this)
}
func.bind(1)() // Window
```

#### 2、new

**当使用 new 关键字调用函数时，函数中的 this 一定是 JS 创建的新对象。**

#### 3、bind

**多次 bind 时只认第一次 bind 的值。**

```js
function func() {
  console.log(this)
}
func.bind(1).bind(2)() // 1
```

#### 4、apply 和 call

**apply() 和 call() 的第一个参数都是 this，区别在于通过 apply 调用时实参是放到数组中的，而通过 call 调用时实参是逗号分隔的。**

```js
function func() {
  console.log(this)
}
boundFunc = func.bind(1)
boundFunc.apply(2) // 1
```

#### 5、直接调用

**在函数不满足前面的场景，被直接调用时，this 将指向全局对象。在浏览器环境中全局对象是 Window，在 Node.js 环境中是 Global。**

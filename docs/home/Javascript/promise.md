### Promise 

#### 状态

```md
pending    // 进行中
fulfilled  // 已成功
rejected   // 已失败
```

**一旦状态改变，就不会再变**，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：**从pending变为fulfilled和从pending变为rejected**。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

then 和 catch 改变状态

+ **then 正常返回 resolved,里面有报错就返回 rejected。resolved 会继续触发 then 的回调。**
+ **catch 正常返回 resolved,里面有报错就返回 rejected。rejected 会继续触发 catch 的回调。**

```js
Promise.resolve().then(() => { 
    console.log(1) // 1
}).catch(() => { 
    console.log(2) // 不打印
}).then(() => {
    console.log(3) // 2
})
```

```js
Promise.resolve().then(() => { 
    console.log(1) // 1
    throw Error('Error')
}).catch(() => {
    console.log(2) // 2
}).then(() => {
    console.log(3) // 3
})
```

```js
Promise.resolve().then(() => { // rejected 触发 catch 回调
    console.log(1) // 1
    throw Error('Error')
}).catch(() => { // resolved 触发 then 回调
    console.log(2) // 2
}).catch(() => {
    console.log(3) // 不打印
})
```

#### Promise.all()

Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

上面代码中，**Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用Promise.resolve方法，将参数转为 Promise 实例**，再进一步处理。另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

p的状态由p1、p2、p3决定，分成两种情况。

* **只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled**，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
* **只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected**，此时第一个被reject的实例的返回值，会传递给p的回调函数。
  
::: warning
**注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。**

* **实例执行完catch方法后，也会变成resolved**，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。
* 如果实例没有自己的catch方法，就会调用Promise.all()的catch方法。
:::

#### Promise.any()

该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。**只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态**。

#### Promise.race()

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.race([p1, p2, p3]);
```

只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

#### Promise.allSettled()

Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，**不管是fulfilled还是rejected，包装实例才会结束。一旦结束，状态总是fulfilled**


#### 多个 Promise 串行

```js
function serialPromise(arr) {
    arr.reduce((pre, next, index, carr)=>{
        return pre.then(next)
    }, Promise.resolve())
}
```

**Array.prototype.reduce()**

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

* callback

|参数名|参数是否可选|描述|
|:-|:-|:-|
|accumulator|--|累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue）。|
|currentValue|--|数组中正在处理的元素。|
|index|可选|数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。|
|array|可选|调用reduce()的数组|

* initialValue 可选
  * **作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。**

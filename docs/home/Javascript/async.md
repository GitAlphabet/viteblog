### async 函数

+ async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
+ await 相当于 Promise 的 then。
+ try...catch 可捕获异常，代替了 Promise 的 catch。

```js
async function async1() {
  console.log(1)
  await async2()
  console.log(2)
}
async function async2() {
  console.log(3)
}
console.log('start')
async1()
console.log('end')
// start 1 3 end 2
```
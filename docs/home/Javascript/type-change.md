### valueOf和toString

#### 1、如何让(a==1&&a==2&&a==3)为true ？（值相等）

* 我们先考虑到的应该是a应该是什么类型，在a==**的时候发生了什么？再去考虑a应该等于什么。
* 如果a是一个对象，那在执行a==的时候首先会去先执行valueOf方法，如果没有value方法，就会去执行toString方法。因此我们可以改写a对象的toString方法

```js
let a = {
    n: 1,
    toString: function(){
        return a.n++
    }
  }
if( a==1 && a==2 && a==3){
    console.log('true')
} else {
    console.log('false')
}  
```

* 如果a是一个数组，在数组转换成字符串的时候，会去实行数组的join方法，那我们改写一下join方法。

```js
let a = [1,2,3];
a.join = a.shift;
if( a==1 && a==2 && a==3){
    console.log('true')
} else {
    console.log('false')
} 
```

#### 2、如何让(a === 1 && a === 2 && a === 3)为true ？（值、类型都相等）

* Object.defineProperty

```js
var num = 1;
Object.defineProperty(window, "a", {
  get() {
    return this.num++;
  }
});

if (a === 1 && a === 2 && a === 3) {
  console.log("true");
}
```

::: tip
上面我们就是劫持全局window上面的a，当a每一次做判断的时候都会触发get属性获取值，并且每一次获取值都会触发一次函数实行一次自增，判断三次就自增三次，所以最后会让公式成立。
:::

#### 3、请写出符合下面的的答案

```js
f(1) = 1;
f(1)(2) = 2; 
f(1)(2)(3) = 6;
```

```js
function f() {
  let args = [...arguments];
  let add = function() {
    args.push(...arguments);
    return add;
  };
  add.toString = function() {
    return args.reduce((a, b) => {
      return a + b;
    });
  };
  return add;
}
console.log(f(1)(2)(3)); // 6
```

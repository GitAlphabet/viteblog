### ES6(数组的扩展)

#### 1.扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3]) // 1 2 3
console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5
[...document.querySelectorAll('div')]// [<div>, <div>, <div>]
```

#### 该运算符主要用于函数调用

```js
function push(array, ...items) {
  array.push(...items)
}
function add(x, y) {
  return x + y
}
const numbers = [4, 38]
add(...numbers) // 42
```

上面代码中，array.push(...items)和 add(...numbers)这两行，都是函数的调用，它们的都使用了扩展运算符。该运算符将一个数组，变为参数序列。

扩展运算符与正常的函数参数可以结合使用，非常灵活。

```js
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);
扩展运算符后面还可以放置表达式。
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
如果扩展运算符后面是一个空数组，则不产生任何效果。
[...[], 1]// [1]
```

#### 另一个例子是通过 push 函数，将一个数组添加到另一个数组的尾部

```js
// ES6 的写法
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
```

#### 复制数组

```js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
上面的两种写法，a2都是a1的克隆。
```

#### 合并数组

```js
扩展运算符提供了数组合并的新写法。
// ES5
[1, 2].concat(more)
// ES6
[1, 2, ...more]

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6的合并数组
[...arr1, ...arr2, ...arr3]// [ 'a', 'b', 'c', 'd', 'e' ]
```

#### 2.Array.from()

Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

```js
下面是一个类似数组的对象，Array.from将它转为真正的数组。
let arrayLike = {'0': 'a','1': 'b','2': 'c',length: 3};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

#### 3.Array.of()

Array.of 方法用于将一组值，转换为数组。

```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

#### 4.数组实例的 find() 和 findIndex()

数组实例的 find 方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 true 的成员，然后返回该成员。如果没有符合条件的成员，则返回 undefined。

```js
[1, 4, -5, 10].find((n) => n < 0)// -5
上面代码找出数组中第一个小于 0 的成员。

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

上面代码中，find 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

#### 数组实例的 findIndex 方法的用法与 find 方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

```js
;[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9
}) // 2
```

这两个方法都可以接受第二个参数，用来绑定回调函数的 this 对象。

```js
function f(v) {
  return v > this.age
}
let person = { name: 'John', age: 20 }
;[10, 12, 26, 15].find(f, person) // 26
```

上面的代码中，find 函数接收了第二个参数 person 对象，回调函数中的 this 对象指向 person 对象。

#### 5.数组实例的 fill()

fill 方法使用给定值，填充一个数组。

```js
['a', 'b', 'c'].fill(7)// [7, 7, 7]
new Array(3).fill(7)// [7, 7, 7]
上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['a', 'b', 'c'].fill(7, 1, 2)// ['a', 7, 'c']
上面代码表示，fill方法从 1 号位开始，向原数组填充 7，到 2 号位之前结束。
```

#### 6.数组实例的 entries()，keys() 和 values

```js
ES6 提供三个新的方法——`entries()`，`keys()`和`values()`——用于遍历数组。它们都返回一个遍历器对象，可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历。
let arr = ['a', 'b'];
for (let index of arr.keys()) {
  console.log(index);
}
// 0
// 1
for (let elem of arr.values()) {
  console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of arr.entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

#### 7.数组实例的 includes()

```js
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法。

[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，
则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

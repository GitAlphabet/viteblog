### Arguments对象

arguments 是一个对应于传递给函数的参数的类数组对象。

#### 描述

```markdown
arguments对象是所有（非箭头）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处,以此类推。
```

::: tip
arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
:::

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

#### 对参数使用 typeof

typeof参数返回 'object'。

```js
console.log(typeof arguments);    // 'object'
// arguments 对象只能在函数内使用
function test(a){
    console.log(a,Object.prototype.toString.call(arguments));
    console.log(arguments[0],arguments[1]);
    // 可以使用索引确定单个参数的类型。
    console.log(typeof arguments[0]); 
}
test(1);
// 1 "[object Arguments]"
// 1 undefined
// number
```

#### 属性

```js
arguments.callee
// 指向当前执行的函数。

arguments.caller 
// 指向调用当前函数的函数。

arguments.length
// 指向传递给当前函数的参数数量。

arguments[@@iterator]
// 返回一个新的Array迭代器对象，该对象包含参数中每个索引的值。

注意:现在在严格模式下，arguments对象已与过往不同。arguments[@@iterator]不再与函数的实际形参之间共享，同时caller属性也被移除。
```

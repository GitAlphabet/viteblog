### call、apply、bind 详解

#### apply(context,[])

apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。

```js
const obj = {
    name : 'obj'
}
function fun(firstName, lastName){
    console.log(firstName + ' ' + this.name + ' ' + lastName);
}
fun.apply(obj, ['A', 'B']);    // A obj B
```

obj 是作为函数上下文的对象，函数 fun 中 this 指向了 obj 这个对象。参数 A 和 B 是放在数组中传入 fun 函数，分别对应 fun 参数的列表元素。

#### call(context,a,b,...)

call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。

```js
const obj = {
    name: 'obj'
}
function fun(firstName, lastName) {
    console.log(firstName + ' ' + this.name + ' ' + lastName);
}
fun.call(obj, 'A', 'B');       // A obj B
```

如果你的参数本来就存在一个数组中，那自然就用 apply，如果参数比较散乱相互之间没什么关联，就用 call。

#### apply 和 call 的用法

+ 改变 this 指向

```js
const obj = {
    name: 'obj'
}
function fun() {
    console.log(this.name);
}
fun.call(obj);       // obj

// 我们知道，call 方法的第一个参数是作为函数上下文的对象，这里把 obj 作为参数传给了 fun
// 此时函数里的 this 便指向了 obj 对象。此处 fun 函数里其实相当于:

function fun() {
    console.log(obj.name);
}
```

+ 借用别的对象的方法

```js
const Person1  = function () {
    this.name = 'obj';
}
const Person2 = function () {
    this.getname = function () {
        console.log(this.name);
    }
    Person1.call(this);
}
const person = new Person2();
person.getname();       // obj
// Person1 的 this 变成 Person2的this，并执行一遍Person1函数
// Person2就多了一个name属性
```

从上面我们看到，Person2 实例化出来的对象 person 通过 getname 方法拿到了 Person1 中的 name。因为在 Person2 中，Person1.call(this) 的作用就是使用 Person1 对象代替 this 对象，那么 Person2 就有了 Person1 中的所有属性和方法了，相当于 Person2 继承了 Person1 的属性和方法。

+ 调用函数。apply、call 方法都会使函数立即执行，因此它们也可以用来调用函数。

```js
function fun() {
    console.log('obj');
}
fun.call();   // obj
```

#### call 和 bind 的区别

在 EcmaScript5 中扩展了叫 bind 的方法，在低版本的 IE 中不兼容。它和 call 很相似，接受的参数有两部分，第一个参数是是作为函数上下文的对象，第二部分参数是个列表，可以接受多个参数。
它们之间的区别有以下两点。

+ bind 发返回值是函数

```js
const obj = {
    name: 'obj'
}
function func() {
    console.log(this.name);
}
const fun = func.bind(obj); // obj
fun();  
```

**bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 func 中的 this 并没有被改变，依旧指向全局对象 window。**

+ 参数的使用

```js
function func(a, b, c) {
    console.log(a, b, c);
}
const func1 = func.bind(null,'obj');

func('A', 'B', 'C');            // A B C
func1('A', 'B', 'C');           // obj A B
func1('B', 'C');                // obj B C
func.call(null, 'obj');         // obj undefined undefined
```

**call 是把第二个及以后的参数作为 func 方法的实参传进去，而 func1 方法的实参实则是在 bind 中参数的基础上再往后排。**

ES6 版本

```js
Function.prototype.bind = function(context, ...args) {
    const self = this;
    return function(...rest) {
        return self.apply(context,[...args, ...rest]);
    }
}
```

在低版本浏览器没有 bind 方法，我们也可以自己实现一个。

```js
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        const self = this;                          // 保存原函数
        const context = [].shift.call(arguments);   // 保存需要绑定的this上下文
        const args = [].slice.call(arguments);       // 剩余的参数转为数组
        return function () {                        // 返回一个新函数
            return self.apply(context,[].concat.call(args, [].slice.call(arguments)));
        }
    }
}
```

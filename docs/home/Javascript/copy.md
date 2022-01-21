### 浅拷贝与深拷贝

#### Object.assign()

```js
Object.assign() 只能浅拷贝。
let obj1 = {a:1}
let obj2 = Object.assign({},obj1)
obj2.a = 10;
console.log(obj1,obj2);
//打印: obj1:{a:1}  obj2:{a:10}

let obj1 = {a:1,b:{c:1}}
let obj2 = Object.assign({},obj1)
obj2.b.c = 10;
console.log(obj1,obj2);
//打印: obj1:{a:1,b:{c:10}}  {a:1,b:{c:10}}
//里面继续传址的，所以一者修改另外也修改了，这里只能使用深拷贝。
```

#### 深拷贝

```js
let obj1 = { a: 1, b: { c: 1 } }
let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.b.c = 10
console.log(obj1, obj2)
//打印: obj1:{a:1,b:{c:1}}  {a:1,b:{c:10}}
//此方法是将要进行深拷贝的对象用 JSON.stringify() 字符串化，然后用 JSON.parse() 解析
```

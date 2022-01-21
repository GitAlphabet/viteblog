### 逻辑运算符

#### 1、??

`??` 和 `||` 的意思有点相似，但是又有点区别, `??` 相较 `||` 比较严谨, 当值等于 `0` 的时候 `||` 就把他给排除了，但是`??` 不会

```js
console.log(null || 1)        // 1
console.log(null ?? 1)        // 1
console.log(undefined || 1)   // 1
console.log(undefined ?? 1)   // 1
console.log(0 || 1)           // 1
console.log(0 ?? 1)           // 0
```

#### 2、?:

`?:`是指可选参数，可以理解为参数自动加上`undefined`

```js
function add(x: number, y?: number) {
  return x + (y || 0);
}
add(1); // 1
```

#### 3、?.

`?.` 的意思基本和 && 是一样的 ( a?.b 相当于 a && a.b ? a.b : undefined )

```js
const a = {
  b: { 
    c: 1
  }
};
console.log(a?.b?.c);              // 1
console.log(a && a.b && a.b.c);    // 1
```

#### 4、!.

`!.`的意思是断言，告诉ts你这个对象里一定有某个值

```js
const a = {
  b: { 
    c: 1
  }
};
console.log(a!.b!.c); // 1
```

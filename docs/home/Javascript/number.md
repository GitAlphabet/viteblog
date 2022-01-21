### ES6 数值

#### Number.parseInt(), Number.parseFloat()

ES6 将全局方法 parseInt()和 parseFloat()，移植到 Number 对象上面，行为完全保持不变。

```js
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。

Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true
```

#### Math.trunc()

Math.trunc 方法用于去除一个数的小数部分，返回整数部分。

```js
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

对于非数值，Math.trunc内部使用Number方法将其先转为数值。

Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0

对于空值和无法截取整数的值，返回NaN。

Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```

#### Math.sign()

Math.sign 方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

```js
它会返回五种值。

参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。

Math.sign('')  // 0
Math.sign(true)  // +1
Math.sign(false)  // 0
Math.sign(null)  // 0
Math.sign('9')  // +1
Math.sign('foo')  // NaN
Math.sign()  // NaN
Math.sign(undefined)  // NaN
对于没有部署这个方法的环境，可以用下面的代码模拟。

Math.sign = Math.sign || function(x) {
  x = +x; // convert to a number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
```

#### Math.cbrt()

Math.cbrt 方法用于计算一个数的立方根。

```js
Math.cbrt(-1) // -1
Math.cbrt(0)  // 0
Math.cbrt(1)  // 1
Math.cbrt(2)  // 1.2599210498948734
对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。

Math.cbrt('8') // 2
Math.cbrt('hello') // NaN
对于没有部署这个方法的环境，可以用下面的代码模拟。

Math.cbrt = Math.cbrt || function(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
};
```

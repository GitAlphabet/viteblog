### React 中使用 CSS Module

CSS 的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。
产生局部作用域的唯一方法，就是使用一个独一无二的 class 的名字，不会与其他选择器重名。这就是 CSS Modules 的做法

#### 局部作用域

React 中的 App.js

```js
import React from 'react'
import style from './App.css'
export default () => {
  return <h1 className={style.title}>Hello World</h1>
}
```

上面代码中，我们将样式文件 App.css 输入到 style 对象，然后引用 style.title 代表一个 class。

```css
/* 显式的局部作用域语法
:local(.className)
  color: red;
} */

.title {
  color: red;
}
```

构建工具会将类名 style.title 编译成一个哈希字符串。

```html
<h1 class="_3zyde4l1yATCOkgn-DBWEL">
  Hello World
</h1>
```

App.css 也会同时被编译。

```css
._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}
```

这样一来，这个类名就变成独一无二了，只对 App 组件有效。

#### 全局作用域

CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的 class，都不会被编译成哈希字符串。
App.css 加入一个全局 class。

```css
.title {
  color: red;
}
:global(.title) {
  color: green;
}
```

App.js 使用普通的 class 的写法，就会引用全局 class。

```js
import React from 'react'
import styles from './App.css'

export default () => {
  return <h1 className="title">Hello World</h1>
}
```

#### Class 的组合

在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。

在 App.css 中，让.title 继承.className 。

```css
.className {
  background-color: blue;
}

.title {
  composes: className;
  color: red;
}
```

App.js 不用修改。

```js
import React from 'react'
import style from './App.css'

export default () => {
  return <h1 className={style.title}>Hello World</h1>
}
//红色字，蓝色背景。
```

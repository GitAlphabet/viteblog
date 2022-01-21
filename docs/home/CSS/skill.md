### CSS常见技巧

#### 1、文本超出部分显示省略号

```css
// 单行
div {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

// 多行
div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; // 最多显示几行
  overflow: hidden;
}
```

#### 2、设置input 的placeholder的字体样式

```css
input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: red;
}
input::-moz-placeholder { /* Firefox 19+ */  
    color: red;
}
input:-ms-input-placeholder { /* IE 10+ */
    color: red;
}
input:-moz-placeholder { /* Firefox 18- */
    color: red;
}
<input type="text" placeholder="请设置用户名">
```

#### 3、纯CSS绘制三角形

```css
/* 正三角 */
.up-triangle {
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 0 25px 40px 25px;
   border-color: transparent transparent rgb(245, 129, 127) transparent;
 }

 /* 倒三角 */
 .down-triangle {
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 40px 25px 0 25px;
   border-color:  rgb(245, 129, 127) transparent transparent transparent;
 }

```

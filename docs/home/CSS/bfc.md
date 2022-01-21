### BFC(块格式化上下文)

#### 块格式化上下文（Block Formatting Context）及其工作原理

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

* float的值不是none.
* position的值不是static或relative.
* display的值是table-cell、table-caption、inline-block、flex、或inline-flex。
* overflow的值不是visible。

::: tip
在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。  
两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。
:::

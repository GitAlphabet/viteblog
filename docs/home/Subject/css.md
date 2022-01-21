### CSS 面试题

#### 1、line-height 继承

```css
body{
    font-size:40px;
    line-height:20px; // p 标签 line-height 为20px
    line-height:2;    // p 标签 line-height 为40px(20*2)
    line-height:200%;  // p 标签 line-height 为80px(40*2)
}
p{
    font-size:20px;
}
```

+ line-height 为具体的数值时，就是多少 px;
+ line-height 为具体的比例时，当前标签的font-size * line-height;
+ **line-height 为具体的百分比时，当前继承标签的 font-size * line-height 单位为 px;**
  
#### 2、link 和@import 的区别

+ link属于HTML标签，而@import是CSS提供的;
+ 页面被加载的时，**link会同时被加载，而@import引用的CSS会等到页面被加载完再加载**;
+ import只在IE5以上才能识别，而link是HTML标签，无兼容问题;
+ link方式的样式的权重高于@import的权重.
  
#### 3、margin 纵向重叠问题

+ 相邻元素的 margin-top 和 margin-bottom 会发生重叠。（取最大值）
+ 空白的 p 标签也会重叠。
  
#### 4、margin 负值问题

+ margin-top 和 margin-left 负值,元素向上、向左移动。
+ margin-right 负值,右侧元素左移，自身不受影响。
+ margin-bottom 负值,下侧元素上移，自身不受影响。

#### 5、盒模型

+ IE盒模型：width 指 content+padding+border
+ 标准盒模型 ：width指content部分的宽度
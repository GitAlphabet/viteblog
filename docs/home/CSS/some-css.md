### CSS 部分属性

#### 1、background-attachment

如果文档比较长，那么当文档向下滚动时，背景图像也会随之滚动。当文档滚动到超过图像的位置时，图像就会消失。
您可以通过 background-attachment 属性防止这种滚动。通过这个属性，可以声明图像相对于可视区是固定的（fixed），因此不会受到滚动的影响：

```css
background-attachment: fixed;
```

#### 2、-webkit-line-clamp

可以把 块容器 中的内容限制为指定的行数。并且在超过行数后，在最后一行显示"..."

```css
display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
-webkit-box-orient: vertical; /*值必须为vertical*/
-webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
overflow: hidden;
```

#### 3、caret-color

用来定义插入光标（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 | 的东西。

```css
caret-color: red;
```

#### 4、object-fit

object-fit: 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

```css
object-fit: fill ｜contain ｜cover｜none;
```

* contain 包容 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，较短的边会出现自动填充的空白。
* cover 覆盖 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，按照图片最短的边，纳入父容器为基准。较长的边会溢出。
* none 和父容器的宽高没关系。展示其图片最原始的宽高比，以自身图片的“中心”为基点，放置到父容器的“中心”位置。
* scale-down 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
如果图片比父容器尺寸大，那么按照 contain 的效果，如果图片比父容器小，那么按照 none 的效果。

#### 5、object-position

object-position:属性来指定被替换元素的内容对象在元素框内的对齐方式。

```css
object-position: 10px 10px; 
```

* 可以设置 px，第一个值代表距离父容器左边的距离，第二个值代表距离父容器顶部的距离。
* 只有一个数值则只代表距离父容器左侧的距离。也可以设置%数值，但此时只有某一边有空白才会起作用，如果没有空白，刚好铺满父元素，则不起作用。设置 px 就没有这样的问题，任何之后都会起作用。
* sobject-position: right top;可以设置关键字，第一个值关键字可设置（left|center|right），第二个关键字可设置(top|center|bottom),此时不表示距离左侧或者顶部的距离，而表示放置在父元素的什么位置。拉变形，宽度和高度都被拉到父容器的 100%，以适应父容器

#### 6、scroll-behavior

当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，CSS 属性 scroll-behavior 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。

```css
scroll-behavior: smooth | auto;
```

* auto 滚动框立即滚动。
* smooth 滚动框通过一个用户代理预定义的时长、使用预定义的时间函数，来实现平稳的滚动，用户代理应遵循其平台的约定，如果有的话。

#### 7、:out-of-range / :in-range

```css
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
input:in-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

* :out-of-range CSS 伪类 表示一个 input 元素，其当前值处于属性 min 和 max 限定的范围外。
* :in-range CSS 伪类 表示一个 input 元素，其当前值处于属性 min 和 max 限定的范围内。
  
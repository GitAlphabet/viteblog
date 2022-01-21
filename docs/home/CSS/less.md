### Less

#### 安装 less

```bash
npm install  less -g
```

#### 安装 less-plugin-clean-css

```bash
npm install -g less-plugin-clean-css
```

#### 压缩

```bash
lessc -x
lessc --compress
```

#### 编译 less

```bash
lessc a.less a.css                          //不压缩代码
lessc -x a.less a.css                      //压缩代码
```

#### 混入[](http://lesscss.cn/features/#features-overview-feature-mixins)

混合是一种将一组属性从一个规则集合（另一个规则集合）（“混入”）的方式。所以说我们有以下班级：

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

我们希望在其他规则集内使用这些属性。那么，我们只需要放下我们想要属性的类的名称，如下所示：

```css
#menu a {
  color: #111;
  .bordered;
}
.post a {
  color: red;
  .bordered;
}
```

#### 嵌套规则[](http://lesscss.cn/features/#features-overview-feature-nested-rules)

Less 使您能够使用嵌套代替或与级联结合使用。假设我们有以下 CSS：

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

在更少的情况下，我们也可以这样写：

```css
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

生成的代码更简洁，并模仿 HTML 的结构。

您也可以使用此方法将伪选择器与您的 mixin 捆绑在一起。这里是经典的 clearfix hack，重写为 mixin（`&`代表当前选择器父代）：

```css
.clearfix {
  display: block;
  zoom: 1;
  &:after {
    content: ' ';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

#### 拼接字符

```css
.bg-img(@url){
  background-image: url("../../components/@{url}@2x.png");
}
```

#### 概观[](http://lesscss.cn/features/#variables-feature-overview)

在您的样式表中看到相同的值重复数十次（*如果不是几百次）*并不罕见：

```css
a,
.link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
```

变量通过为您提供从单个位置控制这些值的方式使您的代码更易于维护：

```css
// Variables
@link-color: #428bca; // sea blue
@link-color-hover: darken(@link-color, 10%);
// Usage
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```

#### 网址[](http://lesscss.cn/features/#variables-feature-urls)

```css
// Variables
@images: "../img";
// Usage
body {
  color: #444;
  background: url('@{images}/white-sand.png');
}
```

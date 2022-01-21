### Markdown 基础语法

#### 1、标题

```markdown
多少个 # 代表几级标题
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

#### 2、字体

```markdown
加粗：要加粗的文字左右分别用两个*号包起来
斜体：要倾斜的文字左右分别用一个*号包起来
斜体加粗：要倾斜和加粗的文字左右分别用三个*号包起来
删除线：要加删除线的文字左右分别用两个~~号包起来

**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

**这是加粗的文字**

_这是倾斜的文字_`

**_这是斜体加粗的文字_**

~~这是加删除线的文字~~

#### 3、图片

```markdown
![图片alt](图片地址 ''图片title'')
图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
![vue](https://cn.vuejs.org/images/logo.png "vue")
```

![vue](https://cn.vuejs.org/images/logo.png "vue")

#### 4、超链接

```markdown
[向往飞翔的小蚂蚁博客](https://gitalphabet.github.io/)
```

[向往飞翔的小蚂蚁博客](https://gitalphabet.github.io/)

#### 5、引用

```markdown
在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>n个
>这是引用的内容
```

#### 6、分割线

```markdown
三个或者三个以上的 - 或者 * 都可以。
```

> 这是引用的内容

#### 7、列表（二级列表前面加四个空格）

```markdown
无序列表用 - + * 任何一种都可以
- 列表内容
+ 列表内容
* 列表内容
注意：- + * 跟内容之间都要有一个空格
```

- 列表内容

* 列表内容

+ 一级列表
  + 二级列表

#### 8、表格

```markdown
|这是居左列|这是居中列|这是居右列|
|:----|:----:|----:|
|居左|居中|居右|

-左边加：表示文字居左，文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

|居左|居中|居右|
|:----|:----:|----:|
|居左|居中|居右|

#### 9、代码

当行代码：
`hello,向往飞翔的小蚂蚁!`

多行代码：

(```) 后面的 text 此处有很多种，下面有介绍。

````
``` markdown
hello,向往飞翔的小蚂蚁!
hello,向往飞翔的小蚂蚁!
hello,向往飞翔的小蚂蚁!
```
````

```markdown
hello,向往飞翔的小蚂蚁!
```

```markdown
 hello,向往飞翔的小蚂蚁!
 hello,向往飞翔的小蚂蚁!
 hello,向往飞翔的小蚂蚁!
```

#### 10、代码高亮

| 名称           | 关键字                |
| :------------- | :-------------------- |
| text           | text,plain            |
| XML            | xml,xhtml,xslt,html   |
| JavaScript     | js,jscript,javascript |
| CSS            | css                   |
| SASS&SCSS      | sass,scss             |
| Shell          | bash,shell            |
| PHP            | php                   |
| Java           | java                  |
| Python         | py,python             |
| C              | cpp,c                 |
| C#             | c#,c-sharp,csharp     |
| Objective C    | objc,obj-c            |
| swift          | swift                 |
| GO             | go,golang             |
| R              | r,s,splus             |
| Ruby           | ruby,rails,ror,rb     |
| Perl           | perl,pl,Perl          |
| diff&patchdiff | patch                 |

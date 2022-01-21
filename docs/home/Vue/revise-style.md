### vue 修改 UI 库的样式

#### CSS

```css
/deep/ .ivu-dropdown-rel {
    position: absolute!important;
    right: 30px !important;
    top: 20px !important;
}
只在此组件生效，其他组件还是默认样式。
```

#### 父组件修改子组件的样式(深选择器)

如果想对设置了 scoped 的子组件里的元素进行控制可以使用 ’>>>’ 或者 ’deep’

```html
// 父组件
<template>
  <div id="app">
    <gHeader></gHeader>
  </div>
</template>

<style lang="css" scoped>
  .gHeader /deep/ .name{ //第一种写法
    color:red;
  }
  .gHeader >>> .name{   //二种写法
    color:red;
  }
</style>

// 子组件
<div class="gHeader">
  <div class="name"></div>
</div>
```

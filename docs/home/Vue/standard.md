### Vue 代码风格指南

#### 模板中的组件名大小写

```html
<!-- bad -->
<!-- 在单文件组件和字符串模板中 -->
<mycomponent />
<!-- 在单文件组件和字符串模板中 -->
<myComponent />
<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>
```

```html
<!-- good -->
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />
<!-- 在 DOM 模板中 -->
<my-component></my-component>
或者
<!-- 在所有地方 -->
<my-component></my-component>
```

#### Prop 定义

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

```js
// bad
// 这样做只有开发原型系统时可以接受
props: ['status']
```

```js
// good
props: {
  status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

#### v-if、v-else

如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 div 元素)。
默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现意料之外的结果。

```html
<!-- bad -->
<div v-if="error">
  错误：{{ error }}
</div>
<div v-else>
  {{ results }}
</div>
```

```html
<!-- good -->
<div v-if="error" key="search-status">
  错误：{{ error }}
</div>
<div v-else key="search-results">
  {{ results }}
</div>
```

#### 避免 v-if 和 v-for 用在一起 必要

永远不要把 v-if 和 v-for 同时用在同一个元素上。

```html
<!-- bad -->
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>

<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

::: tip good
为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。
:::

```html
<!-- good -->
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>

<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

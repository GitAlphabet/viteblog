### 路由传参

#### 1、取代与 \$route 的耦合

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }],
})
```

#### 2、通过 props 解耦

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>',
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false },
    },
  ],
})
```

#### 3、模式

- 布尔模式
  - 如果 props 被设置为 true，route.params 将会被设置为组件属性。
- 对象模式
  - 如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: false },
    },
  ],
})
```

- 函数模式
  - 你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```js
const router = new VueRouter({
  routes: [
    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  ]
})
// URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。
// 请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 props，请使用包装组件，这样 Vue 才可以对状态变化做出反应。
```

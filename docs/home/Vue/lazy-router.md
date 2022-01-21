### vue-router 路由懒加载

```js
// router 文件夹下的 index.js。
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const SingerList = (resolve) => {
  import('components/singerList').then((module) => {
    resolve(module)
  })
}
const SingerDetail = (resolve) => {
  import('components/singerDetail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/singerList'
    },
    {
      path: '/singerList',
      component: SingerList,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/singerList'
    },
    {
      path: '/singerList',
      component: () => import('components/singerList.vue'),
      children: [
        {
          path: ':id',
          component: () => import('components/singerDetail.vue')
        }
      ]
    }
  ]
})
```

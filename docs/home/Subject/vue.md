### Vue 面试题

#### 1、Proxy 与 Object.defineProperty 优劣对比

Proxy 的优势如下:

```md
Proxy 可以直接监听对象而非属性；
Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
```

Object.defineProperty 的优势如下:

```md
兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平
```

#### 2、computed 和 watch，methods 的区别

+ computed： **有缓存，data 不变不会重新计算；提高性能**。
+ computed 为什么需要缓存？简单说就是可以提高性能。假设我们有一个性能开销比较大的计算属性A,它需要遍历一个巨大的数组做大量的计算，然后我们可能有其他的属性依赖于A，如果没有缓存，将不可避免的多次执行A 的getter，如果不希望有缓存请用方法代替
+ computed 和 watch的使用场景：如果一个数据需要经过复杂计算就用 computed；如果一个数据需要被监听并且对数据做一些操作就用watch；watch擅长处理的场景：一个数据影响多个数据；computed擅长处理的场景：一个数据受多个数据影响

#### 3、Vue 的性能优化

+ 异步渲染（合并data修改）
+ $nextTick 在DOM更新后触发回调
+ 合理使用 v-if 和 v-show
+ 合理使用 computed、keep-alive
+ v-for 中加 key
+ 自定义事件和DOM事件及时销毁（beforeDestory）
+ 合理使用异步组件（路由、组件懒加载）
+ data 层级不要太深，减少内部递归次数。

#### 4、getCurrentInstance
getCurrentInstance 支持访问内部组件实例，用于高阶用法或库的开发。

+ **getCurrentInstance 只能在 setup 或生命周期钩子中调用。**

```js
import { getCurrentInstance } from 'vue'
const MyComponent = {
  setup() {
    const internalInstance = getCurrentInstance();
    internalInstance.appContext.config.globalProperties // 访问 globalProperties
  }
}
```

#### 5、watch 和 watchEffect

watch

* 与 watchEffect 比较，watch 允许我们：
  * **惰性地执行副作用**；
  * 更具体地说明应触发侦听器重新运行的状态；
  * 访问被侦听状态的先前值和当前值。

```js
// 侦听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  },{
    immediate?: boolean, // 默认：false,初始化的时候不监听
    deep?: boolean       // 深度监听
  }
)
// 直接侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```

watchEffect  
在响应式地跟踪其依赖项时立即运行一个函数，**并在更改依赖项时重新运行它(即初始化的时候监听)**。

```js
const count = ref(0)
watchEffect(() => console.log(count.value)) // -> logs 0
setTimeout(() => {
  count.value++ // -> logs 1
}, 100)
```
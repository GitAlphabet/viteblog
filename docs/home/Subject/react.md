### React 面试题

#### 1、在构造函数调用 super 并将 props 作为参数传入的作用是啥？

+ 在调用 super() 方法之前，子类构造函数无法使用this引用，ES6 子类也是如此。
+ 将 props 参数传递给 super() 调用的主要原因是在子构造函数中能够通过this.props来获取传入的 props。

#### 2、传入 setState 函数的第二个参数的作用是什么？

> **该函数会在 setState 函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：**

```js
this.setState(
  { name: 'A' },
  () => console.log('setState has finished and the component has re-rendered.')
)
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
```

#### 3、什么是高阶组件？

> **高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。**

+ 代码重用、逻辑和引导抽象
+ 渲染劫持
+ state 抽象和操作
+ props 处理

#### 4、当调用setState时，React render 是如何工作的？

可以将"render"分为两个步骤：

+ 虚拟 DOM 渲染:当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，**因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的**。
+ 原生 DOM 渲染:React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。

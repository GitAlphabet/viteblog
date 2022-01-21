### redux 中间件原理

#### 1、原理

Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点，这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。

原redux的数据流：view -> action -> reducer -> store
!["redux工作流程"](../../images/react/redux.png 'redux工作流程')

加上中间件后变成了： view -> action -> middleware -> reducer -> store
!["redux 中间件流程"](../../images/react/middlware.png 'redux工作流程')

#### 2、createStore

createStore函数接收参数为(reducer, [initState], enhancer)

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import defaultState from './defaultState';
const store = createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk)
)
export default store
```

#### 3、applyMiddleware

applyMiddleware 改写了 store 的 dispatch 方法，新的 dispatch 即是被所传入的中间件包装过的。

```js
import compose from './compose'
/**
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this dispatch.`
      )
    }
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // 将不同的 middlewares 一层一层包裹到原生的 dispatch 之上
    // compose 将 chain 中的所有函数组装成一个新的函数，即新的 dispatch
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
```

#### 4、compose

```js
/**
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```
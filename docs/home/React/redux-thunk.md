### redux-thunk 中间件

dispatch 一个 action 之后，到达 reducer 之前，进行一些额外的操作，就需要用到 middleware。你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
换言之，中间件都是对 store.dispatch()的增强

#### 安装 redux-thunk

```bash
yarn add redux-thunk
```

#### 引入 redux-thunk

```js
// store.js
// 这里使用中间件，并且可以使用 redux 调试工具
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)
export default store
// 直接将thunk中间件引入，放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。即可以在reducer中进行一些异步的操作。
```

#### 使用 redux-thunk

```js
// actionsCreators.js
// actionTypes.js 定义常量
import * as actionTypes from './actionTypes'
import axios from 'axios'
export const firstSetInit = data => ({
  type: actionTypes.FIRST_SET_LIST,
  data
})
// 设置了 redux-thunk 参数是dispatch,如果 action creator 返回的是一个函数，就执行它，如果不是，就按照原来的next(action)执行。正因为这个action creator可以返回一个函数，那么就可以在这个函数中执行一些异步的操作。
export const init = () => {
  return dispatch => {
    axios.get('/api/list').then(res => {
      const action = firstSetInit(res.data)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
  }
}
```

#### applyMiddleware()

```js
// 其实applyMiddleware就是Redux的一个原生方法，将所有中间件组成一个数组，依次执行。中间件多了可以当做参数依次传进去
const store = createStore(reducers, applyMiddleware(thunk, logger))
```

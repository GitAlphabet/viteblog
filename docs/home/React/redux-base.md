### redux 基础用法

#### redux 工作流程

!["redux工作流程"](../../images/react/reduxFlow.jpg 'redux工作流程')

```markdown
Components:借书的人。
ActionCreators:借书的指令（我要借什么书）。
Store:图书馆的管理员，接收到 Reducer 新信息返回给 Components。
Reducer:收到管理员的指令，然后返回新的信息给管理员。
```

#### yarn 安装 redux、react-redux

```bash
yarn add react-redux
yarn add redux
yarn add redux-devtools-extension # 调试
```

#### redux 文件夹下文件

```js
redux
actionTypes.js       // 放置action 常量
actionsCreators.js   // action 函数
loginReducer.js     // 放置reducer,可能多个reducer
rootReducer.js      // 所有reducer 集合
store.js            // 生成 redux 的 store
```

#### actionTypes.js

```js
// action 的常量
export const LOGIN = 'LOGIN'
```

#### actionsCreators.js

```js
// 引入 actionTypes 常量
import * as actionType from './actionType'
export const login = data => {
  return {
    type: actionType.LOGIN,
    data
  }
}
```

#### loginReducer.js

```js
// 创建 reducer
import * as actionType from './actionType'
const initialValue = {
  name: 'alphabet',
  age: 18
}
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return action.data
    default:
      return state
  }
}
export default loginReducer
```

#### rootReducer.js

combineReducers 把多个 reducer 合并成一个 reducer

```js
import loginReducer from './loginReducer'
// import hobbyReducer from './hobbyReducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  loginReducer
  // hobbyReducer
})
export default rootReducer
```

#### store.js

createStore 创建 store

```js
import { createStore } from 'redux'
import rootReducer from './rootReducer'
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
```

#### 入口 index.js 文件

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// 1、将这个store对象传入 react-redux 提供的 Provider 组件中，然后将它挂载在组件树的根部。
// 2、这样做可以保证我们在任何时候通过 react-redux 的 connect 连接到 Redux 时，store 可以在组件中正常使用。
```

#### redux 使用

```jsx
import React, { Component } from 'react'
import './App.css'
import * as allActions from './redux/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class App extends Component {
  click = () => {
    this.props.userInfoActions();
    // 当用  bindActionCreators(allActions, dispatch)请使用下面的代码。
    /* this.props.userInfoActions.login({
      name: 'cx',
      age: 20
    }) */
  }
  render() {
    return (
      <div className="App">
        {this.props.userInfo.name}
        <button onClick={this.click}>点击</button>
      </div>
    )
  }
}
// mapStateToProp 将 state 挂到 props 上,this.props 调用
// 只要 Redux store 发生改变，mapStateToProps 函数就会被调用,该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
const mapStateToProp = state => {
  return {
    userInfo: state.userInfo
  }
}
// mapDispatchToProps 将 dispatch 挂到 props 上,this.props调用
const mapDispatchToProps = dispatch => {
  return {
    userInfoActions() {
      const action = allActions.login()
      dispatch(action)
    }
  }
  // 或者使用 bindActionCreators
  // return {
  //   userInfoActions: bindActionCreators(allActions, dispatch)
  // }
}
// connect 是一个 HOC（高阶组件）,传入上面两个函数后，继续返回抛出函数，暴露App组件
// 连接 React 组件与 Redux store。连接操作不会改变原来的组件类。反而返回一个新的已与 Redux store 连接的组件类。
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(App)
```

#### bindActionCreators(actionCreators, dispatch) 介绍

```markdown
描述：
1、把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
2、一般情况下你可以直接在 Store 实例上调用 dispatch。如果你在 React 中使用 Redux，react-redux 会提供 dispatch 。
3、唯一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。
4、为方便起见，你可以传入一个函数作为第一个参数，它会返回一个函数。

参数：
1、actionCreators (Function or Object): 一个 action creator，或者键值是 action creators 的对象。
2、dispatch (Function): 一个 dispatch 函数，由 Store 实例提供。

返回值：
(Function or Object): 一个与原对象类似的对象，只不过这个对象中的的每个函数值都可以直接 dispatch action。如果传入的是一个函数，返回的也是一个函数。
```

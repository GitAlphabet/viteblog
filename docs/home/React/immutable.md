### immutable 

`已放弃 immer 更香`

#### immutable Data

> Immutable data encourages pure functions (data-in, data-out) and lends itself to much simpler application development and enabling techniques from functional programming such as lazy evaluation. (官方文档对其描述)

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

<!-- 请看下图：
!["immutable"](../../images/react/immutable.webp 'immutable') -->

#### 安装

```bash
npm install immutable
yarn add immutable
```

#### 常用的 API

**fromJS()**
作用：将一个 js 数据转换为 Immutable 类型
用法：fromJS(value, converter)
简介：value 是要转变的数据，converter 是要做的操作。第二个参数可不填，默认情况会将数组准换为 List 类型，将对象转换为 Map 类型，其余不做操作

**toJS()**
作用：将一个 Immutable 数据转换为 JS 类型
用法：value.toJS()

**get()/getIn()**
作用：获取数据结构中的数据

```js
//获取 List 索引的元素
ImmutableData.get(0)
// 获取 Map 对应 key 的 value
ImmutableData.get('a')
// 获取嵌套数组中的数据
ImmutableData.getIn([1, 2])
// 获取嵌套 map 的数据
ImmutableData.getIn(['a', 'b'])
```

**set()**

```js
// 这里对于数据的修改，是对原数据进行操作后的值赋值给一个新的数据，并不会对原数据进行修改，因为 Immutable 是不可变的数据类型。
ImmutableData.set('a',10);
```

**merge()**

``` js
// 对于多个数据修改进行合并
ImmutableData.merge({
  'a',10,
  'b',11
});
```

#### 用法

```js
// header 里面的 reducer 默认值转化为 immutable类型。
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    default:
      return state
  }
}

// 获取 get()
const mapStateToProps = state => {
  return {
    // focused: state.headerReducer.get('focused') 数据格式需要统一。所以总的 rootReducer 默认值转为 immutable 类型
    // focused: state.get('headerReducer').get('focused')
    focused: state.getIn(['headerReducer','focused'])
  }
}

// rootReducer 函数 immutable 化，需要从 redux-immutable 引入 combineReducers。而不是从 redux 引入。
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { headerReducer} from '../common/header/store';
const rootReducer = combineReducers({
    headerReducer
})
export default rootReducer
```

### vuex-persistedstate

```markdown
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。页面刷新，数据就没有了，vuex-persistedstate很好的解决了此类问题。
```

#### vuex-persistedstate 安装

```bash
npm install vuex-persistedstate
```

#### 在 index.js 里面配置

```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' //自带的日志
import createPersistedState from 'vuex-persistedstate'
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug
    ? [createLogger(), createPersistedState()]
    : [createPersistedState()]
})
```

#### createPersistedState([options]) API

```markdown
使用给定选项创建插件的新实例。可以提供以下选项来配置插件以满足您的特定需求：

key <String>：存储持久状态的关键。（默认：vuex）

paths <Array>：部分持久化状态的任何路径的数组。如果没有给出路径，则保持完整状态。（默认：[]）

reducer <Function>：将调用的函数，用于根据给定路径减少要保留的状态。默认包含值。

subscriber <Function>：一个调用设置变异订阅的函数。默认为store => handler => store.subscribe(handler)

storage <Object>：用于代替（或与其组合）getState和setState。默认为localStorage。

getState <Function>：将被调用以补充先前持久状态的函数。默认使用storage。

setState <Function>：将被调用以保持给定状态的函数。默认使用storage。

filter <Function>：将被调用以过滤setState最终将在存储上触发的任何突变的函数。默认为() => true

arrayMerger <Function>：用于在再水化状态下合并数组的函数。默认为function (store, saved) { return saved }（保存状态替换提供的状态）。
```

#### 自定义存储

```js
import { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
const store = new Store({
  // ...
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
```

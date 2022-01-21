### React 生命周期

!["React 生命周期"](../../images/react/reactHook.png 'React 生命周期')

#### 简单介绍

| 生命周期函数              | 描述             |
| :------------------------ | :--------------- |
| initializztion            | 初始化           |
| componentWillMount        | 组件挂载前       |
| render                    | 渲染             |
| componentDidMount         | 组件挂载         |
| componentWillReceiveProps | 组件接收到 props |
| shouldComponentUpdate     | 是否更新组件     |
| componentWillUpdate       | 组件更新前       |
| componentDidUpdate        | 组件更新         |
| componentWillUnmount      | 组件移除挂载钱   |

#### 注意点

```markdown
1、initializztion:
class 类里面的 constructor 函数里面执行，初始化 state,props
2、componentWillReceivePropsnextProps):
只要父组件的 render 函数重新（第一次存在不执行，之前已经存在存在父组件中会被执行）被执行才会执行。
3、shouldComponentUpdate(nextProps,nextState):
返回 true/false 是否更新（即调用render函数），一般做性能优化。
```

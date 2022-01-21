### React hooks

原则

* **只在最顶层使用 Hook**。
  * **不要在循环，条件或嵌套函数中调用 Hook**， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。遵守这条规则，**你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用**。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。
* **只在 React 函数中调用 Hook**
  * 不要在普通的 JavaScript 函数中调用 Hook
  * 可以在 React 的函数组件中调用 Hook
  * 可以在自定义 Hook 中调用其他 Hook

API

* [useState](https://zh-hans.reactjs.org/docs/hooks-state.html)
* [useEffect](https://zh-hans.reactjs.org/docs/hooks-effect.html)
* [useState](https://zh-hans.reactjs.org/docs/hooks-state.html)
* [useRef](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)
* [useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
* [useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)
* [useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)
* [useReducer](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)

#### useState

参数为值或者函数

```js
const [count, setCount] = useState(0);
```

注意点：

```js
const Father = () => {
  const [name, setName] = useState('cx');
  return (
    <>
      <p>aaa</p>
      <button onClick={() => setName('alphabet')}>setName</button>
      <Son Fname={name} />
    </>
  );
};

const Son = ({ Fname }) => {
  // render:初始化state
  // re-render:只恢复初始化的值，不会再重新新的值
  //           只能使用 setName 修改            
  const [name, setName] = useState(Fname);
  return (
    <div>
      <p>{Fname}</p> render: cx  re-render: alphabet
      <p>{name}</p>  render: cx  re-render: cx
    </div>
  );
};  
```

#### userEffect

* 没有依赖，re-render 会执行 effect 函数
* 依赖为 [] 时，re-render 不会执行 effect 函数
* 依赖  [count] 时，re-render 会根据 count 是否变化来决定是否执行 effect 函数。(变化就执行，不变就不执行)

```js
const [count, setCount] = useState(0);
useEffect(() => {
  document.title = `You clicked ${count} times`;
});

useEffect(() => {
  document.title = `You clicked ${count} times`;
},[]);

useEffect(() => {
  document.title = `You clicked ${count} times`;
},[count]);
```
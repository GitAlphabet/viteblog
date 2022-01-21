### 自定义事件

#### 如何自定义事件

* 原生提供了3个方法实现自定义事件
* createEvent，设置事件类型，是 html 事件还是 鼠标事件
* initEvent 初始化事件，事件名称，是否允许冒泡，是否阻止自定义事件
* dispatchEvent 触发事件

```js
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
```

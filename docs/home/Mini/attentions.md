
### 小程序注意点

#### 1、事件绑定传参

```html
<view wx:for="{{list}}" wx:key='id' bindtap="toDetail" data-id="{{item.id}}">
</view>
```

获取参数

```js
toDetail(e){
  const id = e.currentTarget.dataset.id;
}
```
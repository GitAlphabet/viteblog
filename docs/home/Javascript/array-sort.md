### 数组的排序

#### array.sort()

```js
let arr = [14,23,11,6,87,67];
arr.sort();
// [11,14,23,6,67,87] 按字符而非数值排序
想要完成值比较排序，必须传入sort参数（函数）进行规制制定：

arr.sort((a,b)=> {
  return a-b; // 如果a>=b，返回自然数，不用交换位置
});
// [6, 11, 14, 23, 67, 87]
```

#### 数组里面多个对象，根据对某个属性排序

```js
let arr = [
  {sellNum: 10,id: 1},
  {sellNum: 8,id: 2},
  {sellNum: 8,id: 3},
  {sellNum: 13,id: 4},
  {sellNum: 6,id: 5}
]
console.log(sortBy(arr, 'sellNum', 1))
 /**
  * 数组里面多个对象，根据对某个属性排序
  * @param {*} arr  需要排序的数组
  * @param {*} field 排序的字段
  * @param {*} sort sort > 0 升序 sort < 0 降序
  * @returns
  */
function sortBy(arr, field, sort) {
  return arr.sort((a, b) => {
    return sort > 0 ? a[field] - b[field] : b[field] - a[field]
  })
}
```

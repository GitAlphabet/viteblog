### Echart 的 option

#### 1、一般写法

```js
const option = {
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data,
      name: '月份',
      type: 'line',
      smooth: true,
      areaStyle: {},
    },
  ],
};
```

#### 2、TS 中的写法

在 echart 中的 type 是联合变量类型

```ts
type = 'value' | 'category' | 'time' | 'log'
```

一般写法中的 type 是 string 类型。所以我们采用类型断言来告诉 TypeScript 来推断字面量

```ts
const option = {
  tooltip: {
    trigger: 'axis' as 'axis',
  },
  xAxis: {
    type: 'category' as 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value' as 'value',
  },
  series: [
    {
      data,
      name: '月份',
      type: 'line' as 'line',
      smooth: true,
      areaStyle: {},
    },
  ],
};
```

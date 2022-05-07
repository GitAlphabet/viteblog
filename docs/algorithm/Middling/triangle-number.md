### 有效三角形的个数

给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

示例 :

```markdown
输入: [2,2,3,4]
输出: 3
解释:
有效的组合是:
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
```

注意

```markdown
- 数组长度不超过 1000。
- 数组里整数的范围为 [0, 1000]。
```

```js
var triangleNumber = function(nums) {
  let count = 0
  // 从小到大排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // i 改变时重置k
    let k = i + 2
    for (let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
      // 当 nums[i] + nums[j] > nums[k] 不满足时，后面都是不满足的，求出当前循环的符合的次数
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++
      }
      count += k - j - 1
    }
  }
  return count
}
```

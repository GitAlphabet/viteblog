### list 切片与 for 循环

#### list 切片

```py
L = list(range(100))

# L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素
print(L[0:3])

# 如果第一个索引是0，还可以省略
print(L[:3])

# 既然Python支持L[-1]取倒数第一个元素
print(L[-1:])

# 前10个数，每三个取一个
print(L[:10:3])

# 所有数，每5个取一个：
print(L[::5])

# 甚至什么都不写，只写[:]就可以原样复制一个list：
print(L[:])
```

#### for 循环写在一行

**最前面必须是返回值**

```py
# 写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来，十分有用，多写几次，很快就可以熟悉这种语法。
print([x * x for x in range(1,10)])

# for循环后面还可以加上if判断
print([x * x for x in range(1,10) if x % 2 == 0])

# 还可以使用两层循环，可以生成全排列
print([m + n for m in 'ABC' for n in 'XYZ'])
# ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
```

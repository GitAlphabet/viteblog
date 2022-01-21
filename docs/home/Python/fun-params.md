### 参数

#### 函数参数

```py
# 仅仅在参数前面加了一个*号。在函数内部，参数numbers接收到的是一个tuple
def calc (*numbers):
    sum = 0
    for x in numbers:
        sum += x
    return sum

print(calc(1,2,3))

# 这些可变参数在函数调用时自动组装为一个tuple,关键字参数在函数内部自动组装为一个dict
def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)

# *args是可变参数，args接收的是一个tuple；
# **kw是关键字参数，kw接收的是一个dict。
```

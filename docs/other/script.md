### 简单的脚本并配置

#### 1、创建脚本文件

```bash
# 创建脚本文件,存放需要执行的命令行
touch demo.sh
# 切换并编辑demo.sh文件(可以使用编辑器编辑)
vi demo.sh
    touch  demo.txt # 创建demo文本
    mkdir  demo # 创建demo文件夹
```

#### 2、执行脚本

```bash
sh demo.sh
```

#### 3、自定义参数

添加自定义文件夹名称的命令行

```bash
demo.sh
    mkdir $1 #$1表示运行脚本时候 输入的第一个参数 $2代表第二个参数，以此类推
```

#### 3、执行自定义参数脚本

```bash
sh demo.sh lpl
完成后，该文件下会有一个lpl的文件夹
```

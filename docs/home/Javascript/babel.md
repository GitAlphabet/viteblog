### Babel 入门

#### 初始化

```bash
npm init
```

#### 配置文件.babelrc

根目录下创建 .babelrc 文件。文件基本格式如下

```json
{
  "presets": [],
  "plugins": []
}
```

#### presets

presets 字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。

```bash
# ES2015转码规则
npm install --save-dev babel-preset-es2015

# react转码规则
npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
```

#### 将规则导入 .babelrc

```json
{
  "presets": ["es2015", "react", "stage-2"],
  "plugins": []
}
```

#### 全局安装 babel-cli

```bash
npm install --global babel-cli
```

#### 基本用法如下

```bash
# 转码结果输出到标准输出
babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
babel example.js --out-file compiled.js
# 或者
babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
babel src --out-dir lib
# 或者
babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

#### 全局 babel-cli 缺点

上面代码是在全局环境下，进行 Babel 转码。这意味着，如果项目要运行，全局环境必须有 Babel，也就是说项目产生了对环境的依赖。另一方面，这样做也无法支持不同项目使用不同版本的 Babel。

一个解决办法是将 babel-cli 安装在项目之中。

```bash
# 安装
npm install --save-dev babel-cli
然后，改写package.json。
{
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  },
}
转码的时候，就执行下面的命令。
npm run build
```

#### babel-polyfill

Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。

安装命令如下。

```bash
npm install --save babel-polyfill
```

```js
然后，在脚本头部，加入如下一行代码。
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```

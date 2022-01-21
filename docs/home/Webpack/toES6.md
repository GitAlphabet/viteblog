### 使用 babel-loader 转换 ES6

#### 初始化

```bash
npm init -y
```

#### 项目目录安装 webpack

```bash
npm install --save-dev webpack
```

#### 安装 html-webpack-plugin

```bash
npm i --save-dev html-webpack-plugin
```

#### 安装 babel-loader、babel-core、babel-preset-env

```bash
npm install --save-dev babel-loader babel-core
npm install babel-preset-env --save-dev
```

#### webpack.config.js 配置如下

```js
let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/utils.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
```

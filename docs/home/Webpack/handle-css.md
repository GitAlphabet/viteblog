### 处理 css/less/sass

#### 安装 style-loader、css-loader、postcss-loader

```bash
npm i style-loader css-loader postcss-loader --save-dev
```

#### 安装自动添加浏览器前缀的 autoprefixer

```bash
npm i autoprefixer --save-dev
```

#### 根目录下新建 postcss.config.js,导入 autoprefixer

```js
module.exports = {
  plugins: [require('autoprefixer')]
}
```

#### webpack.config.js 配置如下

```js
let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: __dirname,
  entry: './src/main.js',
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
      },
      // css 处理
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
        // 在css-loader 后面加 "?importLoaders=1" 是解决 css 里面用 @import 导入 css 没有自动加前缀问题,
      },
      //处理 less 文件：安装 less、less-loader
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      //处理 sass 文件： 安装 sass、sass-loader
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      //处理图片文件：安装 file-loader/url-loader、image-webpack-loader
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash].[ext]'
            }
          },
          /* {
                loader: 'url-loader',
                options: {
                    limit: 30000,
                    name: 'assets/[name]-[hash].[ext]'
                }
            }, */
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
```

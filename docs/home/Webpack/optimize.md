### webpack 优化构建速度

#### 1、优化 babel-loader

cacheDirectory：默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 Webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程。设置空值或者 true 的话，使用默认缓存目录

```js
module.exports = {
  rules:[{
    test:/\.js$/,
    use:['babel-loader?cacheDirectory'],  // 开启缓存
    include:path.resolve(_dirname,'src'), // 明确范围
    // include 和 exclude 任选其一就行
    // exclude:path.resolve(_dirname,'node_modules'), // 明确范围
  }]
}
```

#### 2、IgnorePlugin

webpack 的内置插件，作用是忽略第三方包指定目录。

```js
// 例如: moment (2.24.0版本) 会将所有本地化内容和核心功能一起打包，我们就可以使用 IgnorePlugin 在打包时忽略本地化内容。
module.exports = {
  plugins: [
    //忽略 moment 下的 ./locale 目录
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}
```

在使用的时候，如果我们需要指定语言，那么需要我们手动的去引入语言包，例如，引入中文语言包:

```js
import moment from 'moment';
import 'moment/locale/zh-cn';// 手动引入
```

#### 3、noParse 避免重复打包

```js
module.exports = {
  module: {
    // xx.min.js 已经是打过包的
    noParse:[/react\.min\.js$/]
  }
}
```

#### 4、happyPack 多进程打包

* js 单线程，开启多进程打包
* 提高构建速度（多个cpu）

```js
module.exports = {
  rules:[{
    test:/\.js$/,
    // 把对 .js 的处理转交给 id 为 babel 的 HappyPack 的实例处理
    use:['haapypack/loader?id=babel'],  
    include:path.resolve(_dirname,'src'), // 明确范围
    // include 和 exclude 任选其一就行
    // exclude:path.resolve(_dirname,'node_modules'), // 明确范围
  }],
  plugins:[
      new HappyPack({
          id:'babel',
          loaders:['babel-loader?cacheDirectory']
      })
  ]
}
```

#### 5、ParallelUglifyPlugin 多进程压缩 js

* webpack 内置 Uglify 工具压缩 js
* js 单线程，开启多进程压缩更快

```js
module.exports = {
  plugins:[
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
      uglifyJS: {
        output: {
        beautify: false, // 最紧凑的输出
        comments: false, // 删除所有的注释
        },
        compress: {
        // 删除所有的 `console` 语句，可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
        }
      }
    })
  ]
}
```
  
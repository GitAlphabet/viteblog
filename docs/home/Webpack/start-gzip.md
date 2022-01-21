### 打包开启 gzip

#### 1、安装 compression-webpack-plugin

根据项目的 webpack 版本来安装插件的对应版本，不然会报错。

```bash
yarn add compression-webpack-plugin -D
```

#### 2、config.js 添加配置

```js
const CompressionWebpackPlugin = require('compression-webpack-plugin');

chainWebpack: (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugin('compression-webpack-plugin').use(CompressionWebpackPlugin, [
      {
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        algorithm: 'gzip', // 指定生成gzip格式
        test: /\.(js|css)$/, // 匹配哪些格式文件需要压缩
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.8, // 压缩比例，值为0 ~ 1
      },
    ]);
  }
};
```

#### 3、服务器开启 gizp (不同的服务器开启 gizp 方式不一样)

```bash
gizp_static on;
```

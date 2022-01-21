### webpack 中的 process.env

::: tip
开发中我们需要针对不同环境（开发环境、集成环境、生产环境等），进行相应策略的打包（比如是否替换接口地址，代码是否压缩等）。webpack 就是通过 process.env 属性加以区分。
:::

webpack 的运行依赖于 node 的环境。process.env 就是 Nodejs 提供的一个 API，它返回一个包含用户环境信息的对象。如果我们给 Nodejs 设置一个环境变量，并把它挂载在 process.env 返回的对象上，便可以在代码中进行相应的环境判断。

#### process.env

通常的做法是，新建一个环境变量 NODE_ENV，用它确定当前所处的开发阶段，生产阶段设为 production，开发阶段设为 development 或 staging，然后在脚本中读取 process.env.NODE_ENV 即可。
要说明的是，NODE_ENV 这个名称只是开发社区的一种共识，名称是可以修改的。

在 Webpack 配置文件中

```bash
// webpack.config.js
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}
```

#### 设置 process.env.NODE_ENV 环境变量

process.env 是 Nodejs 提供的一个 API，那么如果想用 process.env.NODE_ENV，就必须先设置其值才能用。
但是如何设置 这个 process.env.NODE_ENV 环境变量呢？在 webpack 项目里，我们可以通过设置 package.json 来实现，但是 Windows 系统和 Mac 系统有区别。

Windows 系统

```js
// package.json
{
  ...
  "scripts": {
    "dev": "set NODE_ENV=development &&  webpack-dev-server --open --hot",
    "build": "set NODE_ENV=production &&   --progress --hide-modules"
  }
}
```

Mac 系统

```js
// package.json
{
  ...
  "scripts": {
    "dev": "export NODE_ENV=development &&  webpack-dev-server --open --hot",
    "build": "export NODE_ENV=production &&   --progress --hide-modules"
  }
}
```

那么问题又来了，我在 Windows 开发部署的项目，可能在 Mac 系统无法正常打包，反之亦然。为了解决这个问题，有人就开发了 cross-env。

cross-env 是一个跨平台设置环境变量的第三方包，它可以让你只配置一行命令，就能轻松地在多个平台设置环境变量。首先先安装

```bash
npm install --save-dev cross-env
```

然后配置 package.json 就可以了

```js
// package.json
{
  ...
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --mode=production  --progress --hide-modules"
  },
}
```

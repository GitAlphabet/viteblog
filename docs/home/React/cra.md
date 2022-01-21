### react-create-app

#### 安装依赖

| 插件名称            | 描述              |
| :------------------ | :---------------- |
| react-router        | React 路由        |
| axios               | Ajax 请求         |
| less                | CSS 样式          |
| less-loader         | 转换 Less         |
| antd                | React UI 插件     |
| babel-plugin-import | antd 样式按需加载 |

#### 暴露配置

```bash
npm run eject # 暴露原有的webpack配置文件
```

#### 修改 webpack.config.js 文件

1、定义 less 文件匹配规则

```js
// style files regexes 样式匹配规则
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

// 新加less匹配项
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
```

2、在 sass 的配置下新增 less 配置

```json
{
    "test": lessRegex,
    "exclude": lessModuleRegex,
    "use": getStyleLoaders({
    "importLoaders": 2
    }, 'less-loader'), // 注意第二个参数
},
{
    "test": lessModuleRegex,
    "use": getStyleLoaders({
        "importLoaders": 2,
        "modules": true,
        "getLocalIdent": getCSSModuleLocalIdent,
    },
    'less-loader' // 注意第二个参数
    ),
},
```

3、getStyleLoaders 替换之前的方法，配置可修改的主题。

```js
/* 之前的方法
if (preProcessor) {
    loaders.push({
    loader: require.resolve(preProcessor),
    options: {
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
    },
    });
}
*/
// 修改后的方法，'primary-color' 指定主题颜色
if (preProcessor) {
  if (preProcessor === 'less-loader') {
    // 为less-loader添加配置项，启动javascript
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: isEnvProduction && shouldUseSourceMap,
        javascriptEnabled: true, // 解决上文报错
        modifyVars: {
          // 修改主题颜色
          'primary-color': '#000000'
        }
      }
    })
  } else {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: isEnvProduction && shouldUseSourceMap
      }
    })
  }
}
```

#### 在 package.json 中或者.babelrc 中配置按需导入的组件库规则

1、package.json 配置

```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
  }
```

1、babelrc 中配置

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```

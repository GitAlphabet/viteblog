module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  markdown: {
    lineNumbers: true, // 开启代码行号
  },
  // plugins: [['vuepress-plugin-code-copy', true]],
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  // base:'/blog/',
  themeConfig: {
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name',
    // },
    smoothScroll: true,
    nav: [
      {
        text: '基础',
        link: '/home/CSS/less',
      },
      {
        text: '其他',
        link: '/other/computer-binary',
      },
      {
        text: 'Github',
        link: 'https://github.com/GitAlphabet',
        target: '_blank',
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/home/': [
        {
          text: 'CSS',
          children: [
            { text: 'Less', link: '/home/CSS/less' },
            { text: 'CSS 部分属性', link: '/home/CSS/some-css' },
            { text: '布局', link: '/home/CSS/mobile-layout' },
            { text: 'BFC(块格式化上下文)', link: '/home/CSS/bfc' },
            { text: 'CSS常见技巧', link: '/home/CSS/skill' },
            { text: '滚动条样式', link: '/home/CSS/scroll' },
          ],
        },
        {
          text: 'Javascript',
          children: [
            { text: '原生 ajax', link: '/home/Javascript/ajax' },
            { text: 'ES6(数组的扩展)', link: '/home/Javascript/array' },
            { text: '数组的排序', link: '/home/Javascript/array-sort' },
            { text: 'Arguments对象', link: '/home/Javascript/arguments' },
            { text: 'async 函数', link: '/home/Javascript/async' },
            { text: 'Promise', link: '/home/Javascript/promise' },
            { text: 'ES6 数值', link: '/home/Javascript/number' },
            { text: 'Babel 入门', link: '/home/Javascript/babel' },
            { text: '浅拷贝与深拷贝', link: '/home/Javascript/copy' },
            { text: 'Base64', link: '/home/Javascript/base64' },
            { text: 'Base64转换文件', link: '/home/Javascript/base64-to-file' },
            { text: '访问图片返回403', link: '/home/Javascript/img' },
            { text: 'RegExp', link: '/home/Javascript/RegExp' },
            {
              text: 'call、apply、bind 详解',
              link: '/home/Javascript/call-apply-bind',
            },
            { text: 'this 指向', link: '/home/Javascript/this' },
            { text: 'js 闭包', link: '/home/Javascript/closure' },
            { text: '原型链', link: '/home/Javascript/prototype' },
            {
              text: '事件循环(Event Loop)',
              link: '/home/Javascript/eventLoop',
            },
            { text: 'js垃圾回收机制', link: '/home/Javascript/gc' },
            { text: '自定义事件', link: '/home/Javascript/custom-events' },
            { text: '全屏API', link: '/home/Javascript/fullScreen' },
            { text: 'valueOf和toString', link: '/home/Javascript/type-change' },
            {
              text: '防抖与节流',
              link: '/home/Javascript/debounce-and-throttle',
            },
            { text: '十种经典排序', link: '/home/Javascript/sort' },
            { text: '虚拟滚动', link: '/home/Javascript/virtual-scroll' },
          ],
        },

        {
          text: 'Vue',
          children: [
            { text: 'Vue 代码风格指南', link: '/home/Vue/standard' },
            { text: 'vuex-persistedstate', link: '/home/Vue/persistedstate' },
            { text: 'fastclick 使用', link: '/home/Vue/fastclick' },
            { text: 'px2rem', link: '/home/Vue/px2rem' },
            { text: 'px2vw', link: '/home/Vue/px2vw' },
            { text: 'better-scroll 封装', link: '/home/Vue/better-scroll' },
            { text: 'vue 修改 UI 库的样式', link: '/home/Vue/revise-style' },
            { text: '组件间通讯', link: '/home/Vue/component-communication' },
            { text: 'nextTick 和 set', link: '/home/Vue/nextTick-set' },
            { text: 'watch 注意点', link: '/home/Vue/watch' },
            { text: 'Axios', link: '/home/Vue/axios' },
            { text: 'axios 拦截器', link: '/home/Vue/interceptor' },
            { text: 'vue-router 路由懒加载', link: '/home/Vue/lazy-router' },
            { text: 'vuex 使用', link: '/home/Vue/vuex' },
            { text: '路由传参', link: '/home/Vue/route-params' },
            { text: '路由模式', link: '/home/Vue/router' },
          ],
        },
        {
          text: 'React',
          children: [
            { text: 'react-create-app', link: '/home/React/cra' },
            { text: 'CSS Module', link: '/home/React/css-module' },
            { text: '生命周期', link: '/home/React/life-cycle' },
            { text: 'Hooks', link: '/home/React/hooks' },
            { text: 'redux 基础', link: '/home/React/redux-base' },
            { text: 'redux-thunk', link: '/home/React/redux-thunk' },
            { text: 'immutable ', link: '/home/React/immutable' },
            { text: 'immer', link: '/home/React/immer' },
            { text: 'XLSX 解析 excle', link: '/home/React/xlsx2json' },
            { text: 'umi 兼容 IE11', link: '/home/React/uim-ie11' },
            { text: 'Tree shaking', link: '/home/React/tree-shaking' },
          ],
        },
        {
          text: 'TypeScript',
          children: [
            {
              text: 'type 和 interface 区别',
              link: '/home/TypeScript/type-interface',
            },
            {
              text: '逻辑运算符',
              link: '/home/TypeScript/logical-operators',
            },
            { text: 'Echart 的 option', link: '/home/TypeScript/echart' },
          ],
        },
        {
          text: 'Node',
          children: [
            { text: 'node-mysql', link: '/home/Node/mysql' },
            { text: 'Node 编写接口', link: '/home/Node/server' },
            { text: 'pm2', link: '/home/Node/pm2' },
            { text: '更新 Node', link: '/home/Node/update-node' },
            { text: 'Express 解析请求参数', link: '/home/Node/get-params' },
          ],
        },

        {
          text: 'Http',
          children: [
            { text: 'TCP 协议', link: '/home/Http/tcp' },
            { text: 'Https', link: '/home/Http/https' },
            { text: '缓存', link: '/home/Http/cache' },
          ],
        },
        {
          text: 'Webpack',
          children: [
            { text: 'webpack 优化构建速度', link: '/home/Webpack/optimize' },
            { text: 'process.env', link: '/home/Webpack/processEnv' },
            { text: '处理 css/less/sass', link: '/home/Webpack/handle-css' },
            { text: '转换 ES6', link: '/home/Webpack/toES6' },
            { text: '开启 gzip', link: '/home/Webpack/start-gzip' },
            {
              text: '多页面以及 js 文件',
              link: '/home/Webpack/pack-multiple-js',
            },
          ],
        },
        {
          text: 'Python',
          children: [
            { text: 'list 切片与 for 循环', link: '/home/Python/list' },
            { text: '参数', link: '/home/Python/fun-params' },
          ],
        },
        {
          text: 'MiniApp',
          children: [
            { text: '获取用户信息', link: '/home/Mini/getUserInfo' },
            { text: '全局变量', link: '/home/Mini/globalData' },
            { text: '小程序注意点', link: '/home/Mini/attentions' },
          ],
        },
        {
          text: 'Nginx',
          children: [{ text: 'Mac 安装 Nginx', link: '/home/Nginx/install' }],
        },
        {
          text: 'Git',
          children: [{ text: 'Git 指令', link: '/home/Git/basic-command' }],
        },
        {
          text: 'DataBase',
          children: [
            { text: 'SQL 语句', link: '/home/DataBase/sql' },
            { text: '安装 Mysql faq', link: '/home/DataBase/faq' },
          ],
        },
        {
          text: 'Eslint',
          children: [
            { text: 'Eslint 规则', link: '/home/Eslint/eslint-rules' },
            { text: 'eslint 自动修复', link: '/home/Eslint/eslint-repair' },
          ],
        },
        {
          text: '面试题',
          children: [
            { text: 'CSS 面试题', link: '/home/Subject/css' },
            { text: 'js 面试题', link: '/home/Subject/js' },
            { text: 'react 面试题', link: '/home/Subject/react' },
            { text: 'vue 面试题', link: '/home/Subject/vue' },
          ],
        },
      ],

      '/other/': [
        {
          text: '其他',
          children: [
            { text: '原码、补码、反码详解', link: '/other/computer-binary' },
            { text: '更新 yarn', link: '/other/yarn-update' },
            { text: 'npm 和 yarn 部分命令', link: '/other/npm' },
            { text: 'npm 发包', link: '/other/publish-npm' },
            { text: 'SourceTree', link: '/other/refresh-origin' },
            { text: 'whistle', link: '/other/whistle' },
            { text: 'Markdown 基础语法', link: '/other/markdown' },
            { text: 'vuepress 部署', link: '/other/vuepress-deploy' },
            { text: '简单的脚本并配置', link: '/other/script' },
            { text: 'Mac 配置 ssh', link: '/other/setting-ssh' },
            { text: 'Mac 上传至服务器', link: '/other/link-server' },
            { text: 'npm ERR', link: '/other/npm-error' },
          ],
        },
      ],
    },
  },
};

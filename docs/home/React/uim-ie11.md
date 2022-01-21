### umi 兼容 IE11

#### 修改 config.js

```js
export default defineConfig({
  dva: {
    hmr: true,
    immer: false // 关闭 dva 的 immer
  },
  targets: {
    ie: 11,
  },
  // esbuild: {}, // 关闭 esbulid
  // fastRefresh: {}, // 关闭 Fast Refresh 热更新
  
  nodeModulesTransform: {
    type: 'all', // none => all
  },
  // mfsu: {}, // 关闭 mfsu
});
```

#### 使用了 immer 需要处理

```js
// 想入入口处处理
import { enableES5 } from 'immer';
enableES5();
```
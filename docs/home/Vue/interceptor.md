### axios-element 拦截器

```js
// 新建js文件,引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
let loadinginstace
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    loadinginstace = Loading.service({
      fullscreen: true
    })
    return config
  },
  error => {
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  }
)
// http响应拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading
    loadinginstace.close()
    return data
  },
  error => {
    loadinginstace.close()
    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
  }
)
// export 之后在main.js文件导入。
export default axios
```

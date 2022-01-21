### Base64

#### 一、[开源的 base64.js](https://github.com/dankogai/js-base64)

```bash
# 编码
Base64.encode('cx') # 返回：'Y3g='
# 解码
Base64.decode('Y3g=') # 返回：'cx'
```

#### 二、原生 atob(解码)和 btoa(编码)方法

```bash
# 编码
window.atob('Y3g=') # 返回：'cx'
# 解码
window.btoa('cx') # 返回：'Y3g='
```

#### 三、使用 Base64 图片

img/url: 'data:image/gif;base64,' + Base64 图片地址

```html
<img src="data:image/gif;base64,R0lGODlhAwADAIABAL6+vv///yH5BAEAAAEALAAAAAADAAMAAAIDjA9WADs="/>
```

```css
background-image: url(data:image/gif;base64,R0lGODlhBAABAIABAMLBwfLx8SH5BAEAAAEALAAAAAAEAAEAAAICRF4AOw==);
```

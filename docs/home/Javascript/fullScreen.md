### 全屏API

#### 全屏和退出全屏

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
```

#### 兼容性处理

```js
// 全屏
if (videoDom.requestFullscreen) {
  videoDom.requestFullscreen()
} else if (videoDom.webkitRequestFullScreen) {
  videoDom.webkitRequestFullScreen()
} else if (videoDom.mozRequestFullScreen) {
  videoDom.mozRequestFullScreen()
} else {
  videoDom.msRequestFullscreen()
}

// 退出全屏
if (document.exitFullscreen) {
  document.exitFullscreen()
} else if (document.mozCancelFullScreen) {
  document.mozCancelFullScreen()
} else if (document.msExitFullscreen) {
  document.msExiFullscreen()
} else if (document.webkitCancelFullScreen) {
  document.webkitCancelFullScreen()
}
```

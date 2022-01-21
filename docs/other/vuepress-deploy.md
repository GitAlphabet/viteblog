### vuepress 部署

#### 1、如果部署到服务器上需要进行下列操作。否则不需要

```js
.vuepress下面的 config.js 里面配置
    base:'/dist/'
```

#### 2、部署

```bash
a) 切换到 .vuepress文件夹下的 dist 目录
b) 执行下列代码(以放在 github 上的 username.github.io 仓库上为例)
    git init
    git add -A
    git commit -m'deploy'
    git push -f git@github.com:GitAlphabet/GitAlphabet.github.io.git master
```

#### 3、脚本部署

创建 deploy.sh 脚本并添加以下命令

```bash
git init
git add -A
git commit -m'deploy'
git push -f git@github.com:GitAlphabet/GitAlphabet.github.io.git master
```

执行脚本

```bash
sh deploy.sh
```

### 解决 npm ERR! code ELIFECYCLE

#### 报错信息

```md
sh: umi: command not found
npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
npm ERR! file sh
npm ERR! errno ENOENT
npm ERR! ant-design-pro@5.0.0 build: `umi build`
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the ant-design-pro@5.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

#### 2、解决方案

```sh
npm cache clean --force
rm -rf node_modules
rm -rf package-lock.json
npm install
npm run build
```

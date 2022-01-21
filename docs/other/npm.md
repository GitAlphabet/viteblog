
### npm 和 yarn 部分命令

#### 1、查看所有全局安装的模块

```bash
npm list --depth=0 -global
yarn global list
```

#### 2、全局安装的模块

```bash
npm install -g <package>
yarn global add <package>
```

#### 3、移除全局安装的模块

```bash
npm uninstall -g <package>
yarn global remove <package>
```

#### 4、查看npmjs服务器上的包的版本信息

```bash
npm view <package> version
```

#### 5、更新全局安装包

```bash
npm update -g <package>
yarn upgrade -global <package>
```

#### 6、npm view 查看注册表信息

```bash
npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]
eg: npm view react
```

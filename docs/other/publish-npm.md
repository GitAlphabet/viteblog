### npm 发包

#### 发布新包

+ 进入要发布的项目根目录，初始化为npm包：npm init
  + 依次按提示填入包名、版本、描述、github地址、关键字、license等;
+ 切换登录源 npm set registry http://registry.npmjs.org
+ 登陆 npm: npm login
  + 依次按提示填入用户名,密码,邮箱
+ 发布包，上传到npm包服务器： npm pubish

#### 更新包

+ 修改版本号
  + npm version patch:该命令在原来的版本上自动加1,实际上是将package.json文件中的version值修改了。
  + 手动修改 package.json文件中的version值。
+ 重新发布包 npm publish

```sh
原版本 1.0.0
npm version patch // 1.0.1
npm version minor // 1.1.0
npm version major // 2.0.0
```
  
#### 删除包

+ 删除指定的版本:npm unpublish packagename@版本号
+ 删除整个包:npm unpublish packagename --force
### Git 指令

#### 创建仓库/初始化

```bash
git clone address               //克隆远程仓库
git clone -b <branch> address   //克隆远程仓库制定分支
git init                        //初始化本地仓库
```

#### 修改、提交

```bash
git status                  //查看状态
git diff                    //查看变更内容
git add *(-A)               //提交所有文件到暂存区
git add <file>              //查看指定文件到暂存区
git mv <old> <new>          //文件改名
git rm <file>               //删除文件
git rm --cached <file>      //停止文件添加到暂存区但不删除
git commit -m'描述信息'      //提交文件到工作区
```

#### 查看提交历史

```bash
git log                     //查看提交历史
git reflog                  //查看所有提交历史(commit、reset)
```

#### 撤销

```bash
git reset --hard sha值       //回退到哪个版本，sha值是git log/reflog 得出来的
```

#### 分支

```bash
git branch (-al)                            //显示本地所有分支
git branch -r                               //显示远程所有分支
git checkout <branch>                       //切换分支
git branch <new branch>                     //新建分支
git branch -d <branch>                      //删除本地分支
git push origin --delete <branch>           //删除远程分支
git checkout -b 本地分支名 origin/远程分支名    //拉取本地没有的远程分支
git merge <branch>                          //合并分支
```

::: tip 拉取报错处理

fatal: Cannot update paths and switch to branch 'dev2' at the same time.
Did you intend to checkout 'origin/dev2' which can not be resolved as commit?

先执行 git fetch  
后执行 git checkout -b 本地分支名 origin/远程分支名
:::

#### 标签 tag

```bash
git tag -a <tagName> -m '说明'    //创建一个包含说明的标签
git show <tagName>               //查看标签的提交信息
git push origin <tagName>        //上传标签到远程仓库
git tag -d <tagName>             //删除本地tag
git push origin :<tagName>       //删除本地tag
git tag -l 'v0.0.*'              //搜索符合模式的标签
git push origin –tags            //将本地所有标签全部提交到远程仓库
```

#### 远程操作

```bash
git remote -v               //查看远程版本库信息
git pull origin <branch>    //拉取代码该分支
git push origin <branch>    //上传代码到该分支
git push -f origin <branch> //同步到远端仓库
```

#### git cherry-pick 使用

git cherry-pick 命令的作用，就是将指定的提交（commit）应用于其他分支。

```bash
git cherry-pick <commitHash>
```

Cherry pick 支持一次转移多个提交。

```bash
git cherry-pick <HashA> <HashB>
```

如果想要转移一系列的连续提交，可以使用下面的简便语法。

```bash
git cherry-pick A..B
```

上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。

注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。

```bash
git cherry-pick A^..B
```

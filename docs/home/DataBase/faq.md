### 安装 Mysql 出现的问题 

#### 1、刚安装的mysql无法启动，提示没有权限

**The innodb_system data file 'ibdata1' must be writable**

```md
2021-11-25T05:52:43.397230Z 1 [ERROR] [MY-012271] [InnoDB] The innodb_system data file 'ibdata1' must be writable
```

**修改权限**

```bash
# 查找权限文件
find / -name ibdata1
# /var/lib/mysql/ibdata1

# 修改权限为 777
chmod -R 777 /var/lib/mysql

# linux 里面为了给/usr/local/mysql这个文件夹赋予mysql用户的执行权限
chown mysql:mysql -R /var/lib/mysql
```

#### 2、版本 8.x 修改密码

```bash
mysql -u root -p
use mysql;
update user set host = '%' where user = 'root';
select host, user from user;
flush privileges; # 必须加上； 重新加载权限表; 更新权限;
```

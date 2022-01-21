### Mac 安装 Nginx

#### 安装工具

[homebrew](https://brew.sh/index_zh-cn.html)

#### 安装步骤

1、安装 homebrew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2、更新 homebrew

```bash
brew update
#结果：Already up-to-date.
```

3、安装 Nginx

```bash
brew install nginx
```

4、查看 Nginx 安装目录

```bash
open /usr/local/etc/nginx/
# 成功打开nginx目录，可以看到nginx.conf的配置文件（后面会用到这个配置文件）。
```

5、编辑 nginx.conf

```bash
cat /usr/local/etc/nginx/nginx.conf
```

#### Nginx 命令

```bash
# 启动 nginx
nginx

# 修改配置后重新加载生效
nginx -s reload

# 重新打开日志文件
nginx -s reopen

# 测试nginx配置文件是否正确
nginx -t -c /path/to/nginx.conf

# 快速停止nginx
nginx -s stop

# 完整有序的停止nginx
quit

# 查询nginx 进程
ps -ef | grep nginx

# 从容停止Nginx
kill -QUIT 主进程号

# 快速停止Nginx
kill -TERM 主进程号

# 强制停止Nginx
pkill -9 nginx
```

#### 配置文件实例

```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}
http {
    client_max_body_size 5m;
    include mime.types;
    default_type application/octet-stream;
    server {
        listen 9999;        # the port nginx is listening on
        #server_name     'http://192.168.1.64';    # setup your domain here
        gzip            on;
        gzip_types      text/plain application/xml text/css application/javascript;
        gzip_min_length 1000;
        include mime.types;
        default_type application/octet-stream;
        location /uc/ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            if ($uri ~* "^/uc/.*?"){
                proxy_pass   http://192.168.1.64:7001;
            }
            index  index.html index.htm;

            client_max_body_size    50m;
        }
        location /ucManage/ {
            proxy_pass   http://192.168.4.43:6300;
        }
    }
}
```

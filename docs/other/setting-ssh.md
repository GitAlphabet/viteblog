### Mac 配置 ssh

#### 1、查看本地是有已经生成 ssh

```bash
ls -al~ / .ssh
```

#### 2、如果不存在，请配置

```bash
#替换您的GitHub电子邮件地址。
ssh-keygen -t rsa -b 4096 -C'your_email@example.com'
```

#### 3、打开 ssh 文件夹下的 id_rsa.pub 文件

```bash
open ~/.ssh
```

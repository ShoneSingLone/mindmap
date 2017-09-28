# mindmap
==========
## git常用命令
----------------
 - git init --bare /path/to/repo.git 
 - git clone ssh://user\@host/path/to/repo.git 
 - git status 
 - git add 
 - git commit 
 - git push 
 - git fetch 
 - git branch -r -a -   查看分支：git branch -   创建分支：git branch 
 - git merge 合并某分支到当前分支 
 - git checkout 切换分支 
 - git checkout -b 创建+切换分支 
 - git merge 合并某分支到当前分支 
 - git branch -d 删除分支

## 基本的工作流
------------
## MySQL
- root目录
- 在package.json中引入
```
"mysql": "latest"
```
- `npm install`
- 新建**db/config.js**
```
var mysql = {
    mysql: {
        host     : '127.0.0.1',
        user     : 'name',
        password : 'dongcidaci',
        database : 'balabala',
        port     : 3306
    }
}
module.exports = mysql;

```

## 创建HTTPS服务器
>[Nodejs+Express创建HTTPS服务器](http://www.jianshu.com/p/853099ae2edd)

>[openssl生成ssl证书](https://my.oschina.net/mzzyk/blog/543013)

 ```
＃生成私钥key文件
openssl genrsa 1024 > ./private.key

＃通过私钥文件生成CSR证书签名
openssl req -new -key ./private.key -out csr.pem
# 此步骤需要输入一些证书信息，解释如下：
# Country Name (2 letter code) [GB]:【在此输入两个字符的国家名。中国的为CN 】
# State or Province Name (full name) [Berkshire]:【省份名称，如北京为beijing 】
# Locality Name (eg, city) [Newbury]:【城市名称，如beijing】
# Organization Name (eg, company) [My Company Ltd]:【公司名称】
# Organizational Unit Name (eg, section) []:【部门名称】
# Common Name (eg, your name or your server’s hostname) []:【姓名，通常即证书名】
# Email Address []:【电子邮箱地址】

＃通过私钥文件和CSR证书签名生成证书文件
openssl x509 -req -days 3650 -in csr.pem -signkey ./private.key -out ./certFile.crt
```


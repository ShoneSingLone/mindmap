1. [Copy cn.vuejs.org:可以放电子书用浏览器阅读](https://github.com/ShoneSingLone/mindmap/tree/master/practice/cn.vuejs.org)

# mindmap
==========
## git常用命令
----------------
 - git init --bare /path/to/repo.git 
 - git clone ssh://user\@host/path/to/repo.git 
 - git status 
 - git add 
 - git commit 
 - git push svn commit
 - git pull svn update
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
- **最后：** certificate自然是没有上传的。


## 
- "errno":-4058,"code":"ENOENT"：文件路径不对

## package-lock.json是什么？
[package-lock.json](https://docs.npmjs.com/files/package-lock.json)
[yarn-lock](https://yarnpkg.com/zh-Hans/docs/yarn-lock)
参阅yarn-lock方便理解，简单来说就是因为package.json文件里的依赖信息如`"mysql": "^2.15.0",`中的`^`没有写得很仔细，一旦给别人使用会因为这个不确定性而可能引起不必要的bug。所以在lock文件中将这个信息清晰明白准确描述，不会出乱子。即使出乱子也不是因为引错了包┓( ´∀` )┏

## requireJS

## bootstrap




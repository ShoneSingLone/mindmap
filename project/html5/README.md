# 练习前端基本技能的项目

项目初始化
npm init => 得到带有package.json的root 目录

基本的工具

```bash
npm install webpack webpack-cli --save-dev
```

非全局安装，可以避免全局的可能冲突。webpack-cli可以在npm script中调用webpack的命令。npm script运行机制是首先在node_modules/bin的目录下查找能够匹配上的命令。

[manifest](https://webpack.docschina.org/concepts/manifest)理解缓存机制并用于优化有利于提升应用的使用体验
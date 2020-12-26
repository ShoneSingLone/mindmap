https://www.npmjs.com/package/koa-bodyparser
https://github.com/ZijianHe/koa-router

流程，本身是web服务，能被外部访问，
gitlab提交->向serverA发送打包请求
serverA 从gitlab拉取并打包->向serverB发送部署请求
serverB 从serverA下载打包好的文件压缩包->清理文件->解压部署到相应文件夹->调用脚本启动服务


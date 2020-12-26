https://www.npmjs.com/package/koa-bodyparser
https://github.com/ZijianHe/koa-router

流程，本身是web服务，能被外部访问，
gitlab提交->向serverA发送打包请求
serverA 从gitlab拉取并打包->向serverB发送部署请求
serverB 从serverA下载打包好的文件压缩包->清理文件->解压部署到相应文件夹->调用脚本启动服务

get http://localhost:3000/serverA/pull/serverApull1

后期可以完善权限控制

pm2 windows 自启动，开机启动
https://www.npmjs.com/package/pm2-windows-service

npm i -g pm2
npm i -g pm2-windows-service
pm2-service-install [-n <service name>]
pm2 start app.js --name myapp
pm2 list
pm2 save
pm2-service-uninstall

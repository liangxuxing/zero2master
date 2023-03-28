一，初始化项目
 1.npm init -y
 2.npm i koa 启动后端项目
 3.npm i koa-router 路由api 管理

 二，koa
 导入koa，创建koa实例对象，实例对象有listen方法。
 可搭配'dotenv'来配置环境变量(dotenv使用方法为,1:npm i dotenv.2:根目录创建.env环境配置文件.3：创建一个自命名的js文件引入dotenv,创建dotenv实例对象并调用config方法，它会自动找到.env配置对象并添加到process.env对象里.4：导出并在main.js引用.env配置对象来使用)

 三。koa-router
 为方便管理接口api，在根目录创建router文件夹。根据需求分为不同的js文件，最后导出，例子：
 1.创建user.js，这是一个关于用户的接口，首先导入koa-router创建实例对象
 2.调用实例对象创建api
 3.导出实例对象并在main引入后app.use使用中间件（中间件是个functiion）

 四.项目拆分(MVC)
随着项目不断扩大，必然要拆分层次，老生常谈的高内聚，低耦合
1.新建app文件夹，内建index.js。将http服务与app服务拆分
2.新建controller文件夹，例子：建造usersController，是关于user的操作api，class userController,类里面有异步的各种user方法，根据不同的需求去调用service层处理业务逻辑。然后暴露出去。
3.router文件夹导入这个Controller，并分配到响应的路由中间件（将路由与控制器拆分）

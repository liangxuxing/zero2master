const Koa = require('koa')
const userRouter = require('../router/user.route')

// indexRouter.get()

const app = new Koa()

app.use(userRouter.routes())

module.exports = app

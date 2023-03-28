const Koa = require('koa')
const userRouter = require('../router/user.route')
const { koaBody } = require('koa-body')

// indexRouter.get()

const app = new Koa()
// 会将请求参数封装到ctx.request对象里面 -KoaBody
app.use(koaBody())
app.use(userRouter.routes())

module.exports = app

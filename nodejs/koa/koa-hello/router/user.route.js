const Router = require('koa-router')
const { register } = require('../controller/user.controller')
// 配置baseUrl
const router = new Router({ prefix: '/users' })

//
// router.get('/', (ctx, next) => {
//   ctx.body = '这是userapi'
// })

router.post('/register', register)
module.exports = router

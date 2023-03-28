const { APP_PORT } = require('./config.default')
const app=require('./app')
// const Router=require('koa-router')

// const indexRouter=new Router()

app.listen(APP_PORT, () => {
  console.log(`启动项目:端口为${APP_PORT}`)
})

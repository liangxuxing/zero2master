const { createUserService } = require('../service/user.service')
class UserController {
  async register(ctx, next) {
    ctx.body = '登录接口'
  }
  async createUser(ctx, next) {
    const { user_name, password } = ctx.request.body
    const res = await createUserService(user_name, password)
    ctx.body = res
    console.log(res, 'ss')
  }
}

module.exports = new UserController()

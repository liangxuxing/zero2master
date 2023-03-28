class UserController {
  async register(ctx, next) {
    ctx.body = '登录接口'
  }
}

module.exports = new UserController()

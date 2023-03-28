class UserService {
  async createUserService(userName, password) {
    console.log('传值过来了')
    return { userName, password }
  }
}

module.exports = new UserService()

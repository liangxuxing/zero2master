import request from './request'

interface adminLoginData {
  username: string
  password: string
}
type promiseRes<T>= Promise<manageRes<T>>

interface manageRes<T> {
  code: number
  data: T,
  message: string
}

interface adminLoginRes{
    token: string
    tokenHead: string
}

interface adminInfoRes{
  menus:[]
}
// 登录接口
export const adminLogin = (data: adminLoginData): promiseRes<adminLoginRes> => request.post('/admin/login', data)

//获取登录用户信息
export const getAdminLoginInfo = ():promiseRes<adminInfoRes> => request.get('/admin/info', )

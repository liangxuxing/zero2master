export {}
// 接口是自定义类型用
interface myObj {
  a: string
  b: null
  c: number
}

let a: myObj
// a={
//     f:'sd'
// }错误
a = {
  a: 'sd',
  b: null,
  c: 4
}

// 给数组定义接口
interface arrayInter {
  [index: number]: string
}

let myArr: arrayInter
// myArr=[1]错误
myArr = ['2']

// 给函数定义接口
interface funInter {
  // (形参:类型)返回值:类型
  (a: number): string
}
// let a:funInter 错误
let c: funInter = (a) => {
  return 'helloworld'
}
c(6)

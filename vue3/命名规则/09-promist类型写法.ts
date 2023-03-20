export {}
interface prItf {
  code: string
  data: string[]
}
//Promise对象。。。。。对象名字:Promise<res:参数类型>
let s: Promise<prItf> = new Promise((resolve, reject) => {
  resolve({ code: 'fk', data: ['hhh', 'sss'] })
})

s.then((res) => {
  console.log(res)
})

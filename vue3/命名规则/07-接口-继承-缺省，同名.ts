export {}
interface a {
  a: number
}
interface b {
  b: string
}
interface c extends a, b {
  c: null
}
// 继承
let d: c
d = {
  a: 1,
  b: '2',
  c: null
}
// 同名
interface e {
  a: string
}

interface e {
  b: number
}
let e: e
e = {
  a: 's',
  b: 1
}
// 缺省
interface g {
  g?: string
  e?: number
  f: boolean
}
let g: g
g = {
  g: 'ss',
  f: true
}

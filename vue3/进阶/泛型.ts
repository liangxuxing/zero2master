// 所谓的泛型就是类型的形参化

export {}
function a<T>(a: T): T {
  return a
}

a('hellow')

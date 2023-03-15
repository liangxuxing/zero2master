function myDeepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj
  if (cache.get(obj)) return cache.get(obj)

  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }

  if (obj instanceof Date) return new Date(obj)

  const res = Array.isArray(obj) ? [] : {}

  cache.set(obj, res)

  // 关键代码
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = myDeepCopy(obj[key], cache)
    } else {
      res[key] = obj[key]
    }
  })

  return res
}

const example = {
  name: 'libai',
  meta: {
    age: 18,
    hobbies: ['foolball', 'cheess', 'basketball'],
    say: () => {
      'hello'
    }
  }
}

const copyExample = myDeepCopy(example)

console.log(example === copyExample)
console.log(example.meta.say === copyExample.meta.say)
console.log(example.meta.hobbies[1] === copyExample.meta.hobbies[1])

console.log(example.meta.hobbies === copyExample.meta.hobbies)

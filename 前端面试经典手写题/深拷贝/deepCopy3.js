function myDeepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj

  if (cache.get(obj)) return cache(obj)

  if (obj instanceof Date) return new Date(obj)

  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)

  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }

  const res = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = myDeepCopy(obj[key], cache)
    } else {
      res[key] = obj[key]
    }
  })
  return res
}

const fake = {
  name: 'libai',
  meta: {
    age: new Date(),
    sex: 'man',
    hobbies: ['football', 'sleep']
  }
}

const copyFake = myDeepCopy(fake)

console.log(fake.name === copyFake.name)
console.log(fake.meta.hobbies === copyFake.meta.hobbies)

function myDeepCopy(obj,cache=new WeakMap()){
    //  如果obj就是一个最顶端ObJECT
    if(! obj instanceof Object) return obj
     
    // 防止循环引用
    if(cache.get(obj)) return cache.get(obj)

    // 主要代码
    if(obj instanceof Function){
        return function(){
            return obj.apply(this,arguments)
        }
    }
    
    if(obj instanceof Date) return new Date(obj)

    if(obj instanceof RegExp) return new RegExp(obj.source,obj.flags)

    const res=Array.isArray(obj)?[]:{}
    
    cache.set(obj,res)

    Object.keys(obj).forEach((key)=>{
        if(obj[key] instanceof Object){
            res[key]=myDeepCopy(obj[key],cache)
        }else{
            res[key]=obj[key]
        }
    })
    return res
}

// 测试
const source = {
  name: 'AKA',
  meta: {
    age: 12,
    birth: new Date('1997-10-10'),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log('Hello');
    }
  }
}

source.source = source
const newObj = myDeepCopy(source)
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false
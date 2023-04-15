# springMVC概述

springMVC是spring为展示层提供基于**MVC**设计理念的web框架，能够快速对请求的处理和响应的处理做出更方便的写法操作。（按照我的理解就是request和response，因为业务前后端了，所以框架主要服务于controller层）

# 注解

@Componet 成为spring容器内的组件

@Controller:同上，添加到spring容器内，可以标识是controller层的组件

@Responpse：用于返回到响应体内

@RestController: @Controller+@Response共同作用

@RequestMapping:访问的路径，路由

```java
@RequestMapping(value="/hello/{id}")
public String getHell(@PathVariable("id") String id){
    return "hello"+id
}
使用@PathVariable("xx")来获取路由xx参数 
 
    
//QueryString风格 /hello2/id=2&name=zhansan
@RequestMapping(value="/hello2")//method=RequestMethod.POST,require=true
public String getHello2(@RequestParam("id") Interger id ,@RequestParam("name") String name ){
    return "hello2"+id+name
}
```



@getMapping:get方法访问的路由


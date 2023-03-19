1。Q:解析一下Vue在Web端项目的登录流程？
A：分为4个知识点.
①toekn:登录时候,需要调用登录接口将后端返回来的接口token存储起来。
②axios路由守卫:跳转任何前端路由都需要验证是否含有token，防止客户端知道路由路径直接能登入功能路径
③cookies/localstorage：需要将token存在cookies/localstorage里面来
④携带token:每个请求携带token，后端会根据是否有token来判断是否返回错误401。若没有token就会axios跳转到登录页。重新登录
以下是掘金回答
1.第一次登录的时候，前端调后端的登陆接口，发送用户名和密码
2.后端收到请求，验证用户名和密码，验证成功，就给前端返回一个token
3.前端拿到token，将token存储到localStorage和vuex中，并跳转路由页面
4.前端每次跳转路由，就判断 localStroage 中有无 token ，没有就跳转到登录页面，有则跳转到对应路由页面
5.每次调后端接口，都要在请求头中加token
6.后端判断请求头中有无token，有token，就拿到token并验证token，验证成功就返回数据，验证失败（例如：token过期）就返回401，请求头中没有token也返回401
7.如果前端拿到状态码为401，就清除token信息并跳转到登录页面
8.调取登录接口成功，会在回调函数中将token存储到localStorage和vuex中

**代码实现↓**
<details>
<summary>登录页面</summary>

```xml
    <div>    
        <input type="text" v-model="loginForm.username" placeholder="用户名"/>    
        <input type="text" v-model="loginForm.password" placeholder="密码"/>    
        <button @click="login">登录</button>  
    </div>
```

</details>
<details>
<summary>逻辑实现</summary>

```javascript
export default {  
    data() { 
        return {
          loginForm: { 
               username: "",
               password: "",
          },    
        };  
     },  
    methods: { 
       ...mapMutations(["changeLogin"]),
       login() {
          let _this = this;

          /////判读账号密码是否输入，没有则alert 出来
          if (this.loginForm.username === "" || this.loginForm.password === "") {
            alert("账号或密码不能为空");      
          } else { 
             this.axios({          
                method: "post",
                url: "/user/login",
                data: _this.loginForm,
              })
                .then((res) => {
                    console.log(res.data);
                    _this.userToken = "Bearer " + res.data.data.body.token;

                    // 将用户token保存到vuex中 
                   _this.changeLogin({   
                       Authorization: _this.userToken,
                    });          
                   _this.$router.push("/home");
                    alert("登陆成功");     
                 })        
                 .catch((error) => { 
                   alert("账号或密码错误");   
                   console.log(error);
                  });
               }    
            },  
          },
};
```

</details>
<details>
<summary>配置 路由导航守卫</summary>

```javascript
//router文件夹下的index.js
import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import home from '@/components/home';Vue.use(Router);

const router = new Router({  
    routes: [   
            {      path: '/',      redirect: '/login'    },
            {      path: '/login',      name: 'login',      component: login    },
            {      path: '/home',      name: 'home',      component: home    }  ]});
           // 导航守卫
           // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
            router.beforeEach((to, from, next) => { 
             if (to.path === '/login') {    next();  } 
             else {    let token = localStorage.getItem('Authorization');    
             if (token === 'null' || token === '')
             {      next('/login');    } 
             else {      next();    }  
             }
});
export default router;
```

</details>

<details>
<summary>请求头加token 在 main.js中添加</summary>

```javascript
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(  config => {    
    if (localStorage.getItem('Authorization'))
     {      
        config.headers.Authorization = localStorage.getItem('Authorization');    
     }    
    return config;  },  
    error => {    return Promise.reject(error);  
});
```

</details>
<details>
<summary>如果前端拿到状态码为401，就清除token信息并跳转到登录页面</summary>

```javascript
localStorage.removeItem('Authorization'); this.$router.push('/login');
```

</details>
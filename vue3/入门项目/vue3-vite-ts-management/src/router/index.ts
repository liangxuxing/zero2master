import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import Cookie from 'js-cookie'
import store from '../store'

//vue2的写法， Vue.use() 将调用 VueRouter里的install方法将自己方法绑定到vue.prototype.vuerouter上
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/Login.vue')
  },
  {
    path: '/checkGpt',
    name: 'checkGpt',
    component: () => import('../pages/checkGpt/checkGpt.vue')
  }
  // {
  //   path: '/homePage',
  //   name: 'homePage',
  //   component: () => import('../pages/homePage/homePage.vue')
  // }
]
//vue3写法
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('几次')

  let token = Cookie.get('token')
  if (token && store.state.menus.length === 0) {
    console.log('nihao')

    store.dispatch('getMenuInfo').then(() => {
      const menus = store.getters.getMenusArr
      console.log('1111111')
      console.log(menus)

      for (const key in menus) {
        console.log('3333')

        const newRouterArr: RouteRecordRaw = {
          path: '/' + menus[key].name,
          name: menus[key].name,
          component: () => import('../pages/homePage/homePage.vue'),
          redirect: '/' + menus[key].name + '/' + menus[key].children[0].name,
          children: []
        }
        console.log('222')

        for (let index = 0; index < menus[key].children.length; index++) {
          newRouterArr.children?.push({
            path: '/' + menus[key].children[index].name,
            name: menus[key].children[index].name,
            component: () => import(`../pages/${menus[key].name}/${menus[key].children[index].name}.vue`)
          })
        }
        console.log(newRouterArr, 'newroue')
        router.addRoute(newRouterArr)
      }
      router.addRoute({
        path: '/',
        name: 'homePage',
        component: () => import('../pages/homePage/homePage.vue'),
        redirect: '/index',
        children: [
          {
            path: 'index',
            name: 'index',
            component: () => import('../pages/index/index.vue')
          }
        ]
      })
      next(to.path)
    })
  } else {
    next()
  }
})

export const initRouter = (app: App<Element>) => {
  app.use(router)
}

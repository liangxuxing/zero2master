import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Vue from 'vue'
//vue2的写法， Vue.use() 将调用 VueRouter里的install方法将自己方法绑定到vue.prototype.vuerouter上
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/Login.vue')
  },
  {
    path:'/homePage',
    name:'homePage',
    component:()=> import('../pages/homePge/homePage.vue')
  }
]
//vue3写法
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

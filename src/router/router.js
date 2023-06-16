import { createRouter, createWebHashHistory } from 'vue-router';

// 1、引入组件
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
/**
 * 2、配置路由映射关系
 */
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: "/login",
    component: Login
  }
]
// 3、创建一个路由的对象
const router = createRouter({
  // 指定模式
  /**
   * createWebHashHistory 带 # 号
   * createWebHistory 不带 # 号
   */
  history: createWebHashHistory(),
  // 下面这个 可以写成ES6的简写 routers
  routes: routes
})

export default router

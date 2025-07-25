//createRouter：创建router实例对象
//createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component对应关系的位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          //二级组件path置空，当访问Layout页的时候，该默认路由组件也会被访问
          path: "",
          component: Home
        },
        {
          path: "category",
          component: Category
        }
        
      ]
    },
    {
      path: "/login",
      component: Login
    }
  ],
})

export default router

/*
* 路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/Home/home.vue')
const Identify = () => import('../pages/Identify/Identify.vue')
const Feilei = () => import('../pages/Feilei/Feilei.vue')
const Shop = () => import('../pages/Shop/Shop.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  //所有路由
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        showFooter:true
      }
    },
    {
      path:'/identify',
      component:Identify,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/feilei',
      component:Feilei,
      meta: {
        showFooter:true
      }
    },
    {
      path:'/shop',
      component:Shop,
      meta: {
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

export default router

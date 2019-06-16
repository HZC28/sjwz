import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cart from "@/components/shoppingcart/cart.vue"
import myinfo from "@/components/personinfo/myinfo.vue"
import secordshop from "@/components/secordhand/secordshop.vue"
import order from "@/components/myorder/order.vue"
import shopdetail from "@/components/public/shopdetail.vue"
import register from "@/components/user/register.vue"
import forgetpassword from "@/components/user/forgetpassword.vue"
import address from "@/components/personinfo/address.vue"
import addsecord from "@/components/secordhand/addsecord.vue"
import message from "@/components/public/message.vue"
import secordorder from "@/components/myorder/secordorder.vue"
import personinfomation from "@/components/personinfo/personinfomation.vue"
import infoconnect from "@/components/personinfo/infoconnect.vue"
import allorder from "@/components/myorder/allorder.vue"
import obligation from "@/components/myorder/obligation.vue"
import ondelivery from "@/components/myorder/ondelivery.vue"
import daipingjia from "@/components/myorder/daipingjia.vue"
import shouhou from "@/components/myorder/shouhou.vue"


Vue.use(Router)

export default new Router({
  //base:'/sjwz',
  mode:"history",
  routes: [
  //入口文件，即首页路由
   {path:'/',redirect:'/home'},
   //首页
    {
      path: '/home',
      name: 'home',
      component: home
    },
    //购物车
     {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    //个人信息
     {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo,
      redirect:{name:'infoconnect'},
      children:[
      //个人信息路由
        {
          path:'infoconnect',
          name:'infoconnect',
          component:infoconnect
        },
        //用户基本信息路由
        {
          path:'personinfomation',
          name:'personinfomation',
          component:personinfomation
        },
        //收货地址路由
        {
          path:'address',
          name:'address',
          component:address
        },
        //消息，聊天路由
        {
          path:'message',
          name:'message',
          component:message
        },

      ]

    },
    //二手商品路由
     {
      path: '/secordshop',
      name: 'secordshop',
      component: secordshop,
    },
    //我的订单路由
     {
      path: '/order',
      name: 'order',
      component: order,
      redirect:{name:'allorder'},
      children:[
        {
          //全部订单
          path:'allorder',
          name:'allorder',
          component:allorder
        },
        {
          //待付款
          path:'obligation',
          name:'obligation',
          component:obligation
        },
        {
          //待收货
          path:'ondelivery',
          name:'ondelivery',
          component:ondelivery
        },
        {
          //售后
          path:'shouhou',
          name:'shouhou',
          component:shouhou
        },
        {
          //待评价
          path:'daipingjia',
          name:'daipingjia',
          component:daipingjia
        }
      ]
    },
    //商品详情路由
    {
      path: '/shopdetail/',
      name: 'shopdetail',
      component: shopdetail
    },
    //注册路由
    {
      path: '/register',
      name: 'register',
      component: register
    },
    //忘记密码路由
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: forgetpassword
    },
   {
      path: '/addsecord',
      name: 'addsecord',
      component: addsecord
    },
    {
      path: '/secordorder',
      name: 'secordorder',
      component: secordorder
    },

  ]
})

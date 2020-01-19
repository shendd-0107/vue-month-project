import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Guan from "@/views/guanzhu"
import Add from "@/views/add"
import Msg from "@/views/msg"
import My from "@/views/my"
import Common from "@/views/common"
import City from "@/views/city"
Vue.use(Router)

const VueRouter =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{name:"common"},
      children:[
        {
          path:"common",
          name:"common",
          component:Common
        },
        {
          path:"city",
          name:"city",
          component:City
        }
      ]
    },
    {
      path:"/guan",
      name:"guan",
      component:Guan
    },
    {
      path:"/add",
      name:"add",
      component:Add,
      // beforeEnter(to,from,next){
      //   if(window.localStorage.name == "YES"){
      //     next()
      //   }
      //   else{
      //     alert("请您先登录")
      //     next("/my");
      //   }
      // }
    },
    {
      path:"/msg",
      name:"msg",
      component:Msg
    },
    {
      path:"/my",
      name:"my",
      component:My
    }
  ]
})
export default VueRouter;
let arr = ['add','msg']
VueRouter.beforeEach((to,from,next)=>{
  if(arr.includes(to.name)){
    if(window.localStorage.getItem("name")){
      next()
    }
    else{
      next("/my");
    }
  }
  else{
    next()
  }
})
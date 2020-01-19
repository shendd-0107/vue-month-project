import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
Vue.use(Router)

const VueRouter =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }
  ]
})
export default VueRouter;
// let arr = ['add','msg']
// VueRouter.beforeEach((to,from,next)=>{
//   if(arr.includes(to.name)){
//     if(window.localStorage.getItem("name")){
//       next()
//     }
//     else{
//       next("/my");
//     }
//   }
//   else{
//     next()
//   }
// })
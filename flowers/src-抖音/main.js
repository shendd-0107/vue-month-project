import Vue from 'vue'
import App from './App'
import router from './router'
import myheader from "./components/header"
import myfooter from "./components/footer";
import "./fonts/iconfont.css"
import axios from "axios"
import store from "./store"
import "swiper/dist/css/swiper.min.css"
Vue.config.productionTip = false
Vue.component("myheader",myheader);
Vue.component("myfooter",myfooter);
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

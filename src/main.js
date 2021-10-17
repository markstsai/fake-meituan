import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Axios from 'Axios'

// 1. 導入組件
import Goods from "./components/goods/Goods"
import Ratings from "./components/ratings/Ratings"
import Seller from "./components/Seller/Seller"

Vue.config.productionTip = false

// 安裝vue-router
Vue.use(VueRouter);

// 如果在其他組件中使用Axios命令，需改寫為Vue原型屬性
Vue.prototype.$axios = Axios;

// 2. 定義路由
const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }
]

// 3.創建Router實例
const router = new VueRouter({
  routes,
  //選中後的類名
  linkActiveClass:'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 4. 創建和掛載跟實例
  router,
  render: h => h(App)
})

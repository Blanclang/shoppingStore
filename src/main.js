// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App'
import router from './routers.js'
import axios from 'axios'

// import Home from './view/home'
// import OrderList from './view/orderList'
// Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

// let router= new VueRouter({
//     mode: 'history',
//     routes:[
//         {
//             path: '/',
//             component: Home
//         },
//         {
//             path: '/orderList',
//             component: OrderList
//         },
//         {
//             path: '*',
//             component: Home
//         }
//     ]
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

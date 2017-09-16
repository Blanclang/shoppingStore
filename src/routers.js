import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
     mode: 'history',
     routes:[
          {
               path: '/',
               component:  (resolve) => {
                    require(['./view/home'],resolve);
               }
          },
          {
               path: '/home',
               component:  (resolve) => {
                    require(['./view/home'],resolve);
               }
          },
          {
               path: '/orderList',
               name:'orderList',
               component:  (resolve) => {
                    require(['./view/orderList'],resolve);
               },
               meta: '商户'
          },
          {
               path:'/detail',
               name:'detail',
               component:  (resolve) => {
                    require(['./view/detailBox'],resolve);
               },
               redirect: './detail/analysis',
               children: [
                    {
                         path: '/detail/analysis',
                         component: (resolve) => {
                              require(['./view/detail/analysis'],resolve);
                         } 
                    },
                    {
                         path: '/detail/count',
                         component: (resolve) => {
                              require(['./view/detail/count'],resolve);
                         } 
                    },
                    {
                         path: '/detail/forecast',
                         component: (resolve) => {
                              require(['./view/detail/forecast'],resolve);
                         } 
                    },
                    {
                         path: '/detail/publish',
                         component: (resolve) => {
                              require(['./view/detail/publish'],resolve);
                         } 
                    }
               ]
          },
          {
               path:'*',redirect:'/home'
          }
    ]
});

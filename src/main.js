// import { createApp } from 'vue'
// import App from './App.vue'
//  import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
// createApp(App).use(Antd).mount('#app');


//  import Vue from 'vue';
//  import App from './App.vue';
//  import VueRouter from 'vue-router';
//  import LayoutNavi from './components/LayoutNavi.vue';

//  Vue.use(VueRouter); // Ensure Vue is initialized before using VueRouter
//  Vue.config.productionTip = false;
// const router = new VueRouter({
//     routes: [
//       // Define your routes here
//       { path: '/', component: LayoutNavi }
    
//     ],
//   });
  

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app');


import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Import Vue Router
import routes from './routes';
Vue.use(VueRouter); // Sử dụng Vue Router



const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


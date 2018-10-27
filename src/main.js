import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import store from './store'
import './mock'
import './filters'

import VueLazyload from 'vue-lazyload'

import loading from './common/imgs-lazy/loading.gif'

Vue.use(VueLazyload, { // 内部添加一个全局指令: lazy
  loading,
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

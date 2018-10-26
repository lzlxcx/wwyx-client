import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import store from './store'
import './mock'
import './filters'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

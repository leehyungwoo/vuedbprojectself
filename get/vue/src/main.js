import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

 
 
new Vue({
  store,
  router, 
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import scroller from './components/scroller'
Vue.component('scroller',scroller)

import loading from './components/loading'
Vue.component('loading',loading)

Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/, arg);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

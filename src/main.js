import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VuexStore from './store'

Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

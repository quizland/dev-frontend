import Vue from 'vue'
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VuexStore from './store'
import EventBus from './eventBus'

Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

Vue.config.productionTip = false

Vue.prototype.$bus = EventBus

let app = ''

firebase.initializeApp(firebaseConfig)
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebase firestore timestamp fix
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)
// // export default firebaseApp.firestore()
export default firestore

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

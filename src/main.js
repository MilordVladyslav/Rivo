import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'
import ErrorPage from './components/ErrorPage'
import SuccessPage from './components/SuccessPage'
import store from './store/index.js'
import VueNumber from 'vue-number-animation'
import Vuelidate from "vuelidate"
import VModal from 'vue-js-modal'

Vue.use(VueNumber)

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VModal)
// Vue.forceUpdate();
Vue.component('error-page', ErrorPage)
Vue.component('success-page', SuccessPage)


var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease-in",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: function(element) {
     let bodyClass = document.querySelector('body');
     bodyClass.classList.add('effect_switch');
  },
  onDone: function(element) {
     let bodyClass = document.querySelector('body');
     bodyClass.classList.remove('effect_switch');
  },
  onCancel: false,
  x: false,
  y: true
})


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});



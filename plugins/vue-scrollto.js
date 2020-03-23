import Vue from 'vue'

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
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
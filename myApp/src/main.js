// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store/store'


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

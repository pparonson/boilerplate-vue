import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

// create a VueRouter instance and pass the routes object
// const router = new VueRouter({mode: 'history', routes})
const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
 }).$mount('#app')

import Vue from 'vue'
import App from './App'

Vue.config.productionTip=false
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
Vue.use(VueRouter)
const vm=new Vue({
    el:"#root",
    store,
    render: h => h(App),
    router:router
})

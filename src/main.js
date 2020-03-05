import Vue from 'vue'
import App from './App.vue'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import Vuex from 'vuex';
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './routes/router.js'







Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex);
// Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
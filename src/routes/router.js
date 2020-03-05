import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('../components/home.vue')
    }]
})

// import profile from '../components/Profile.vue'

// let router = [{
//         path: '/',
//         component: require('../components/home.vue')
//     },
//     {
//         path: '/profile',
//         component: profile
//     },
// ];

export default new VueRouter({ router });
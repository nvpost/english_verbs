import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        verbs: []
    },
    mutations: {
        getAll(state, payload) {
            state.verbs = payload
        }
    },
    actions: {

    },
    getters: {
        getVerbs(state) {
            return state.verbs
        }
    }
})
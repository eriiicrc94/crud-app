import { createStore } from 'vuex'
import rootMutations from './store/mutations.js'
import rootGetters from './store/getters.js'
import rootActions from './store/actions.js'


const store = createStore({
    state() {
        return {
            employees: []
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
})

export default store
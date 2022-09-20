import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            employees: []
        }
    },
    mutations: {
        addEmployees(state, employees) {
            state.employees.push(employees)
        },
        emptyEmployees(state) {
            state.employees = []
        },
        deleteEmployee(state, id) {
            state.employees = state.employees.filter(employee => employee.id !== id)
        }
    },
    getters: {
        employees(state) {
            return state.employees
        }
    },
    actions: {
        addEmployees({commit}, employees) {
            commit('addEmployees', employees)
        },
        emptyEmployees({commit}) {
            commit('emptyEmployees')
        },
        deleteEmployee({commit}, id) {
            commit('deleteEmployee', id)
        }
    }
})

export default store
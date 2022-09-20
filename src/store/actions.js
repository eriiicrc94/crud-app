export default {
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
export default {
    addEmployees(state, employees) {
        state.employees.push(employees)
    },
    emptyEmployees(state) {
        state.employees = []
    },
    deleteEmployee(state, id) {
        state.employees = state.employees.filter(employee => employee.id !== id)
    }
}
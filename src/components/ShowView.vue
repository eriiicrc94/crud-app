<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import EmployeeView from './employee/EmployeeView.vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const store = useStore()

const data = reactive({
  isLoading: false,
  employees:  []
})

const showEmployees = computed(() => {
  return store.getters.employees.length > 0 && data.isLoading === false
})

const showSpinner = computed(() => {
  return data.isLoading === true
})

async function getEmployees() {
  data.isLoading = true
  store.dispatch('emptyEmployees')
  const querySnapshot = await getDocs(collection(db, 'employees'))
  try {
    if (querySnapshot.docs.length > 0) {
      querySnapshot.forEach((doc) => {
        data.isLoading = false
        let result = {
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email
        }
        store.dispatch('addEmployees', result)
      })
    } else {
      data.isLoading = false
    }
  } catch (e) {
    console.log(e)
  }
}

function employeeDeleted(id) {
  store.dispatch('deleteEmployee', id)
  
}

onMounted(async () => {
  
  getEmployees()
})

</script>

<template>
    <div class="container">
        <h1>Employees List</h1>

        <div v-if="showSpinner" class="container text-center">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        <div v-else-if="showEmployees" class="cards">
            <employee-view v-for="emp in store.getters.employees"
                :key="emp.id"
                :name="emp.name"
                :email="emp.email"
                :id="emp.id"
                @deleteEmployeeEmit="employeeDeleted(emp.id)"
            />
        </div>
        <div v-else>There are not employees registered, maybe do you want to <router-link to="register">register</router-link> ?</div>
    </div>
</template>

<style lang="scss" scoped>

.cards {
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }
  @media screen and (min-width: 501px) and (max-width:799px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }
}
//DELETE
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #000;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}


</style>

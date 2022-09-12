<template>
    <div class="container">
        <h1>Employees List</h1>
        
        <div v-if="showSpinner" class="container text-center">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        <div v-else-if="showEmployees" class="cards">
            <employee-view v-for="emp in employees"
                :key="emp.id"
                :name="emp.name"
                :email="emp.email"
                :id="emp.id"
                @deleteEmployee="employeeDeleted(emp.id)"
            />
        </div>
        <div v-else>There are not employees registered, maybe do you want to <router-link to="register">register</router-link> ?</div>
    </div>
</template>

<script>
import EmployeeView from './employee/EmployeeView.vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
export default {
    components: {
        EmployeeView
    },
    data() {
        return {
            isLoading: false,
            employees: []
        }
    },
    computed: {
        showEmployees() {
            return this.employees.length > 0 && this.isLoading === false
        },
        showSpinner() {
            return this.isLoading === true
        }
    },
    methods: {
      async getEmployees() {
        this.isLoading = true
        const querySnapshot = await getDocs(collection(db, 'employees'))
        try {
          if (querySnapshot.docs.length > 0) {
            querySnapshot.forEach((doc) => {
              this.isLoading = false
              let data = {
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email
              }
              this.employees.push(data)
            })
          } else {
            this.isLoading = false
          }
        } catch (e) {
          console.log(e)
        }
      },
      employeeDeleted(id) {
        this.employees = this.employees.filter(employee => employee.id !== id)
      }
    },
    async mounted() {
      this.getEmployees()
  }  
}
</script>

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

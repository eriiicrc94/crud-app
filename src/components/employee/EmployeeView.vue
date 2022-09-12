<template>
    <div class="card">
      <div class="container">
        <h4 class="mt-4"><b>{{name}}</b></h4> 
        <p class="mt-4 mb-5">email: {{email}}</p> 
        <div class="container right-position">
          <button class="btn btn-primary" @click="openEditModal()">Edit</button>
          <button class="btn btn-dark" @click="deleteEmployee(id)">Delete</button>  
        </div>
      </div>
      <modal-confirm 
        v-if="isDeleteClicked"
        comp='employee-view'
        :name=name
        title='Delete Modal'
        @closeModal="closeModal(id)">
      </modal-confirm>      
    </div>
</template>

<script>
import ModalConfirm from '../modals/ModalConfirm.vue'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export default {
    components: {
      ModalConfirm
    },
    data() {
      return {
        isDeleteClick: false
      }
    },   
    props: ['id', 'name', 'email'],
    computed: {
      isDeleteClicked() {
        return this.isDeleteClick
      }
    },
    methods: {
      openEditModal() {
        console.log('edit')
      },
     deleteEmployee() {
        this.isDeleteClick = true        
      },
      async closeModal(id) {
        await deleteDoc(doc(db, 'employees', id))
        this.$emit('deleteEmployee')
        this.isDeleteClick = false
      }
    }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  transition: 0.3s;
  width: 90%;
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    margin: 2% 2% 4% 5%;
  }
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 1% 10%;
}

.btn{
  margin-right: 0.3rem;
  margin-bottom: 1rem;
}

.right-position{
  text-align: right;
  padding-right: 0px;
}
</style>
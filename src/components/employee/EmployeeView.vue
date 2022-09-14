<script setup>
  import { reactive, defineEmits, defineProps, computed } from 'vue'
  import ModalConfirm from '../modals/ModalConfirm.vue'
  import { doc, deleteDoc } from 'firebase/firestore'
  import { db } from '../../firebase'

  const props = defineProps({
    id: String,
    name: String, 
    email: String
  })

  const data = reactive({
    isDeleteClick: false
  })

  const isDeleteClicked = computed(() => {
    return data.isDeleteClick
  })

  const emit = defineEmits('deleteEmployeeEmit')

  function openEditModal() {
    console.log('edit')
  }

  function deleteEmployee() {    
    data.isDeleteClick = true
  }

  async function closeModal(id) {
    await deleteDoc(doc(db, 'employees', id))
    emit('deleteEmployeeEmit')
    data.isDeleteClick = false
  }

</script>

<template>
    <div class="card">
      <div class="container">
        <h4 class="mt-4"><b>{{props.name}}</b></h4> 
        <p class="mt-4 mb-5">email: {{props.email}}</p> 
        <div class="container right-position">
          <button class="btn btn-primary" @click="openEditModal()">Edit</button>
          <button class="btn btn-dark" @click="deleteEmployee()">Delete</button>  
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
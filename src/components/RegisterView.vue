<script setup>
import { reactive } from 'vue'
import ModalConfirm from './modals/ModalConfirm.vue'
import ButtonCommon from './common/ButtonCommon.vue'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const data = reactive({
  name: '',
  email: '',
  isRegistered: false
})

async function registerEmployee() {
  if (data.name !== '' && data.email !== '') {
    await addDoc(collection(db, 'employees'), {
      name: data.name,
      email: data.email
    });
    data.isRegistered = true
  } else {
    return
  }
}

function closeModal() {
  data.name = ''
  data.email = ''
  data.isRegistered = false
}
</script>

<template>
  <div class="container ">
    <h1>Register employee</h1>
    <form @submit.prevent>
      <div class="form-control">
        <label for="user-name"> Name</label>
        <input id="user-name" name="user-name" type="text" placeholder="Name" v-model="data.name"/>
      </div>
      <div class="form-control">
        <label for="email"> Email</label>
        <input id="email" name="email" type="text" placeholder="Email" v-model="data.email"/>
      </div>
      <button-common @click="registerEmployee()"
          title='Register'
          type='submit'/>   
    </form>
      <modal-confirm v-if="data.isRegistered"
        :name="data.name"
        comp='register-view'
        title='Register Modal'
        @closeModal="closeModal()"></modal-confirm>
  </div>
</template>

<style lang="scss" scoped>

form {
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2rem;
  background-color: white;
}
.form-control {
  border: 0px;
  margin-bottom: 1rem;
}
label { 
  display:block 
}

input {
  margin-top: 0.3rem;
}

</style>
<template>
  <div class="container ">
    <h1>Register employee</h1>
    <form @submit.prevent>
      <div class="form-control">
        <label for="user-name"> Name</label>
        <input id="user-name" name="user-name" type="text" placeholder="Name" v-model="this.name"/>
      </div>
      <div class="form-control">
        <label for="email"> Email</label>
        <input id="email" name="email" type="text" placeholder="Email" v-model="this.email"/>
      </div>
      <button-common @click="registerEmployee()"
          title='Register'
          type='Submit'/>   
    </form>
      <modal-confirm v-if="isRegistered"
        :name="this.name"
        comp='register-view'
        title='Register Modal'
        @closeModal="closeModal()"></modal-confirm>
  </div>
</template>

<script>
import ModalConfirm from './modals/ModalConfirm.vue'
import ButtonCommon from './common/ButtonCommon.vue'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
export default {
  components: {
    ModalConfirm,
    ButtonCommon
  },
  data() {
    return {
      name: '',
      email: '',
      isRegistered: false
    }
  },
  methods: {
    async registerEmployee() {
      if (this.name !== '' && this.email !== '') {
       await addDoc(collection(db, 'employees'), {
          name: this.name,
          email: this.email
        });
        this.isRegistered = true
      } else {
        return
      }
      
    },
    closeModal() {
      this.name=''
      this.email=''
      this.isRegistered = false
    }
  }
}
</script>

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
<script setup>
import ButtonCommon from '../common/ButtonCommon.vue'
import { defineProps, computed, defineEmits } from 'vue'

const props = defineProps({
    name: String,
    comp: String,
    title: String
})

const emit = defineEmits(['closeModal'])

const isRegisterComp = computed(() => {
    return props.comp === 'register-view'
})

const isEmployeeViewComp = computed(() => {
    return props.comp === 'employee-view'
})

function closeModal() {
    emit('closeModal')
}
</script>

<template>
    <div class="modal-confirm">
        <div class="modal-content text-center">
            <h1>{{title}}</h1>
            <div v-if="isRegisterComp">
                <p ><b>{{props.name}}</b> has been registered successfully!!</p>
            </div>
            <div v-if="isEmployeeViewComp">
                <p>Are you sure do you want to delete <b>{{props.name}}</b>?</p>
            </div>            
            <button-common @click="closeModal()"
              title='Confirm'/>
        </div>
    </div>
</template>

<style scoped>
.modal-confirm {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  border-radius: 10px;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

h1{
    margin-top: 2rem;
}

p{
    margin-top: 2rem;
    margin-bottom: 2rem;
}

</style>

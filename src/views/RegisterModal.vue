<template>
  <div class="register-modal">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';


const emit = defineEmits(['close']);

const authStore = useAuthStore();



const closeModal = () => {
  emit('close');
}

const username = ref('');
const email = ref('');
const password = ref('');
const register = async () => {
  const res = await authStore.register(username.value, email.value, password.value);

  if(res?.status == 200) alert('Usuario registrado exitosamente');
  emit('close');
}

</script>

<style scoped>
.register-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
  float: right;
  font-size: 20px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

form{
  display: flex;
  flex-direction: column;

}

button {
    margin: 0 auto;
    margin-top: 32px;
    background-color: black;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>

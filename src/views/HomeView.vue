<template>
  <section class="main-section">
    <div>
      <header class="main-header">
        <div>
          <img src="@/assets/icons/headerIcon.svg" alt="header-icon">
        </div>
        <nav>
          <ul>
            <li>
              <router-link :to="{name: 'about'}">Acerca de</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'products'}">Productos</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <div class="cta-container">
        <div>
          <h1>¡Renueva tu estilo con nuestras camisetas exclusivas!</h1>
          <p>Explora nuestra colección única de camisetas diseñadas para destacar. Ya sea que busques comodidad para el día a día o un look que hable por ti, aquí encontrarás la opción perfecta. ¡Compra ahora y recibe envío gratis en pedidos seleccionados!</p>
        </div>
        <button @click="goToProducts">
          Encuentra una camiseta
        </button>
        <div></div>
      </div>
    </div>

    <div class="find_container">
      <div class="auth_actions-container" v-if="!isAuth">
        <button class="login-link" @click="toggleLoginModal">
          Iniciar sesión
        </button>
        <button class="register-link" @click="toggleRegisterModal">
          Registrarse
        </button>
      </div>
      <div class="user-info" v-else>
        <p>Bienvenido, {{ user.name }}</p>

      </div>
      <img class="hero-img" src="@/assets/images/Hero.png" alt="hero-img">
    </div>
  </section>
  <LoginModal v-if="showLoginModal" @close="toggleLoginModal"/>
  <RegisterModal v-if="showRegisterModal" @close="toggleRegisterModal"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginModal from "@/views/LoginModal.vue";
import RegisterModal from '@/views/RegisterModal.vue';

import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const router = useRouter();

const authStore = useAuthStore();
const { user,isAuth } = storeToRefs(authStore);

const  goToProducts = () => {
  router.push({name: 'products'})
}

const showLoginModal = ref(false);
const toggleLoginModal = () => {
  showLoginModal.value = !showLoginModal.value;
}

const showRegisterModal = ref(false);
const toggleRegisterModal = () => {
  showRegisterModal.value = !showRegisterModal.value;
}


</script>

<style scoped>
.main-section {
  height: 100vh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
}

.cta-container {
  height: 100vh;
   width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #6b6b6b;
  }

  button {
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

}

.find_container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: black;
}

.hero-img{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65vh;
}

.main-header {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
}



nav>ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap:32px;
  align-items: center;
}

a {
  color: black;
  font-weight: 500;
}

.auth_actions-container{
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 16px;

  .register-link {
    background-color: white;
    color: black;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  .login-link {
    background-color: black;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid white;
    cursor: pointer;
  }
}

.user-info {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 16px;
  p {
    color: white;
    font-weight: 500;
  }
}


</style>


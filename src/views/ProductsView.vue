<template>
  <section>
    <div class="products-header">
      <div>
        <img src="@/assets/icons/headerIcon.svg" alt="header-icon">
      </div>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'about' }">Acerca de</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'products' }">Productos</router-link>
          </li>
        </ul>
      </nav>
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
        <img src="@/assets/icons/logout-svgrepo-com_black.svg" alt="logout-img" @click="logout">



      </div>
    </div>

    <AppFilters />

    <div class="products-container">
      <Product v-for="product in products" :key="product._id" :product="product" />

    </div>

    <LoginModal v-if="showLoginModal" @close="toggleLoginModal"/>
    <RegisterModal v-if="showRegisterModal" @close="toggleRegisterModal"/>
  </section>
</template>

<script setup lang="ts">
import Product from './ProductCard.vue';
import AppFilters from '@/components/AppFilters.vue';
import { useAuthStore } from '@/stores/authStore';
import LoginModal from "@/views/LoginModal.vue";
import RegisterModal from '@/views/RegisterModal.vue';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const authStore = useAuthStore();
const {isAuth,user}  = storeToRefs(authStore);

const productsStore = useProductStore();
productsStore.getProducts();
const { products } = storeToRefs(productsStore);


const showLoginModal = ref(false);
const toggleLoginModal = () => {
  showLoginModal.value = !showLoginModal.value;
}

const showRegisterModal = ref(false);
const toggleRegisterModal = () => {
  showRegisterModal.value = !showRegisterModal.value;
}

const logout = () => {
  authStore.logout();
  router.push({name: 'home'});
}






</script>

<style scoped>
.products-header {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
}

nav>ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
}

a {
  color: black;
  font-weight: 500;
}

.auth_actions-container {
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
    border: 1px solid black;
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

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
}

.user-info {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  gap: 16px;
  p {
    color: black;
    font-weight: 500;
  }
  img {
    cursor: pointer;
    height: 20px;
  }
}
</style>

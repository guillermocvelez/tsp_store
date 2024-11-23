<template>
  <section>
    <div class="products-header">
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
        <div class="auth_actions-container">
        <button class="login-link">
          Iniciar sesión
        </button>
        <button class="register-link">
          Registrarse
        </button>
      </div>
    </div>

    <AppFilters />

    <div class="products-container">
      <Product
        v-for="product in products_json"
        :key="product._id"
        :product="product"
      />

    </div>


  </section>
</template>

<script setup lang="ts">
import Product from './ProductCard.vue';
import AppFilters from '@/components/AppFilters.vue';

import { useProductStore } from '@/stores/productStore';
//import { storeToRefs } from 'pinia';

import ProductData from '@/assets/proucts.json';
import { ref } from 'vue';
import type { Products } from '@/types/productTypes';

const productsStore = useProductStore();
productsStore.getProducts();
//const { products } = storeToRefs(productsStore);

const products_json = ref<Products[]>(ProductData);

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

.products-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
}
</style>


import { defineConfig } from 'vite';
<template>
  <div class="filters-container">
    <div>
      <button @click="toggleShowFilters">
        {{!showFilters ? 'Mostrar' : 'Ocultar'}} Filtros
      </button>
    </div>
    <div>
      <div class="input-container">
        <label for="">Ordenar por:</label>
        <select @input="orderProductsBy">
          <option value="price-asc">Precio: Menor a mayor</option>
          <option value="price-desc">Precio: Mayor a menor</option>
          <option value="rating">Mejor calificación</option>
        </select>
      </div>
    </div>
  </div>
  <div class="filter" v-if="showFilters">
    <!-- Filtro de precio -->
    <div class="input-container">
        <label for="priceRange">Rango de precio:</label>
        <input
          v-model="priceRange"
          type="range"
          id="priceRange"
          min="0"
          max="50"
          step=".5"
          @input="filterByPriceRange"
        >
        <span id="priceValue">${{  priceRange }}</span>
      </div>
      <!-- Filtro de categoría -->
      <div class="input-container">
        <label for="category">Categoría:</label>
        <select id="category" @input="filterByCategory">
          <option value="all">Todas</option>
          <option value="Camisetas">Camisetas</option>
          <option value="Básicas">Básicas</option>
          <option value="Pantalones">Pantalones</option>
        </select>
      </div>
      <!-- Filtro de calificación -->
      <div class="input-container">
        <label for="rating">Calificación mínima:</label>
        <select id="rating" @input="filterByRating">
          <option value="0">Sin filtro</option>
          <option value="1">1 estrella</option>
          <option value="2">2 estrellas</option>
          <option value="3">3 estrellas</option>
          <option value="4">4 estrellas</option>
          <option value="5">5 estrellas</option>
        </select>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';
// import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const productStore = useProductStore();
//const { products } = storeToRefs (productStore);



const showFilters = ref(false);
const toggleShowFilters = () => {
  showFilters.value = !showFilters.value;
  productStore.resetFilters();

};

const priceRange = ref(0);

const orderProductsBy = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  if( select.value === 'price-asc') return productStore.orderProductsAsc()
  if( select.value === 'price-desc') return productStore.orderProductsDesc()
  if( select.value === 'rating') return productStore.orderProductsByRating()
}

const filterByPriceRange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  priceRange.value = parseInt(input.value);
  productStore.filterProductsByPrice( priceRange.value);
}

const filterByCategory = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  if( select.value === 'todas') return productStore.resetFilters();
  productStore.filterProductsByCategory(select.value);
}

const filterByRating = (event: Event) => {
  const select = event.target as HTMLSelectElement;

  productStore.filterProductsByRating(parseInt(select.value));
}
</script>

<style scoped>
.filters-container{
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 8px 16px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  cursor: pointer;
}

.input-container{
  display: flex;
  gap: 16px;
  align-items: center;
}

label {
  font-weight: 600;
  color: #6b6b6b;
}

select {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid black;
  color: #6b6b6b;
}

select:focus {
  outline: none;
  border: 2px solid black;
}

.filter{
  padding: 32px;
  display: flex;
  gap: 32px;
  align-items: center;
  border-bottom: 2px solid #6b6b6b;
}
</style>


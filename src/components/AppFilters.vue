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
        <select name="" id="">
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
        <input type="range" id="priceRange" min="0" max="50000" step="1">
        <span id="priceValue">$0 - $50000</span>
      </div>
      <!-- Filtro de categoría -->
      <div class="input-container">
        <label for="category">Categoría:</label>
        <select id="category">
          <option value="">Todas</option>
          <option value="Camisetas">Camisetas</option>
          <option value="Básicas">Básicas</option>
          <option value="Pantalones">Pantalones</option>
        </select>
      </div>
      <!-- Filtro de calificación -->
      <div class="input-container">
        <label for="rating">Calificación mínima:</label>
        <select id="rating">
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
import { ref } from 'vue';



const showFilters = ref(false);
const toggleShowFilters = () => showFilters.value = !showFilters.value;
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


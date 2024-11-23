<template>
  <div class="product-card">
    <div class="img" :style="{
      backgroundImage: `url(${props.product.imageUrl})`,
      height: '250px',
      borderRadius: '16px 16px 0 0',
      backgroundSize: 'cover',
    }"></div>
    <!-- <img :src="props.product.imageUrl" alt=""> -->
    <div class="product-data">
      <p>{{  props.product.name }}</p>
      <p>{{ props.product.price }}</p>
      <p>{{  (props.product.price -  discount).toFixed(2) }} <span> -15%</span></p>
      <p>{{  `⭐ ${props.product.rating || 0} (${props.product.reviews || 0}+)` }}</p>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '@/types/productTypes';
import { ref } from 'vue';


interface Props {
  product: Products;
}

const props = defineProps<Props>();

const discount = ref(props.product.price * 0.15);

</script>

<style scoped>
.product-card {
  border-radius: 16px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  width: 25%;
}

/* img {
  height: 250px;
  border-radius: 16px 16px 0 0;
} */

.product-data{
  padding: 8px;
}
</style>


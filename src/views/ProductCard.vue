<template>
  <div class="product-card">
    <div class="img" :style="{
      backgroundImage: `url(${props.product.imageUrl})`,
      height: '250px',
      borderRadius: '16px 16px 0 0',
      backgroundSize: 'cover',
    }">
      <div class="discount"> Ahorro de {{ discount.toFixed(2) }}</div>
      <div class="badge">BLACK FRIDAY</div>
    </div>

    <div class="product-data">
      <p class="product-name">{{  props.product.name }}</p>
      <p class="product-price">{{ props.product.price }}</p>
      <p class="product-discount">{{  (props.product.price -  discount).toFixed(2) }} <span> -15%</span></p>
      <p class="product-rating">{{  `⭐ ${props.product.rating || 0} (${props.product.reviews || 0}+)` }}</p>

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
  
}

.img {
  position: relative;
}

.product-data{
  padding: 8px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.product-price {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  text-decoration:line-through;
}

.product-discount{
  font-size: 1.2rem;
  font-weight: 500;
  color: red;
  margin-bottom: 8px;

  span {
    font-weight: 400;
  }
}


.product-rating {
  font-size: 1rem;
  font-weight: 400;
  color: #6b6b6b;
  margin-bottom: 8px;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4a4a;
  color: #fff;
  font-size: 0.8em;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 5px;
  text-transform: uppercase;
}
.discount {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff9800;
  color: #fff;
  font-size: 0.8em;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 5px;
}
</style>


import { http } from '@/services/http';
import { defineStore } from 'pinia';

import type { Products } from '@/types/productTypes';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Products[],
  }),

  actions: {
    async getProducts() {
      try {
        const res = await http(`/search?query=`);
        const data = await res.json();
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },
    orderProductsAsc() {
      console.log('orderProductsAsc');
      this.products = this.products.sort((a, b) => a.price - b.price);
      console.log(this.products);
    },

    orderProductsDesc() {
      console.log('orderProductsDesc');
      this.products = this.products.sort((a, b) => b.price - a.price);
      console.log(this.products);
    },

    orderProductsByRating(){
      console.log('orderProductsByRating');
      this.products = this.products.sort((a, b) => b.rating - a.rating);
      console.log(this.products);
    }
  },
});

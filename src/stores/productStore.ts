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
    }
  },
});

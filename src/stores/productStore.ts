import { http } from '@/services/http'
import { defineStore } from 'pinia'

import type { Products } from '@/types/productTypes'

export const useProductStore = defineStore('product', {
  state: () => ({
    originalProducts: [] as Products[],
    products: [] as Products[],
    isFiltering: false,
  }),

  actions: {
    async getProducts() {
      try {
        const res = await http(`/search?query=`)
        const data = await res.json()
        this.products = data
        this.originalProducts = data
      } catch (error) {
        console.error(error)
      }
    },
    orderProductsAsc() {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },

    orderProductsDesc() {
      this.products = this.products.sort((a, b) => b.price - a.price);
    },

    orderProductsByRating() {
      this.products = this.products.sort((a, b) => b.rating - a.rating);
    },

    filterProductsByPrice( max: number) {
      this.products = this.originalProducts;
      this.products = this.products.filter((product) => product.price < max);

    },

    filterProductsByCategory( category: string) {
      this.products = this.originalProducts;
      this.products = this.products.filter((product) => product.category === category);
    },

    filterProductsByRating( rating: number) {
      this.products = this.originalProducts;
      this.products = this.products.filter((product) => product.rating < rating);
    },
    resetFilters() {
      this.products = this.originalProducts;
    }
  },
})

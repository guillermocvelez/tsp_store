import { http } from '@/services/http'
import type { AuthResponse, User } from '@/types/authTypes';
import { defineStore } from 'pinia'


export const
 useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as User,
    isAuth: false,
  }),

  persist: true,

  actions: {
    async login(email: string, password: string) {
      try {
        const res = await http('/api/auth/login','POST' , { email, password })
        const data: AuthResponse = await res.json();
        this.user = data.user;
        this.isAuth = true;
      } catch (error) {
        console.error(error)
      }
    },

    async register(name:string, email: string, password: string) {
      try {
        const res:Response = await http('/api/auth/register','POST' , { name,email, password })
        alert('Usuario registrado exitosamente');
        return res;
      } catch (error) {
        console.error(error)
      }
    }

  },
 })

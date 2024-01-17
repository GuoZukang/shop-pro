import { defineStore } from 'pinia'
import { ref } from 'vue'
import { persist } from './index'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    return {
      token,
    }
  },
  { persist: persist() },
)

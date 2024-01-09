import { defineStore } from 'pinia'
import { ref } from 'vue'
import { persist } from './index'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('1234567')
    return {
      token,
    }
  },
  { persist: persist() },
)

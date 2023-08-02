import { defineStore } from 'pinia'

export const useIsLoginStore = defineStore('isLogin', {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    setIsLogin (value) {
      this.isLogin = value
    },
  },
})
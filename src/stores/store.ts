import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'app',
    state: () => ({
      signInData: {
        email: '',
        password: '',
      },
    }),
  });
import { defineStore } from "pinia";
import { ref } from "vue";

export const registerUserStore = defineStore("registerUser", () => {
    
    const email = ref("");
    const password = ref("");

    return { email, password}
})
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSignInStore = defineStore("signInUser", () => {
    const singedIn = ref(false);

    function signInUserStore() {
        const singedIn = ref(true);
    }

    return { singedIn, signInUserStore };
})
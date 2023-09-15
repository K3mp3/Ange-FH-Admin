import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFormStore = defineStore("formAnimation", () => {
    const formIsOpen = ref(false)
    
    function changeFormValue() {
      console.log(formIsOpen.value);
    }

    return { formIsOpen, changeFormValue }
  });
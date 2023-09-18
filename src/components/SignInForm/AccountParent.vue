<script setup lang="ts">
    import { computed, onMounted, ref } from "vue";
    import AccountSignInForm from "./AccountSignInForm.vue";
    import AccountCreateForm from "./AccountCreateForm.vue";
import { useFormStore } from "@/stores/store";

    const screenSize = ref();
    const formIsOpen = computed(() => useFormStore().formIsOpen);

    let width = document.documentElement.clientWidth;
    
    function controlScreenSize() {
        if (width > 1200) {
            screenSize.value = true;
        } else {
            screenSize.value = false;
        }
    }

    function updateScreenSize() {
        width = document.documentElement.clientWidth;
    }

    function init() {
        window.addEventListener("resize", updateScreenSize);
        window.addEventListener("resize", controlScreenSize);

        updateScreenSize();
 
        if (width > 1200) {
            screenSize.value = true;
        } else {
            screenSize.value = false;
        }
    }

    onMounted(() => {
        init();
        controlScreenSize();
        updateScreenSize();
    })

</script>

<template>
    <div class="account-form-parent-container" :class="{ changeWidth: screenSize === true, Test: formIsOpen === true }">
        <AccountCreateForm v-if="screenSize"></AccountCreateForm>
        <AccountSignInForm></AccountSignInForm>
    </div>
</template>

<style scoped lang="scss">
    .account-form-parent-container {
        width: 100%;
        max-width: 500px;
        background-color: #1F1F1F;
        /* background: rgb(0,133,255);
        background: linear-gradient(90deg, rgba(0,133,255,1) 0%, rgba(128,0,255,1) 100%); */
        margin: auto;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }

    .changeWidth {
        max-width: 900px;
    }

    .Test{
        background-color: aqua;
        max-width: 500px;
        margin: auto;
    }
</style>
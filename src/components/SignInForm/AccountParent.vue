<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import AccountSignIn from "./AccountSignIn.vue";
    import AccountCreateForm from "./AccountCreateForm.vue";
    import gsap from "gsap";

    const screenSize = ref();
    const formOpen = ref(false);

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



        updateScreenSize()
 
        if (width > 1200) {
            screenSize.value = true;
        } else {
            screenSize.value = false;
        }
    }

    function hideSignInForm(isOpen: boolean) {
        if (isOpen) {
            console.log("works")
            formOpen.value = true;
        //     gsap.to(".account-sign-in", { x: 0, opacity: 1, duration: 0.5, onComplete: () => {
        //     // Animation complete, you can choose to hide the component
        //     // For example, set a timeout to hide it after the animation finishes
        //     setTimeout(() => {
        //         formOpen.value = true; // Hide the AccountSignIn component
        //     }, 1000); // Adjust the timeout duration as needed
        // } });
        } else {
            console.log("do not works");
            
        }
    }

    onMounted(() => {
        init();
        controlScreenSize();
        updateScreenSize();
    })

</script>

<template>
    <div class="sign-in-form-container" :class="{ changeWidth: screenSize === true }">
        <AccountCreateForm v-if="screenSize" @hideSignInForm="hideSignInForm"></AccountCreateForm>
        <AccountSignIn></AccountSignIn>
    </div>
</template>

<style scoped>
    .sign-in-form-container {
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

</style>
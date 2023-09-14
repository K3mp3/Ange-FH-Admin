<script setup lang="ts">
import SignInForm from './SignInForm.vue';

</script>

<template>
    <div class="sign-in-form-container">
        <SignInForm></SignInForm>
    </div>
</template>

<style scoped>
    .sign-in-form-container {
        width: 250px;
        height: 500px;
        background-color: #1F1F1F;
        margin: auto;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        display: flex;
        justify-content: center;
    }
</style>
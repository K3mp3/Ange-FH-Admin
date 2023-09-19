<script setup lang="ts">
import { registerUserStore } from '@/stores/registerUser';
import { computed } from 'vue';

 const email = computed(() => registerUserStore().email);
 const password = computed(() => registerUserStore().password);

</script>

<template>
    
</template>

<style scoped lang="scss">
</style>
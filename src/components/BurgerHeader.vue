<script setup>
import { inject } from 'vue'

const { closeBurger } = inject('cart')
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <img
      @click="closeBurger"
      class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition-all duration-300"
      src="/arrowR.svg"
      alt="arrow"
    />
    <h2 class="text-2xl font-bold">Basket</h2>
  </div>
</template>

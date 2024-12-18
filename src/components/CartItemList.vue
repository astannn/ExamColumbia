<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart, removeFromCart } = inject('cart')
</script>
<template>
  <div class="flex flex-col gap-4 px-4 md:px-6 lg:px-8">
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :title="item.name"
      :img-url="item.img"
      :price="item.price"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>

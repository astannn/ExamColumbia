<script setup>
import BurgerHeader from './BurgerHeader.vue'
import CartItemList from './CartItemList.vue'

const emit = defineEmits(['createOrders'])
defineProps({
  totalPrice: Number,
  vatPrice: Number,
})
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <BurgerHeader />
    <CartItemList />

    <div class="flex flex-col gap-5 mt-7">
      <div class="flex gap-2">
        <span>Total:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} tng.</b>
      </div>
      <div class="flex items-center gap-2">
        <span
          >For assistance, please contact us:
          <b class="text-zinc-400 hover:text-zinc-600 cursor-pointer"
            ><a href="https://www.instagram.com/p/C1-BxMZt4vH/">@zhumakanastan</a></b
          ></span
        >
      </div>
      <button
        :disabled="!totalPrice"
        @click="() => emit('createOrders')"
        class="bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-400 hover:bg-lime-600 transition-all duration-300 active:bg-lime-700 cursor-pointer"
      >
        Place an order
      </button>
    </div>
  </div>
</template>

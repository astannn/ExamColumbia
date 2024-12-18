<script setup>
defineProps({
  totalPrice: Number,
})
const emit = defineEmits(['openBurger'])
</script>

<template>
  <header
    class="flex flex-col sm:flex-row justify-between items-center border-b border-zinc-200 px-4 sm:px-10 py-4 sm:py-8"
  >
    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img class="rounded-full w-10 sm:w-14" src="/logo.webp" alt="logo" />
        <div>
          <h2 class="text-lg sm:text-xl font-bold uppercase cursor-pointer text-slate-700">
            Columbia
          </h2>
          <p class="text-sm sm:text-base text-slate-500">Online Shop</p>
        </div>
      </div>
    </RouterLink>

    <!-- Навигация -->
    <ul class="flex flex-wrap gap-6 justify-center sm:justify-end items-center mt-4 sm:mt-0">
      <li
        @click="emit('openBurger')"
        class="flex items-center gap-2 text-slate-500 hover:text-black cursor-pointer"
      >
        <img src="/shop.svg" alt="Корзина" />
        <b class="text-sm sm:text-base">{{ totalPrice }}tng.</b>
      </li>
      <router-link to="/Favorites">
        <li class="flex items-center gap-2 text-slate-500 hover:text-black cursor-pointer">
          <img src="/favorite.svg" alt="Избранные" />
          <span class="text-sm sm:text-base">Featured Products</span>
        </li>
      </router-link>
      <router-link to="/account">
        <li class="flex items-center gap-2 text-slate-500 hover:text-black cursor-pointer">
          <img src="/acc.svg" alt="мой аккаунт" />
          <span class="text-sm sm:text-base">My account</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script setup>
defineProps({
  id: Number,
  imgUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-4 md:p-6 lg:p-8 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
  >
    <img
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="like"
      class="absolute top-4 md:top-6 left-4 md:left-6"
      @click="onClickFavorite"
    />
    <img class="w-full h-40 object-cover rounded-lg mb-4" :src="imgUrl" alt="jacket" />
    <p class="mt-3 md:mt-5 text-slate-400 text-sm md:text-base">{{ title }}</p>

    <div class="flex justify-between mt-3 md:mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400 text-sm">Price</span>
        <b class="text-slate-400 text-lg">{{ price }} tng.</b>
      </div>
      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/plus2.svg'" alt="plus" />
    </div>
  </div>
</template>

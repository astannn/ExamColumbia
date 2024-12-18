<script setup>
const emit = defineEmits(['onClickRemove'])
defineProps({
  id: Number,
  title: String,
  price: Number,
  imgUrl: String,
})
</script>

<template>
  <div class="flex items-center border border-zinc-200 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="imgUrl" :alt="title" />
    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }}tng.</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-30 cursor-pointer hover:opacity-100 transition-all duration-300"
          src="/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

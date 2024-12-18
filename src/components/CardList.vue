<script setup>
import Card from './Card.vue'
defineProps({
  StoreDetails: Array,
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
    <Card
      v-for="item in StoreDetails"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      :imgUrl="item.img"
      :price="item.price"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>

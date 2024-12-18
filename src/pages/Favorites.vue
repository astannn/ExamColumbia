<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Card from '../components/Card.vue'

const Favorites = ref([]) // Массив для хранения закладок
const cart = ref([]) // Массив для хранения товаров в корзине

// Загрузка закладок при монтировании компонента
onMounted(async () => {
  try {
    const { data } = await axios.get('https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite')
    console.log('API response:', data) // Логируем ответ для проверки
    Favorites.value = data.map((favorite) => ({ ...favorite, isFavorite: true }))
  } catch (error) {
    console.error('Error fetching favorites:', error)
  }
})

// Добавление товара в корзину или удаление из корзины
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
  console.log('Cart:', cart.value)
}

// Функция для добавления товара в корзину
const addToCart = (item) => {
  item.isAdded = true
  cart.value.push(item)
}

// Функция для удаления товара из корзины
const removeFromCart = (item) => {
  item.isAdded = false
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
}

// Удаление из закладок
const removeFromFavorites = async (item) => {
  try {
    await axios.delete(`https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite/${item.id}`)
    Favorites.value = Favorites.value.filter((favorite) => favorite.id !== item.id)
  } catch (error) {
    console.error('Error removing from favorites:', error)
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-6">Мои закладки</h1>
    <div v-if="Favorites.length === 0" class="text-gray-500">Закладок пока нет</div>
    <div v-else class="flex justify-between mt-5">
      <!-- Используем компонент Card для отображения закладок -->
      <Card
        v-for="item in Favorites"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :imgUrl="item.imageUrl"
        :price="item.price"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
        :onClickFavorite="() => removeFromFavorites(item)"
        :onClickAdd="() => onClickAddPlus(item)"
      />
    </div>
  </div>
</template>

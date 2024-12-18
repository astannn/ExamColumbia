<script setup>
import { reactive, ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { inject } from 'vue'
import CardList from '../components/CardList.vue'

const { cart, addToCart, removeFromCart } = inject('cart')

const currentPage = ref(1)
const itemsPerPage = ref(10)
const totalPages = ref(1)

const filters = reactive({
  sortBy: 'name', // Сортировка по имени по умолчанию
  searchQuery: '', // Строка поиска
  category: '', // Категория товаров
})

const StoreDetails = ref([])

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
  console.log('Cart:', cart)
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value.trim() // Убираем пробелы
  console.log('Search query:', filters.searchQuery) // Для отладки
  fetchItems() // Перезагрузка данных
}

const onChangeCategory = (event) => {
  filters.category = event.target.value // Обновляем категорию
  console.log('Selected category:', filters.category) // Для отладки
  fetchItems() // Перезагрузка данных
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value // Обновляем параметр сортировки
  console.log('Sorting by:', filters.sortBy) // Для отладки
  fetchItems() // Перезагрузка данных
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = { parentId: item.id, name: item.name, imageUrl: item.img, price: item.price }
      item.isFavorite = true
      const { data } = await axios.post('https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite', obj)
      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (error) {
    console.error('Error adding to favorite:', error)
  }
}

const fechFavorite = async () => {
  try {
    const { data: favorite } = await axios.get(
      'https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite',
    )
    StoreDetails.value = StoreDetails.value.map((item) => {
      const favoriteItem = favorite.find((fav) => fav.parentId === item.id)
      if (!favoriteItem) return item
      return { ...item, isFavorite: true, favoriteId: favoriteItem.id }
    })
    console.log('Fetched favorites:', StoreDetails.value)
  } catch (error) {
    console.error('Error fetching favorites:', error)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      ...(filters.sortBy && { sortBy: filters.sortBy }),
      ...(filters.searchQuery && { search: filters.searchQuery }),
      ...(filters.category && { category: filters.category }),
      page: currentPage.value,
      limit: itemsPerPage.value,
    }
    const { data, headers } = await axios.get(
      'https://673f73bca9bc276ec4b89eaf.mockapi.io/StoreDetails',
      { params },
    )
    StoreDetails.value = data.map((item) => ({
      ...item,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }))
    totalPages.value = Math.ceil(headers['x-total-count'] / itemsPerPage.value)
  } catch (error) {
    console.error('Error fetching items:', error)
  }
}

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  fetchItems()
}

onMounted(async () => {
  await fetchItems()
  await fechFavorite()
})
</script>
<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8 text-slate-700">The entire range of the store</h2>
      <div class="flex gap-4">
        <!-- Категории -->
        <select
          @change="onChangeCategory"
          class="py-2 px-3 border rounded-md outline-none text-slate-500 cursor-pointer"
        >
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Children">Children</option>
        </select>
        <!-- Поле поиска -->
        <div class="relative">
          <img class="absolute left-3 top-4 cursor-pointer" src="/search.svg" alt="search" />
          <input
            @input="onChangeSearchInput"
            class="cursor-pointer border rounded-md pl-11 py-2 pr-4 outline-none focus:border-gray-400"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <CardList
        :StoreDetails="StoreDetails"
        @add-to-favorite="addToFavorite"
        @addToCart="onClickAddPlus"
      />
    </div>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="item in StoreDetails" :key="item.id" :item="item" />
      </div>

      <div class="flex justify-center mt-8">
        <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-zinc-400 text-white rounded-md"
        >
          Previous
        </button>
        <span class="mx-4">Page {{ currentPage }}</span>
        <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-zinc-400 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

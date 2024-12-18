<script setup>
import { ref, provide, watch, computed } from 'vue'
import Header from './components/Header.vue'
import Burger from './components/Burger.vue'
import Footer from './components/Footer.vue'
import axios from 'axios' // Добавлен импорт axios

const cart = ref([])

const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => total + item.price, 0)
})
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const createOrdersInFavorite = async () => {
  try {
    const response = await axios.post('https://673f73bca9bc276ec4b89eaf.mockapi.io/Favorite', {
      items: cart.value,
      totalPrice: totalPrice.value,
    })
    cart.value = [] // Очистить корзину после успешного добавления
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const burgerOpen = ref(false)
const closeBurger = () => {
  burgerOpen.value = false
}
const openBurger = () => {
  burgerOpen.value = true
}
const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}
const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true },
)
provide('cart', {
  cart,
  closeBurger,
  openBurger,
  addToCart,
  removeFromCart,
})
</script>

<template>
  <Burger
    v-if="burgerOpen"
    :total-price="totalPrice"
    :vatPrice="vatPrice"
    @createOrders="createOrdersInFavorite"
  />
  <div class="w-4/5 mx-auto bg-zinc-50 rounded-2xl shadow-xl mt-14">
    <Header :total-price="totalPrice" @open-burger="openBurger" />
    <div class="p-10">
      <div class="w-2/3 mb-10 mx-auto cursor-pointer hover:scale-105 transition-all">
        <a
          href="https://www.columbia.com/c/sale/?icpa=global&icid=gridbn-sngl&icsa=HOL&prid=blackfriday&icst=promo&crid=blackfriday-shopall&icca=img"
          target="_blank"
        >
          <img
            src="/public/black-friday.png"
            alt="Скидки в бутике Columbia"
            class="w-2/3 mx-auto opacity-30 hover:opacity-100 cursor-pointer hover:scale-100 transition-all duration-300"
          />
        </a>
      </div>

      <div class="flex items-center space-x-4">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

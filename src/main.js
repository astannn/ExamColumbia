import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import AccountPage from './pages/AccountPage.vue'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
const app = createApp(App)
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Favorites', name: 'Favorites', component: Favorites },
  {
    path: '/account',
    name: 'Account',
    component: AccountPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  history: createWebHistory(),
  routes,
})
createApp(App).use(router).mount('#app')

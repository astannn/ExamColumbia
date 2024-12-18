<template lang="html">
  <footer
    class="flex flex-col items-center border-t border-zinc-200 px-4 sm:px-10 py-4 sm:py-8 bg-white"
  >
    <div class="text-center mb-4 sm:mb-6">
      <h2 class="text-lg sm:text-xl font-bold uppercase text-slate-700">Geolocation: Kazakhstan</h2>
      <p class="text-xs sm:text-sm text-slate-500">We are glad to welcome you to our boutiques!</p>
    </div>

    <!-- Контакты -->
    <div class="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base mb-4 sm:mb-6">
      <a
        href="https://www.instagram.com"
        target="_blank"
        class="text-slate-500 hover:text-black cursor-pointer"
      >
        Instagram
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        class="text-slate-500 hover:text-black cursor-pointer"
      >
        WhatsApp
      </a>
    </div>

    <!-- Филиалы -->
    <div class="flex flex-col sm:flex-row sm:justify-center text-center gap-6">
      <div>
        <h4 class="font-bold text-slate-700">Astana</h4>
        <p class="text-xs sm:text-sm text-slate-500">
          Kabanbay Batyra 62, <br />
          Mega SilkyWay
        </p>
      </div>
      <div>
        <h4 class="font-bold text-slate-700">Almaty</h4>
        <ul class="text-xs sm:text-sm text-slate-500">
          <li>Mega</li>
          <li>Forum</li>
          <li>ADK</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col items-center text-center mb-6">
      <h3 class="text-lg font-bold text-slate-700 mb-4">Columbia Boutique Staff</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <h4 class="font-bold text-slate-700">Administration</h4>
          <ul class="text-slate-500">
            <li>Astan</li>
            <li>Jansaya</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-700">Employees</h4>
          <ul class="text-slate-500">
            <li>Asiya</li>
            <li>Arai</li>
            <li>Vaniya</li>
            <li>Dilnaz</li>
            <li>Asel</li>
            <li>Taimas</li>
            <li>Asanali</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="text-center text-sm text-slate-500">
      <p>© 2024 Columbia Sportswear Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
footer img {
  transition: transform 0.2s ease;
}

footer img:hover {
  transform: scale(1.1);
}
</style>

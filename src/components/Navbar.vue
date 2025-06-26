<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-black/30 shadow-sm backdrop-blur-md">
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center h-16">
      <!-- LOGO -->
      <div class="flex items-center gap-4">
        <img class="w-16 sm:w-20" src="../assets/logo.png" alt="MagisTV" />
      </div>

      <!-- DESKTOP MENU -->
      <nav class="hidden md:flex gap-4 lg:gap-6">
        <router-link
          to="/"
          class="text-white rounded-lg px-3 py-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
        >Home</router-link>
        <router-link
          to="/dispositivos"
          class="text-white rounded-lg px-3 py-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
        >Dispositivos</router-link>
        <router-link
          to="/faq"
          class="text-white rounded-lg px-3 py-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
        >FAQ</router-link>
        <router-link
          to="/contacto"
          class="text-white rounded-lg px-3 py-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
        >Contacto</router-link>
      </nav>

      <!-- BOTÓN MENÚ MOBILE -->
      <div class="md:hidden">
        <button @click="menuOpen = !menuOpen" class="text-white focus:outline-none">
          <svg
            v-if="!menuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- MENÚ MOBILE -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="md:hidden bg-black/90 text-white px-4 py-4 space-y-2 transition-all"
      >
        <router-link
          to="/"
          class="block py-2 px-2 rounded hover:text-orange-500 transition"
          @click="menuOpen = false"
        >Home</router-link>
        <router-link
          to="/dispositivos"
          class="block py-2 px-2 rounded hover:text-orange-500 transition"
          @click="menuOpen = false"
        >Dispositivos</router-link>
        <router-link
          to="/faq"
          class="block py-2 px-2 rounded hover:text-orange-500 transition"
          @click="menuOpen = false"
        >FAQ</router-link>
        <router-link
          to="/contacto"
          class="block py-2 px-2 rounded hover:text-orange-500 transition"
          @click="menuOpen = false"
        >Contacto</router-link>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

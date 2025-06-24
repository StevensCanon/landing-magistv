<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 hidden-overflow bg-black/30 shadow-sm"
  >
    <div class="px-6 mx-auto max-w-7xl flex justify-between items-center">
      <div class="flex items-center gap-4 cursor-none">
        <img class="w-20" src="../assets/logo.png" alt="MagisTV" />
      </div>

      <nav class="hidden md:flex gap-5">
        <router-link
          to="/"
          class="text-white rounded-lg p-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
          >Home</router-link
        >
        <router-link
          to="/dispositivos"
          class="text-white rounded-lg p-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
          >Dispositivos</router-link
        >
        <router-link
          to="/faq"
          class="text-white rounded-lg p-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
          >FAQ</router-link
        >
        <router-link
          to="/contacto"
          class="text-white rounded-lg p-2 hover:bg-orange-500 transition"
          active-class="bg-orange-500"
          >Contacto</router-link
        >

      </nav>

      <!-- Mobile button -->
      <div class="md:hidden">
        <button
          @click="menuOpen = !menuOpen"
          class="text-white focus:outline-none"
        >
          <svg
            v-if="!menuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-black/80 text-white px-6 py-4">
      <router-link to="/" class="block py-2 hover:text-orange-500 transition">Home</router-link>
      <router-link to="/dispositivos" class="block py-2 hover:text-orange-500 transition">Dispositivos</router-link>
      <router-link to="/faq" class="block py-2 hover:text-orange-500 transition">FAQ</router-link>
      <router-link to="/contacto" class="block py-2 hover:text-orange-500 transition">Contacto</router-link>
    </div>
  </header>
</template>

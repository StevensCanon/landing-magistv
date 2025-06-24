<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar, Footer } from "./components";

</script>

<template>
  <header class="bg-black"><Navbar /></header>
  <main class="bg-black">
    <section class="text-white ">
      <router-view />
    </section>
  </main>
  <footer class="">
    <Footer />
  </footer>
</template>

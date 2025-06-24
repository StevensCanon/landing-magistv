<script setup lang="ts">
import Android from '@/components/ui/Android.vue'
import Laptop from '@/components/ui/Laptop.vue'

</script>

<template>
 
  <section class="relative bg-black text-white px-6 py-16 min-h-screen">
    
    <h1 class="text-4xl font-bold text-center mb-12 tracking-tight">Dispositivos compatibles</h1>

    <!-- Grid de 2x2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
      
      <!-- Laptop -->
      <div class="flex justify-center">
        <Laptop
          srcLight="https://diariondi.com/wp-content/uploads/2024/09/Magis-Tv-www.culturageek.com_.ar_-2-1024x553.webp"
          srcDark="https://diariondi.com/wp-content/uploads/2024/09/Magis-Tv-www.culturageek.com_.ar_-2-1024x553.webp"
        />
      </div>

      <!-- Lista 1 -->
      <div>
        <h2 class="text-2xl font-semibold mb-4 text-orange-400">Magis TV</h2>
        <ul class="space-y-2 text-sm leading-relaxed text-gray-200">
          <li>Smart TVs con Android</li>
          <li>TV Box con Android</li>
          <li>Xiaomi Mi Box</li>
          <li>Xiaomi TV Stick</li>
          <li>Amazon Fire TV Stick</li>
          <li>Google Chromecast (4ta generación)</li>
        </ul>
      </div>

      <!-- Lista 2 -->
      <div>
        <h2 class="text-2xl font-semibold mb-4 text-orange-400">Magis Android</h2>
        <ul class="space-y-2 text-sm leading-relaxed text-gray-200">
          <li> Celular Android</li>
          <li> Tablet Android</li>
          <li> Emulador PC</li>
          <li> Xiaomi TV Stick</li>
          <li> Amazon Fire TV Stick</li>
          <li> Google Chromecast (4ta generación)</li>
        </ul>
      </div>

      <!-- Android -->
      <div class="flex justify-center">
        <Android
          srcLight="src\assets\MagisAndroid.jpg"
          srcDark="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        />
      </div>
    </div>
  </section>
</template>

<template>
  <div
    class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
  >
    <!-- Botones laterales (izquierda) -->
    <div class="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>

    <!-- Botón lateral derecho -->
    <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

    <!-- Pantalla -->
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <!-- Imagen clara -->
      <img
        v-if="srcLight"
        :src="srcLight"
        class="dark:hidden w-full h-full object-fill"
        alt="Android mockup"
      />
      <!-- Imagen oscura -->
      <img
        v-if="srcDark"
        :src="srcDark"
        class="hidden dark:block w-full h-full object-fill"
        alt="Android mockup dark"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  srcLight?: string
  srcDark?: string
}>()
</script>

<template>
    <div>
      <!-- Parte superior: Pantalla -->
      <div
        class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
      >
        <div
          class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800"
        >
          <img
            v-if="srcLight"
            :src="srcLight"
            class="dark:hidden h-full w-full rounded-lg object-cover"
            alt="Laptop screen light"
          />
          <img
            v-if="srcDark"
            :src="srcDark"
            class="hidden dark:block h-full w-full rounded-lg object-cover"
            alt="Laptop screen dark"
          />
        </div>
      </div>
  
      <!-- Parte inferior: base -->
      <div
        class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]"
      >
        <div
          class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    srcLight?: string
    srcDark?: string
  }>()
  </script>
  
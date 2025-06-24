<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  image: string;
}>();
</script>

<template>
  <div
    class="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 transition-transform duration-500 shadow-md  hover:scale-110"
  >
    <img
      :src="image"
      :alt="title"
      class="object-fill w-full h-full transition-transform duration-500"
    />

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
    ></div>

    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white text-lg font-semibold px-4 py-2 rounded transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Iptv = {
  id: number;
  className: string;
  thumbnail: string;
};

defineProps<{
  iptv: Iptv[];
}>();

const selected = ref<number | null>(null);

const handleClick = (id: number) => {
  selected.value = selected.value === id ? null : id;
};
</script>

<template>
  <div class="relative grid grid-cols-1 md:grid-cols-3 gap-4 p-10 max-w-7xl mx-auto w-full h-full">
    <div
      v-for="canal in iptv"
      :key="canal.id"
      :class="canal.className"
      class="relative"
    >
      <div
        class="group relative overflow-hidden rounded-xl bg-white h-full w-full transition-all duration-300 cursor-pointer border border-transparent"
        @click="handleClick(canal.id)"
        :class="{
          'scale-105 z-50 border-orange-500 shadow-[0_0_20px_rgba(255,120,0,0.6)]': selected === canal.id,
          'hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-orange-400/40': selected !== canal.id
        }"
      >
        <img
          :src="canal.thumbnail"
          alt="Canal IPTV"
          class="object-contain object-center h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>

    <!-- Fondo oscuro cuando un canal está activo -->
    <div
      v-if="selected !== null"
      class="relative left-0 top-0 w-full h-full bg-black opacity-30 z-10"
      @click="selected = null"
    />
  </div>
</template>

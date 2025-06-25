<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    className?: string
    colors?: string[]
    speed?: number
  }>(),
  {
    className: '',
    colors: () => ['#EC7C1F', '#DD4D06', '#F48C00', '#BA940A'],
    speed: 1,
  }
)

const gradientStyle = computed(() => ({
  backgroundImage: `linear-gradient(135deg, ${props.colors.join(', ')}, ${props.colors[0]})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animationDuration: `${10 / props.speed}s`,
}))
</script>

<template>
  <span class="relative inline-block" :class="props.className">
    <span class="sr-only">
      <slot />
    </span>
    <span
      class="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
      :style="gradientStyle"
      aria-hidden="true"
    >
      <slot />
    </span>
  </span>
</template>

<style scoped>
@keyframes aurora {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}

.animate-aurora {
  animation-name: aurora;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>

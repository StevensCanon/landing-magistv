<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { cn } from '../../lib/utils';

const props = defineProps<{
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}>();

const isVisible = ref(false);

const shapeStyle = computed(() => ({
  width: props.width + 'px',
  height: props.height + 'px',
  '--initial-rotate': `${(props.rotate || 0) - 15}deg`,
  '--final-rotate': `${props.rotate || 0}deg`,
  '--animation-delay': `${props.delay || 0}s`
}));

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, (props.delay || 0) * 1000);
});
</script>

<template>
  <div 
    :class="cn('absolute', props.className)"
    :style="shapeStyle"
  >
    <div
      class="shape-container"
      :class="{ 'shape-visible': isVisible }"
    >
      <div
        :class="cn(
          'absolute inset-0 rounded-full',
          'bg-gradient-to-r to-transparent',
          props.gradient,
          'backdrop-blur-[2px] border-2 border-white/[0.15]',
          'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
          'after:absolute after:inset-0 after:rounded-full',
          'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
        )"
      />
    </div>
  </div>
</template>

<style scoped>
.shape-container {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(-150px) rotate(var(--initial-rotate));
  transition: all 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96);
  animation: float 12s ease-in-out infinite;
  animation-delay: calc(var(--animation-delay) + 2.4s);
}

.shape-visible {
  opacity: 1;
  transform: translateY(0) rotate(var(--final-rotate));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(var(--final-rotate));
  }
  50% {
    transform: translateY(15px) rotate(var(--final-rotate));
  }
}
</style>

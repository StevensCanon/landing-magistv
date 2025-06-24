<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Circle } from 'lucide-vue-next';
import { cn } from '../../lib/utils';
import ElegantShape from './ElegantShape.vue';

const props = defineProps<{
  badge?: string;
  title1?: string;
  title2?: string;
}>();

const animatedElements = ref({
  badge: false,
  title: false,
  description: false,
});

onMounted(() => {
  // Animar elementos secuencialmente
  setTimeout(() => (animatedElements.value.badge = true), 500);
  setTimeout(() => (animatedElements.value.title = true), 700);
  setTimeout(() => (animatedElements.value.description = true), 900);
});
</script>

<template>
  <div
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-10"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
    />

    <!-- Background shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <ElegantShape
        :delay="0.3"
        :width="600"
        :height="140"
        :rotate="12"
        gradient="from-indigo-500/[0.15]"
        class="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <ElegantShape
        :delay="0.5"
        :width="500"
        :height="120"
        :rotate="-15"
        gradient="from-rose-500/[0.15]"
        class="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />
      <ElegantShape
        :delay="0.4"
        :width="300"
        :height="80"
        :rotate="-8"
        gradient="from-violet-500/[0.15]"
        class="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />
      <ElegantShape
        :delay="0.6"
        :width="200"
        :height="60"
        :rotate="20"
        gradient="from-green-500/[0.15]"
        class="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
      />
      <ElegantShape
        :delay="0.7"
        :width="150"
        :height="40"
        :rotate="-25"
        gradient="from-orange-500/[0.15]"
        class="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
      />
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6">
      <div class="max-w-3xl mx-auto text-center">
        

        <div
          class="fade-up-element"
          :class="{ 'animate-fade-up': animatedElements.title }"
        >
          <h1
            class="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span
              class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            >
              {{ props.title1 || '' }}
            </span>
          </h1>
        </div>

        <div
          class="fade-up-element"
          :class="{ 'animate-fade-up': animatedElements.description }"
        >
          <p
            class="text-base sm:text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-4xl mx-auto px-4"
          >
            Magis TV APK ofrece una poderosa biblioteca de contenido, una
            interfaz simple y fácil de usar, lo que permite a los usuarios tener
            una experiencia de streaming rápida.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div class="flex flex-col items-center hover:scale-115 transition-all duration-300 hover:text-orange-500">
          <a href="https://www.magistvpc.info/descargar/magis-celular.apk">
            <img
              src="https://magistvapkz.com/wp-content/uploads/2025/04/Magis-TV-APK-logo-1-3.webp"
              alt="MagisTV"
              class="w-30 object-cover rounded-2xl mb-4 "
            />
          </a>
          <h3 class="text-lg font-bold">Magis Android (Celular y PC)</h3>
        </div>
        <a href="https://www.magistvpc.info/descargar/magis-video.apk">
          <div class="flex flex-col items-center hover:scale-115 transition-all duration-300 hover:text-orange-500">
            <img
              src="https://magistvapkz.com/wp-content/uploads/2025/04/Magis-TV-APK-logo-1-3.webp"
              alt="MagisTV"
              class="w-30 object-cover rounded-2xl mb-4 "
            />

            <h3 class="text-lg font-bold">Magis TV (Tv Box)</h3>
          </div>
        </a>
      </div>
      <div class="my-20 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-10">
          Servicios proporcionados
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div
            class="flex flex-col items-center space-y-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:bg-orange-500"
          >
            <v-icon name="fa-closed-captioning" scale="2" fill="white" />
            <p class="text-sm md:text-base font-medium">
              Subtítulos en español
            </p>
          </div>
          <div
            class="flex flex-col items-center space-y-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:bg-orange-500"
          >
            <v-icon
              name="bi-pc-display"
              scale="2"
              fill="white"
              class="mouse-pointer event-scale transition-all duration-300"
            />
            <p class="text-sm md:text-base font-medium">
              Soporte multidispositivo
            </p>
          </div>
          <div
            class="flex flex-col items-center space-y-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:bg-orange-500"
          >
            <v-icon name="md-appblocking-sharp" scale="2" fill="white" />
            <p class="text-sm md:text-base font-medium">
              Sin pausa ni congelación
            </p>
          </div>
          <div
            class="flex flex-col items-center space-y-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:bg-orange-500"
          >
            <v-icon name="ri-24-hours-line" scale="2" fill="white" />
            <p class="text-sm md:text-base font-medium">Soporte técnico 24/7</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
    />
  </div>
</template>

<style scoped>
.fade-up-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.25, 0.4, 0.25, 1);
}

.animate-fade-up {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
}
</style>

<script setup lang="ts">
import AuroraText from './ui/AuroraText.vue';
</script>

<template>
  <div class="relative bg-black lg:h-screen">
    <!-- HERO BACKGROUND -->
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover brightness-[.2]"
        src="../assets/image.png"
        alt="Fondo MagisTV"
      />
    </div>

    <!-- HERO CONTENT -->
    <div
      class="relative z-10 pt-24 md:pt-32 lg:pt-40 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-white"
    >
      <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 class="text-xs sm:text-sm mb-6 text-white/70">
          Aplicación de Streaming
        </h2>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
        >
          <AuroraText :speed="2">MagisTV APK</AuroraText>
        </h1>

        <p
          class="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 text-justify"
        >
          Magis TV es una aplicación de streaming para Android en América
          Latina. Es gratuita para descargar y no requiere registro. Solo es
          compatible con dispositivos Android y no admite otros sistemas. Ofrece
          películas y series, deportes en vivo y canales de TV.
        </p>

        <!-- BOTONES -->
        <div class="mt-8 flex flex-wrap gap-4">
          <!-- Descargar -->
          <a href="#descargar">
            <button
              class="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span
                class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#f59e0b_50%,#E2CBFF_100%)]"
              ></span>
              <span
                class="inline-flex h-full w-full items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 px-6 text-sm font-medium text-white backdrop-blur-3xl"
              >
                Descargar
              </span>
            </button>
          </a>

          <!-- Ver Planes -->
          <a
            href="#planes"
            class="flex items-center border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-sm font-medium"
          >
            Ver planes
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

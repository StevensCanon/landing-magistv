<template>
  <div class="relative bg-black h-screen">
    <!-- HERO BACKGROUND -->
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover brightness-[.2]"
        src="../assets/image.png"
        alt="Fondo MagisTV"
      />
    </div>

    <!-- HERO CONTENT -->
    <div class="relative z-10 pt-40 pb-16 px-6 max-w-7xl mx-8 text-white">
      <div class="lg:w-2/3 xl:w-1/2">
        <h1 class="text-sm text-white/70">Aplicación de Streaming</h1>
        <h2 class="mt-4 text-6xl sm:text-7xl font-bold text-orange-500">
          Magis TV APK
        </h2>
        <p class="mt-8 text-xl text-white/80 text-justify">
          Magis TV es una aplicación de streaming para Android en América
          Latina. Es gratuita para descargar y no requiere registro. Magis TV
          Sólo es compatible con dispositivos Android y no admite dispositivos
          con otros sistemas. Ofrece películas y series, deportes en vivo y
          canales de tv. TV Celular
        </p>

        <div class="mt-8 flex gap-4 flex-wrap">
          <button
              class="relative w-30 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none "
            >
              <!-- Borde animado -->
              <span
                class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#f59e0b_50%,#E2CBFF_100%)]"
              ></span>

              <!-- Contenido interior del botón -->
              <span
                class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
              >
                Descargar
              </span>
            </button>
          <a
            href="#planes"
            class="flex items-center border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Ver planes
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>

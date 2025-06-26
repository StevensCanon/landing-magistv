<script setup lang="ts">
const features = [
  {
    title: "Biblioteca de Contenidos Enriquecidos de Magis TV",
    description:
      "Puedes disfrutar de más de 1,337 canales de televisión en vivo y más de 50,800 películas y series.Una amplia gama de contenido en vivo y VOD para que selecciones, incluyendo deportes, películas, series, contenido para niños y mucho más.",
    type: "one",
    className:
      "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800 border-orange-500",
  },
  {
    title: "Dispositivos",
    description:
      "Magis TV en línea cuenta con la opción de verlo en la televisión, el teléfono móvil, o tu PC.",
    type: "two",
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 border-orange-500",
  },
  {
    title: "¿Como descargarlo?",
    description:
      "A traves de este video podras descargar Magis TV en tu dispositivo.",
    type: "three",
    className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800 border-orange-500",
  },
  {
    title: "Calidad de imagen y sonido",
    description:
      "La aplicación ofrece la posibilidad de visualizar contenido en diversas calidades, desde SD hasta Full HD (FHD), con colores precisos y sonido nítido, optimizando la experiencia audiovisual.",
    type: "four",
    className: "col-span-1 lg:col-span-3 border-b lg:border-none border-orange-500",
  },
];
</script>

<template>
  <div class="relative z-20 p-5 lg:py-20 max-w-7xl mx-auto">
    <div>
      <h4 class="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-orange-500 dark:text-black">
        ¿Por qué Magis TV?
      </h4>
    </div>

    <div class="relative">
      <div class="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-orange-500 dark:border-neutral-800">
        <div
          v-for="feature in features"
          :key="feature.title"
          :class="'p-4 sm:p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-between ' + feature.className"
        >
          <p class="max-w-5xl mx-auto text-center tracking-tight text-white dark:text-black text-lg sm:text-xl md:text-2xl font-bold">
            {{ feature.title }}
          </p>
          <p class="text-sm md:text-base max-w-xl mx-auto text-justify my-2 text-neutral-500 dark:text-neutral-300">
            {{ feature.description }}
          </p>

          <!-- type: one -->
          <div v-if="feature.type === 'one'" class="relative pt-6 sm:pt-8 px-2 gap-10 h-full">
            <div class="w-full mx-auto bg-dark dark:bg-neutral-900 shadow-2xl h-48 sm:h-64 md:h-full">
              <img
                src="https://fotos.perfil.com/2022/08/19/trim/987/555/streaming-1404753.jpg"
                alt="header"
                class="w-full h-full aspect-video object-cover rounded-sm"
              />
              <div class="absolute bottom-0 z-40 inset-x-0 h-32 sm:h-40 lg:h-60 bg-gradient-to-t from-black/90 dark:from-black via-black dark:via-black to-transparent pointer-events-none" />
              <div class="absolute top-0 z-40 inset-x-0 h-32 sm:h-40 lg:h-60 bg-gradient-to-b from-black/90 dark:from-black via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <!-- type: two -->
          <div v-if="feature.type === 'two'" class="relative flex flex-col sm:flex-row sm:overflow-x-auto items-center p-2 sm:p-4 gap-4 h-full">
            <img
              src="https://support.bluestacks.com/hc/article_attachments/33151214404493"
              class="rounded-lg w-full sm:w-1/3 h-24 md:h-32 object-cover border border-orange-500 dark:border-orange-700"
            />
            <img
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1swkOf.img?w=768&h=422&m=6"
              class="rounded-lg w-full sm:w-1/3 h-24 md:h-32 object-cover border border-orange-500 dark:border-orange-700"
            />
            <img
              src="https://cdn.eldestapeweb.com/eldestape/022025/1738766061146.webp?cw=720&ch=540&extw=jpg"
              class="rounded-lg w-full sm:w-1/3 h-24 md:h-32 object-cover border border-orange-500 dark:border-orange-700"
            />

            <div class="absolute left-0 z-[100] inset-y-0 w-10 bg-gradient-to-r from-black dark:from-black to-transparent pointer-events-none" />
            <div class="absolute right-0 z-[100] inset-y-0 w-10 bg-gradient-to-l from-black dark:from-black to-transparent pointer-events-none" />
          </div>

          <!-- type: three -->
          <div v-if="feature.type === 'three'" class="relative flex items-center justify-center h-full">
            <a
              href="https://www.youtube.com/watch?v=fNZTyvL4LN0"
              target="_blank"
              class="w-full h-48 sm:h-64 md:h-80 relative group"
            >
              <svg class="h-12 w-12 sm:h-16 sm:w-16 absolute z-10 inset-0 text-red-500 m-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15.5L16 12L10 8.5V15.5ZM21.6 7.2C..." />
              </svg>
              <img
                src="https://i.ytimg.com/vi/fNZTyvL4LN0/hq720.jpg"
                alt="video"
                class="w-full h-full object-cover rounded-sm hover:blur-sm transition-all duration-300"
              />
            </a>
          </div>

          <!-- type: four -->
          <div v-if="feature.type === 'four'" class="h-full flex items-center justify-center">
            <div class="relative w-full">
              <img
                src="https://static.wixstatic.com/media/41b7e5_296719a076944cc5a3a55f4626c8d8e9~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/41b7e5_296719a076944cc5a3a55f4626c8d8e9~mv2.jpg"
                alt="header"
                class="h-48 sm:h-64 md:h-80 w-full object-cover rounded-sm"
              />

              <div class="absolute left-0 z-[100] inset-y-0 w-10 bg-gradient-to-r from-black dark:from-black to-transparent pointer-events-none" />
              <div class="absolute right-0 z-[100] inset-y-0 w-10 bg-gradient-to-l from-black dark:from-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MotionPlugin } from '@vueuse/motion';
import { onMounted } from 'vue';
import { Card, LayoutGrid, FeaturesSection, Pricing } from '../components';
import Hero from '../components/Hero.vue';
import HeroGeometric from '../components/ui/HeroGeometric.vue';

const peliculas = [
  {
    id: 1,
    title: 'Interstellar',
    image:
      'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 2,
    title: 'Parasitos',
    image: 'https://es.web.img3.acsta.net/pictures/19/09/17/17/13/3740579.jpg',
  },
  {
    id: 3,
    title: 'Sonic 2',
    image:
      'https://musicart.xboxlive.com/7/5c255e00-0000-0000-0000-000000000002/504/image.jpg',
  },
  {
    id: 4,
    title: 'Minecraft',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/es-mncrft-vert-main-2764x4096-intl-67ef76788220f.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
  {
    id: 5,
    title: 'El rey leon',
    image:
      'https://images.justwatch.com/poster/326095284/s718/mufasa-el-rey-leon.jpg',
  },
];

const series = [
  {
    id: 1,
    title: 'FROM',
    image:
      'https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 2,  
    title: 'Stranger Things',
    image:
      'https://cdn.displate.com/artwork/270x380/2022-09-05/5d2f236cad440a7eea5d867cad6b9ea3_b7c3987834880012bb708a2a710edcf7.jpg',
  },
  {
    id: 3,
    title: 'Peaky Blinders',
    image:
      'https://www.tallengestore.com/cdn/shop/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_a29a5be9-9611-43d9-b415-18655f60c629.jpg?v=1619864667',
  },
  {
    id: 4,
    title: 'Wednesday',
    image:
      'https://m.media-amazon.com/images/I/712iUgQM16L._UF894,1000_QL80_.jpg',
  },
  {
    id: 5,  
    title: 'Dahmer',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/uhgsehe3my5teyuheq8iiliwus7-66ab5f48a8aff.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
];

const iptv = [
  {
    id: 1,
    title: 'ESPN',
    className: 'md:col-span-2',
    thumbnail:
      'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png',
  },
  {
    id: 2,
    title: 'Cartoon Network',
    className: 'col-span-1',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg',
  },
  {
    id: 3,
    title: 'National Geographic',
    className: 'col-span-1',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBoAr8OzWfNh-DCwzhMHQFMM1Hrs0Fexjzg&s',
  },
  {
    id: 4,
    title: 'Win Sports',
    className: 'md:col-span-2',
    thumbnail:
      'https://yt3.googleusercontent.com/74v3sDKiXB-uC-zDRcDoMzf97PfTKlXj_K8UzpuaqilFtiLJw3Ij_eKzP4dnIM3ilLjOmjaB=s900-c-k-c0x00ffffff-no-rj',
  },
];
</script>

<template>
  <div class="motion-safe:scroll-smooth">
    <!-- HERO -->
    <section id="hero">
      <Hero v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" />
    </section>

    <!-- SERIES Y PELÍCULAS -->
    <section id="series-peliculas">
      <div class="px-4 sm:px-6 md:px-8 py-8">
        <h1 class="text-2xl font-bold my-6">Películas</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <Card
            v-for="peli in peliculas"
            :key="peli.id"
            v-bind="peli"
            class="hover:scale-105 transition-all duration-300"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          />
        </div>

        <h1 class="text-2xl font-bold my-6 mt-10">Series</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <Card
            v-for="serie in series"
            :key="serie.id"
            v-bind="serie"
            class="hover:scale-105 transition-all duration-300"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          />
        </div>
      </div>
    </section>

    <!-- IPTV -->
    <section id="iptv" class="relative my-20 overflow-hidden">
      <!-- Destello de fondo -->
      <div class="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div
          class="w-[600px] sm:w-[700px] md:w-[800px] h-[400px] sm:h-[450px] md:h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_transparent_70%)] blur-2xl animate-pulse"
        ></div>
      </div>

      <!-- Contenido IPTV -->
      <div
        class="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 px-4 sm:px-6 lg:px-8 py-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div>
          <h1 class="text-orange-500 text-3xl sm:text-4xl font-bold mb-4">
            IPTV (Canales de TV)
          </h1>
          <p class="text-justify text-base sm:text-lg leading-relaxed text-neutral-200">
            Disfruta de tus canales favoritos de todo el mundo. Podrás ver tus partidos de fútbol, Fórmula 1 o baloncesto preferidos, además de contar con canales infantiles ideales para tus hijos. Vive más de lo que amas con servicios de streaming premium, todo en MagisTV. Todos los servicios funcionan completamente gratis.
          </p>
        </div>

        <div class="w-full rounded-2xl p-2 sm:p-4">
          <LayoutGrid :iptv="iptv" />
        </div>
      </div>
    </section>

    <!-- DESCARGAR -->
    <section id="descargar" class="mt-10">
      <HeroGeometric badge="Descargar" title1="Descarga MagisTV" v-motion :initial="{ opacity: 0, y: 60 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }" />
    </section>

    <!-- ACERCA DE -->
    <section id="acerca-de" class="mt-10 px-4 sm:px-6 lg:px-8">
      <FeaturesSection v-motion :initial="{ opacity: 0, y: 60 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" />
    </section>

    <!-- PLANES -->
    <section id="planes">
      <Pricing v-motion :initial="{ opacity: 0, y: 60 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" />
    </section>
  </div>
</template>

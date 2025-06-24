<template>
  <div class="relative isolate bg-black px-6 py-10 lg:px-8">
    <div
      class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ecc516] to-[#e49160] opacity-30"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-4xl text-center">
      <p
        class="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl"
      >
        Selecciona el <span class="text-orange-500">plan</span> que mejor se
        adapte a ti
      </p>
    </div>
    <p
      class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
    >
      Elija un plan asequible que incluya las mejores funciones para atraer a su
      audiencia, fidelizar a los clientes e impulsar las ventas.
    </p>
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      <div
        v-for="(tier, tierIdx) in tiers"
        :key="tier.id"
        :class="[
          tier.featured
            ? 'relative bg-orange-400/60 shadow-2xl'
            : 'bg-white/80 sm:mx-8 lg:mx-0',
          tier.featured
            ? ''
            : tierIdx === 0
            ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
            : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
          'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
        ]"
      >
        <h3
          :id="tier.id"
          :class="[
            tier.featured ? 'text-white' : 'text-orange-500',
            'text-base/7 font-semibold',
          ]"
        >
          {{ tier.name }}
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span
            :class="[
              tier.featured ? 'text-white' : 'text-orange-500',
              'text-5xl font-semibold tracking-tight',
            ]"
            >{{ tier.priceMonthly }}</span
          >
          <span
            :class="[
              tier.featured ? 'text-white' : 'text-black',
              'text-base',
            ]"
            >/Mes</span
          >
        </p>
        <p
          :class="[
            tier.featured ? 'text-gray-200' : 'text-black',
            'mt-6 text-base/7',
          ]"
        >
          {{ tier.description }}
        </p>
        <ul
          role="list"
          :class="[
            tier.featured ? 'text-gray-300' : 'text-gray-800',
            'mt-8 space-y-3 text-sm/6 sm:mt-10',
          ]"
        >
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex gap-x-3"
          >
            <CheckIcon
              :class="[
                tier.featured ? 'text-white' : 'text-orange-600',
                'h-6 w-5 flex-none',
              ]"
              aria-hidden="true"
            />
            {{ feature }}
          </li>
        </ul>
        <a
          :href="tier.href"
          :aria-describedby="tier.id"
          :class="[
            tier.featured
              ? 'bg-white text-orange-400 shadow-xs hover:bg-gray-200 focus-visible:outline-white'
              : 'bg-orange-500 text-white hover:bg-orange-400  focus-visible:outline-orange-500',
            'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
          ]"
          >Adquirir</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const tiers = [
  {
    name: "Plan Gratuito",
    id: "plan-gratuito",
    href: "#",
    priceMonthly: "Gratis",
    description:
      "Acceso limitado al contenido de MagisTv para que puedas conocer nuestra plataforma.",
    features: [
      "Acceso a todos los canales y películas",
      "Soporte vía correo electrónico",
      "Calidad estándar (SD) y HD",
      "1 dispositivo simultáneo",
      "Sin anuncios",

    ],
    featured: false,
  },
  {
    name: "Plan Premium",
    id: "plan-premium",
    href: "#",
    priceMonthly: "$20.000 COP",
    description:
      "Disfruta de todo el contenido de MagisTv sin límites y en alta calidad.",
    features: [
      "Acceso a todos los canales y películas",
      "Soporte prioritario 24/7",
      "Calidad Full HD Y 4K",
      "Hasta 3 dispositivos simultáneos",
      "Sin anuncios",
      "Opción de descargas",

    ],
    featured: true,
  },
];
</script>

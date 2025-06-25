<template>
  <section
    id="faq"
    class="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20 px-6 text-white"
  >
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1
          class="text-5xl font-bold text-orange-400 flex items-center justify-center mt-20"
        >
          Preguntas Frecuentes
        </h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Encuentra respuestas a las dudas más comunes sobre Magis TV. Si no
          encuentras lo que buscas, contáctanos.
        </p>
      </div>

      <!-- Accordion -->
      <div class="bg-white/5 rounded-2xl shadow-xl overflow-hidden">
        <Accordion :multiple="true" :activeIndex="[0]">
          <AccordionTab
            v-for="tab in tabs"
            :key="tab.value"
            :header="tab.title"
            class="border-b border-white/10 hover:bg-white/5 transition-all duration-300"
          >
            <p class="text-gray-300 text-lg leading-relaxed p-4">
              {{ tab.content }}
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const tabs = ref([
  {
    title: '¿Qué es Magis TV?',
    content:
      'Magis TV es una aplicación para Android que te da acceso a canales de TV, películas, series, contenidos infantiles y más. Puedes descargarla desde magistv-pc.com sin necesidad de registro.',
    value: 0,
  },
  {
    title: '¿Es seguro usar Magis TV?',
    content:
      'Sí. Ha sido verificada por VirusTotal y no contiene virus. Magis TV no requiere datos personales. Algunas alertas de antivirus son falsos positivos.',
    value: 1,
  },
  {
    title: '¿Con qué dispositivos es compatible Magis TV?',
    content:
      'Android TV Box, Android TV, Fire TV Stick, Mi TV Stick, Teléfonos y tablets Android. No es compatible con iOS, Roku, Samsung ni LG.',
    value: 2,
  },
  {
    title: '¿Cómo instalar Magis TV?',
    content:
      'Descarga desde magistv.vercel.app > Ejecuta el APK > Sigue las instrucciones > ¡Listo para disfrutar!',
    value: 3,
  },
  {
    title: '¿Cómo actualizar Magis TV?',
    content:
      'Abre la app > Haz clic en "Actualizar" > Espera > ¡Nueva versión instalada!',
    value: 4,
  },
  {
    title: '¿Cómo reportar un problema?',
    content:
      'Dentro de la app, haz clic en "Reportar problema". Se enviará automáticamente al equipo de soporte.',
    value: 5,
  },
  {
    title: '¿Cómo contactar a Magis TV?',
    content: 'Accede a magistv.vercel.app y dirígete a la sección de contacto.',
    value: 6,
  },
  {
    title: '¿Qué emulador debo elegir?',
    content:
      'BlueStacks (más amigable) o Nox Player (más avanzado). Ambos compatibles con Windows y Mac.',
    value: 7,
  },
]);
</script>

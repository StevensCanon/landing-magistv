<script setup lang="ts">
import Android from '@/components/ui/Android.vue';
import Laptop from '@/components/ui/Laptop.vue';

const devices = {
  tv: {
    title: 'Magis TV',
    color: 'from-orange-500 to-orange-600',
    items: [
      'Smart TVs con Android',
      'TV Box con Android',
      'Xiaomi Mi Box',
      'Xiaomi TV Stick',
      'Amazon Fire TV Stick',
      'Google Chromecast',
    ],
  },
  mobile: {
    title: 'Magis Android',
    color: 'from-blue-500 to-blue-600',
    items: ['Celular Android', 'Tablet Android', 'Emulador PC', 'BlueStack'],
  },
};
</script>

<template>
  <section
    class="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 sm:px-6 py-12 sm:py-20 min-h-screen"
  >
    <!-- Header -->
    <div class="text-center mb-12 sm:mb-16">
      <h1
        class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
      >
        Dispositivos Compatibles
      </h1>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Disfruta de Magis en todos tus dispositivos favoritos
      </p>
    </div>

    <!-- Grid Principal -->
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 items-center"
      >
        <!-- Sección TV -->
        <div class="space-y-8">
          <div class="relative group">
            <!-- Círculo decorativo -->
            <div
              class="absolute -top-10 -left-10 w-60 h-60 sm:w-80 sm:h-80 bg-orange-500/50 rounded-full blur-3xl z-0"
            ></div>

            <!-- Laptop -->
            <div class="flex justify-center mb-6 sm:mb-8 relative z-10">
              <Laptop
                srcLight="https://diariondi.com/wp-content/uploads/2024/09/Magis-Tv-www.culturageek.com_.ar_-2-1024x553.webp"
                srcDark="https://diariondi.com/wp-content/uploads/2024/09/Magis-Tv-www.culturageek.com_.ar_-2-1024x553.webp"
                class="w-full max-w-sm sm:max-w-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Card -->
            <div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 relative z-10"
            >
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-xl"
                >
                  📺
                </div>
                <h2 class="text-2xl font-bold">Magis TV</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="item in devices.tv.items"
                  :key="item"
                  class="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/5 hover:border-orange-500/30 transition-colors"
                >
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span class="text-sm text-gray-200">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección Mobile -->
        <div class="space-y-8">
          <div class="relative group">
            <!-- Card -->
            <div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 mb-6 sm:mb-8"
            >
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-xl"
                >
                  📱
                </div>
                <h2 class="text-2xl font-bold">Magis Android</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="item in devices.mobile.items"
                  :key="item"
                  class="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-gray-200">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Android -->
            <div class="flex justify-center relative z-10">
              <Android
                srcLight="https://themagistvgratis.com/wp-content/uploads/2024/12/descargar-magistv-457x1024.webp"
                srcDark="https://themagistvgratis.com/wp-content/uploads/2024/12/descargar-magistv-457x1024.webp"
                class="w-32 sm:w-60 transform group-hover:scale-105 transition-transform duration-300"
                alt="Magis Android"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fondo decorativo -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute bottom-1/4 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"
      ></div>
    </div>
  </section>

  <section
    id="install"
    class="relative bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white px-4 sm:px-6 py-12 sm:py-20 min-h-screen"
  >
    <div class="max-w-7xl mx-auto">
      <h1
        class="text-4xl sm:text-6xl font-bold text-orange-500 mb-12 sm:mb-16 text-center sm:text-left"
      >
        Instalación en dispositivos
      </h1>

      <div class="space-y-16">
        <!-- SMART TV -->
        <div>
          <h2 class="text-2xl font-bold text-slate-400 mb-6">
            Instalación en Smart TV (Fire TV Stick / TV Box)
          </h2>
          <ol
            class="list-decimal list-inside text-gray-300 space-y-6 text-base sm:text-lg"
          >
            <li>
              Instalar el aplicativo Downloader
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Busca Downloader en tu Appstore e instálala.
              </p>
            </li>
            <li>
              Habilitar permisos de instalación
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Ve a Configuración > Mi Fire TV > Opciones de programador,
                activa la Depuración ADB y permite aplicaciones desconocidas.
              </p>
            </li>
            <li>
              Descargar Magis TV APK
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Inicia Downloader, introduce el código
                <span class="text-orange-400 font-bold">6040828</span> y el APK
                se descargará automáticamente.
              </p>
              <img
                src="https://magistv-noticia.com/wp-content/uploads/2025/03/6758-768x419.webp"
                alt="Downloader"
                class="w-full sm:w-3/4 h-auto mt-4 rounded-lg shadow-md"
              />
            </li>
          </ol>
        </div>

        <hr class="border-t border-white/10 my-8" />

        <!-- ANDROID -->
        <div>
          <h2 class="text-2xl font-bold text-slate-400 mb-6">
            Instalación en Android (Teléfonos y Tablets)
          </h2>
          <ol
            class="list-decimal list-inside text-gray-300 space-y-6 text-base sm:text-lg"
          >
            <li>
              Descargar Magis TV APK
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Entra en
                <span class="text-orange-400">magistv.vercel.app</span> desde tu
                navegador y ve a Descargas.
              </p>
              <img
                src="../assets/install-android.png"
                alt="Descarga"
                class="w-full sm:w-3/4 h-auto mt-4 rounded-lg shadow-md"
              />
            </li>
            <li>
              Habilitar instalación de fuentes desconocidas
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Activa «Permitir instalación de aplicaciones desconocidas» en
                Configuración > Seguridad.
              </p>
            </li>
            <li>
              Instalar Magis TV
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Ejecuta el archivo APK y sigue los pasos que aparecen en
                pantalla.
              </p>
              <img
                src="https://magistv-noticia.com/wp-content/uploads/2025/03/823947-768x411.webp"
                alt="Descarga"
                class="w-full sm:w-3/4 h-auto mt-4 rounded-lg shadow-md"
              />
            </li>
          </ol>
        </div>

        <hr class="border-t border-white/10 my-8" />

        <!-- PC -->
        <div>
          <h2 class="text-2xl font-bold text-slate-400 mb-6">
            Instalación en PC (Emulador Android)
          </h2>
          <ol
            class="list-decimal list-inside text-gray-300 space-y-6 text-base sm:text-lg"
          >
            <li>
              Instalar un emulador Android
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Instala BlueStacks o cualquier otro emulador Android en tu
                computadora.
              </p>
              <img
                src="../assets/install-bluestacks.png"
                alt="Emulador"
                class="w-full sm:w-3/4 h-auto mt-4 rounded-lg shadow-md"
              />
            </li>
            <li>
              Descargar Magis TV APK
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                Accede a
                <span class="text-orange-400">magistv.vercel.app</span> y
                descarga el APK para TV.
              </p>
              <img
                src="../assets/install-android.png"
                alt="Descarga"
                class="w-full sm:w-3/4 h-auto mt-4 rounded-lg shadow-md"
              />
            </li>
            <li>
              Instalar Magis TV en el emulador
              <p class="text-gray-400 mt-2 text-sm sm:text-base">
                En BlueStacks ve a Administrador de multimedia → «Importar desde
                Windows» → selecciona el APK → pulsa en Instalar.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const year = new Date().getFullYear();
const router = useRouter();

const scrollToSection = (sectionId) => {
  if (router.currentRoute.value.name === 'Home') {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push({ name: 'Home', hash: `#${sectionId}` });
  }
};
</script>

<template>
  <footer class="bg-neutral-900 text-white">
    <div class="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <!-- LOGO Y DESCRIPCIÓN -->
        <div>
          <img
            src="../assets/logo.png"
            alt="MagisTV"
            class="w-20 mb-4 object-fill hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p class="max-w-sm text-sm leading-relaxed">
            Esta aplicación es compatible con una amplia variedad de dispositivos, como TV Box Android, Android TV, Fire TV Stick, celular Android, etc.
          </p>

          <!-- REDES -->
          <ul class="flex gap-6 mt-6">
            <li>
              <a href="#" target="_blank" class="hover:text-orange-500 transition">
                <v-icon name="fa-facebook-f" scale="1.5" fill="currentColor" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="hover:text-orange-500 transition">
                <v-icon name="fa-instagram" scale="1.5" fill="currentColor" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="hover:text-orange-500 transition">
                <v-icon name="fa-twitter" scale="1.5" fill="currentColor" />
              </a>
            </li>
          </ul>
        </div>

        <!-- ENLACES -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 gap-6 text-sm">
          <!-- SERVICIOS -->
          <div>
            <p class="font-semibold text-orange-500 mb-4">Servicios</p>
            <ul class="space-y-3">
              <li><button @click="scrollToSection('acerca-de')" class="hover:text-orange-500 transition">Acerca de</button></li>
              <li><button @click="scrollToSection('descargar')" class="hover:text-orange-500 transition">Descargar</button></li>
              <li><router-link to="/dispositivos" class="hover:text-orange-500 transition">Dispositivos</router-link></li>
              <li><button @click="scrollToSection('series-peliculas')" class="hover:text-orange-500 transition">Series y películas</button></li>
              <li><button @click="scrollToSection('iptv')" class="hover:text-orange-500 transition">Canales (IPTV)</button></li>
            </ul>
          </div>

          <!-- SOPORTE -->
          <div>
            <p class="font-semibold text-orange-500 mb-4">Soporte</p>
            <ul class="space-y-3">
              <li><router-link to="/contacto" class="hover:text-orange-500 transition">Contacto</router-link></li>
              <li class="font-semibold text-orange-500">O comunícate a</li>
              <li class="hover:text-orange-500 transition">info@magistv-pc.com</li>
              <li class="hover:text-orange-500 transition">magistvmobsuporte@gmail.com</li>
              <li class="hover:text-orange-500 transition">magistvmobile@outlook.com</li>
            </ul>
          </div>

          <!-- LEGAL -->
          <div>
            <p class="font-semibold text-orange-500 mb-4">Legal</p>
            <ul class="space-y-3">
              <li><a href="#" class="hover:text-orange-500 transition">Accesibilidad</a></li>
              <li><a href="#" class="hover:text-orange-500 transition">Política de devoluciones</a></li>
              <li><a href="#" class="hover:text-orange-500 transition">Política de privacidad</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <p class="text-xs text-orange-500 text-center">
        &copy; {{ year }} MagisTV. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

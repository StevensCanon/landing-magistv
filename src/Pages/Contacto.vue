<template>
  <div class="relative min-h-screen flex items-center justify-center px-4 py-20 sm:py-32">
    <!-- Fondo animado -->
    <SquaresBackground class="absolute inset-0 w-full h-full z-0" direction="down" />

    <!-- Toast mensajes -->
    <Toast />

    <!-- Formulario -->
    <form
      @submit.prevent="onFormSubmit"
      class="relative w-full max-w-4xl border border-white/20 shadow-xl rounded-xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-6 backdrop-blur-md bg-white/5"
    >
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-4 text-orange-400">
        Contáctanos
      </h2>

      <!-- Nombre y Apellido -->
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="w-full">
          <label for="firstName" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Nombre</label>
          <input id="firstName" v-model="firstName" required placeholder="Tu nombre"
            class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
        </div>
        <div class="w-full">
          <label for="lastName" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Apellido</label>
          <input id="lastName" v-model="lastName" required placeholder="Tu apellido"
            class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
        </div>
      </div>

      <!-- Correo -->
      <div>
        <label for="email" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Correo Electrónico</label>
        <input id="email" v-model="email" required type="email" placeholder="correo@example.com"
          class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
      </div>

      <!-- País y Dispositivo -->
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="w-full">
          <label for="country" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">País</label>
          <input id="country" v-model="country" required placeholder="Colombia"
            class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
        </div>
        <div class="w-full">
          <label for="device" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Dispositivo con la app</label>
          <select id="device" v-model="selectedDevice" required
            class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4">
            <option disabled value="">Selecciona un dispositivo</option>
            <option v-for="d in dispositivos" :key="d.name" :value="d.name">
              {{ d.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Mensaje -->
      <div>
        <label for="message" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Mensaje</label>
        <textarea id="message" v-model="message" rows="4" required placeholder="Escribe tu mensaje aquí"
          class="w-full bg-neutral-300/90 text-black border rounded py-3 px-4 resize-none"></textarea>
      </div>

      <!-- Términos -->
      <div class="flex items-center">
        <input id="terms" type="checkbox" v-model="checked" required class="mr-2" />
        <label for="terms" class="text-sm text-white">Acepto los términos y condiciones</label>
      </div>

      <!-- Botón -->
      <div>
        <button type="submit"
          class="w-full bg-orange-400 text-white font-semibold py-3 rounded hover:bg-orange-500 transition">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import SquaresBackground from '@/components/ui/SquaresBackground.vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref('')
const selectedDevice = ref('')
const message = ref('')
const checked = ref(false)

const dispositivos = ref([
  { name: 'Android' },
  { name: 'PC' },
  { name: 'Smart TV' },
  { name: 'Fire TV Stick' },
  { name: 'Apple TV' },
  { name: 'Roku' },
  { name: 'Amazon Fire TV' },
  { name: 'Google Chromecast' },
  { name: 'Otro' },
])

const formspreeUrl = 'https://formspree.io/f/mqabgday'

function showToast(severity, summary, detail) {
  toast.add({ severity, summary, detail, life: 4000 })
}

async function onFormSubmit(event) {
  if (!checked.value) {
    showToast('warn', 'Campos requeridos', 'Debes aceptar los términos y condiciones')
    return
  }

  const formData = new FormData(event.target)

  try {
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      showToast('success', 'Enviado', 'Formulario enviado con éxito')
      resetForm()
    } else {
      showToast('error', 'Error', 'No se pudo enviar el formulario.')
    }
  } catch (err) {
    showToast('error', 'Error', 'Error de red al enviar el formulario.')
  }
}

function resetForm() {
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  country.value = ''
  selectedDevice.value = ''
  message.value = ''
  checked.value = false
}
</script>

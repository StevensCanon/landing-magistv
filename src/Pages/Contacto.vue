<template>
  <div class="relative min-h-screen flex items-center justify-center py-40">
    <SquaresBackground
      direction="down"
      class="absolute inset-0 w-full h-full z-0"
    />

    <Toast /> 

    <form
      @submit.prevent="onFormSubmit"
      class="relative border border-white/50 shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col gap-6 w-full max-w-4xl backdrop-blur-md bg-transparent"
    >
      <h2 class="text-4xl font-bold text-center mb-10 text-orange-400">
        Contáctanos
      </h2>

      <!-- Nombre y Apellido -->
      <div class="md:flex gap-4 -mx-3">
        <div class="md:w-1/2 px-3">
          <label for="firstName" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Nombre</label>
          <input id="firstName" name="firstName" type="text" v-model="firstName" required placeholder="Tu nombre"
            class="appearance-none block w-full bg-neutral-300/90 text-black border rounded py-3 px-4 " />
        </div>
        <div class="md:w-1/2 px-3">
          <label for="lastName" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Apellido</label>
          <input id="lastName" name="lastName" type="text" v-model="lastName" required placeholder="Tu apellido"
            class="appearance-none block w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
        </div>
      </div>

      <!-- Correo -->
      <div>
        <label for="email" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Correo Electrónico</label>
        <input id="email" name="email" type="email" v-model="email" required placeholder="correo@example.com"
          class="appearance-none block w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
      </div>

      <!-- País y Dispositivo -->
      <div class="md:flex gap-4 -mx-3">
        <div class="md:w-1/2 px-3">
          <label for="country" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">País</label>
          <input id="country" name="country" type="text" v-model="country" required placeholder="Colombia"
            class="appearance-none block w-full bg-neutral-300/90 text-black border rounded py-3 px-4" />
        </div>

        <div class="md:w-1/2 px-3">
          <label for="device" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Dispositivo con la app</label>
          <select id="device" name="device" v-model="selectedDevice" required
            class="block w-full border bg-neutral-300/90 text-black py-3 px-4 rounded">
            <option disabled value="">Selecciona un dispositivo</option>
            <option v-for="dispositivo in dispositivos" :key="dispositivo.name" :value="dispositivo.name">
              {{ dispositivo.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Mensaje -->
      <div>
        <label for="message" class="block uppercase tracking-wide text-xs font-bold mb-2 text-white">Mensaje</label>
        <textarea id="message" name="message" v-model="message" required rows="4" placeholder="Escribe tu mensaje aquí"
          class="appearance-none block w-full bg-neutral-300/90 text-black border rounded py-3 px-4"></textarea>
      </div>

      <!-- Aceptación -->
      <div class="px-3 flex items-center">
        <input type="checkbox" id="terms" v-model="checked" required class="mr-2" />
        <label for="terms" class="text-sm text-white">Acepto los términos y condiciones</label>
      </div>

      <!-- Botón -->
      <div class="px-3 flex w-full">
        <button type="submit"
          class="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition cursor-pointer w-full">
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

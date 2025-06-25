import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import {
  FaClosedCaptioning,
  MdAppblockingSharp,
  FaTools,
  MdClosedcaptionoffRound,
  Ri24HoursLine,
  BiPcDisplay,
} from 'oh-vue-icons/icons';

addIcons(
  FaClosedCaptioning,
  MdAppblockingSharp,
  FaTools,
  MdClosedcaptionoffRound,
  Ri24HoursLine,
  BiPcDisplay
);

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);
app.component('VIcon', OhVueIcon);
app.component('Toast', Toast);
app.directive('animateonscroll', AnimateOnScroll);
app.use(ToastService);

app.mount('#app');

import VueI18n from 'vue-i18n';
import mainTh from './th/main.js';
import mainEn from './en/main.js';
import aboutTh from './th/about.js';
import aboutEn from './en/about.js';
import infrastructureTh from './th/infrastructure.js';
import infrastructureEn from './en/infrastructure.js';
import componentsTh from './th/components.js';
import componentsEn from './en/components.js';
import servicesTh from './th/services.js';
import servicesEn from './en/services.js';
import Vue from 'vue';

const messages = {
  th: {
    main: mainTh,
    about: aboutTh,
    infrastructure: infrastructureTh,
    components: componentsTh,
    services: servicesTh,
  },
  en: {
    main: mainEn,
    about: aboutEn,
    infrastructure: infrastructureEn,
    components: componentsEn,
    services: servicesEn,
  },
};

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'th',
  messages,
  fallbackLocale: 'th',
});

export default i18n;

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home (EN)',
        about: 'About (EN)',
        skills: 'Skills (EN)',
        projects: 'Projects (EN)',
        experience: 'Experience (EN)',
        contact: 'Contact (EN)',
      },
      hero: {
        greeting: 'Hi (EN)',
        name: 'Your Name (EN)',
        role: 'Your Role (EN)',
        cta: 'Call to action (EN)',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil (FR)',
        about: 'À propos (FR)',
        skills: 'Compétences (FR)',
        projects: 'Projets (FR)',
        experience: 'Expérience (FR)',
        contact: 'Contact (FR)',
      },
      hero: {
        greeting: 'Salut (FR)',
        name: 'Votre nom (FR)',
        role: 'Votre rôle (FR)',
        cta: "Appel à l'action (FR)",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

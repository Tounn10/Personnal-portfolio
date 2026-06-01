import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
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
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        experience: 'Expérience',
        contact: 'Contact',
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

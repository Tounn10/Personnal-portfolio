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
        greeting: 'Hi',
        name: 'Etienne Namur',
        role: 'Software Engineer',
        intro: "Hi, I'm",
        firstName: 'Etienne',
        lastName: 'Namur',
        roles: {
          softwareEngineer: 'Software Engineer',
          dataEngineer: 'Data Engineer',
          cybersecurityEnthusiast: 'Cybersecurity Enthusiast',
          motorsportPassionate: 'Motorsport Passionate',
        },
        tagline: 'Building versatile solutions across software, data & security.',
        cta: {
          viewProjects: 'View Projects',
          downloadCv: 'Download CV',
        },
        social: {
          github: 'GitHub',
          linkedin: 'LinkedIn',
        },
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
        greeting: 'Salut',
        name: 'Etienne Namur',
        role: 'Ingénieur logiciel',
        intro: 'Salut, je suis',
        firstName: 'Etienne',
        lastName: 'Namur',
        roles: {
          softwareEngineer: 'Ingénieur logiciel',
          dataEngineer: 'Data Engineer',
          cybersecurityEnthusiast: "Passionné de cybersécurité",
          motorsportPassionate: 'Passionné de sport automobile',
        },
        tagline: 'Créer des solutions polyvalentes entre logiciel, data et sécurité.',
        cta: {
          viewProjects: 'Voir les projets',
          downloadCv: 'Télécharger le CV',
        },
        social: {
          github: 'GitHub',
          linkedin: 'LinkedIn',
        },
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

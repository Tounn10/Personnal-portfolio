import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './i18n/en.json'
import fr from './i18n/fr.json'

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

      about: {
        who: {
          ariaLabel: 'Who I am',
          title: 'Who I am',
          bio: 'Versatile software engineering student with 3 years of hands-on experience across software development, data engineering and cybersecurity. International background across France, Spain, Germany and the US. Passionate about tech and motorsport.',
          stats: {
            ariaLabel: 'Key statistics',
            years: { value: '3', label: 'Years Experience' },
            countries: { value: '4', label: 'Countries' },
            gpa: { value: 'GPA 3.98 / 3.9', label: 'GPA 3.98 / 3.9' },
          },
        },
        education: {
          ariaLabel: 'Education timeline',
          title: 'Education timeline',
          timelineAriaLabel: 'Education (most recent first)',
          items: {
            ucla: {
              flag: '🇺🇸',
              institution: 'UCLA',
              degree: 'Certificate in Data Analysis & Cybersecurity',
              dates: 'Sep 2025 – Jun 2026',
              location: 'Los Angeles, USA',
            },
            epitechBerlin: {
              flag: '🇩🇪',
              institution: 'Epitech',
              degree: 'Master in Software Engineering (4th year, Berlin)',
              dates: 'Sep 2025 – Aug 2027',
              location: 'Berlin, Germany',
            },
            epitechBarcelona: {
              flag: '🇪🇸',
              institution: 'Epitech Barcelona',
              degree: '3rd year exchange',
              dates: '2023–2024',
              location: 'Barcelona, Spain',
            },
            epitechFrance: {
              flag: '🇫🇷',
              institution: 'Epitech France',
              degree: '1st & 2nd year',
              dates: 'Oct 2022 – 2023',
              location: 'France',
            },
          },
        },
        experience: {
          ariaLabel: 'Experience timeline',
          title: 'Experience timeline',
          timelineAriaLabel: 'Experience (most recent first)',
          items: {
            bernerBecker: {
              flag: '🇩🇪',
              company: 'Berner+Becker',
              role: 'VBA & Power BI Developer',
              dates: 'Oct 2024 – Jul 2025',
              location: 'Berlin, Germany',
              description:
                'Developed Power BI dashboards for hotel clients, automated Excel/VBA reporting tools, and integrated data from multiple hotel sources.',
            },
            vosslohCogifer: {
              flag: '🇫🇷',
              company: 'Vossloh Cogifer',
              role: 'VBA Developer Intern',
              dates: 'Sep 2023 – Dec 2023',
              location: 'Fère-en-Tardenois, France',
              description:
                'Built VBA tools connected to Oracle DB to automate client file processing in an industrial environment.',
            },
          },
        },
      },

      ...en,
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

      about: {
        who: {
          ariaLabel: 'Qui je suis',
          title: 'Qui je suis',
          bio: "Étudiant en ingénierie logicielle polyvalent avec 3 ans d’expérience pratique en développement logiciel, data engineering et cybersécurité. Parcours international entre la France, l’Espagne, l’Allemagne et les États-Unis. Passionné de technologie et de sport automobile.",
          stats: {
            ariaLabel: 'Statistiques clés',
            years: { value: '3', label: "Années d'expérience" },
            countries: { value: '4', label: 'Pays' },
            gpa: { value: 'GPA 3.98 / 3.9', label: 'GPA 3.98 / 3.9' },
          },
        },
        education: {
          ariaLabel: "Parcours d'études",
          title: "Parcours d'études",
          timelineAriaLabel: 'Études (du plus récent au plus ancien)',
          items: {
            ucla: {
              flag: '🇺🇸',
              institution: 'UCLA',
              degree: 'Certificat en analyse de données & cybersécurité',
              dates: 'Sep 2025 – Juin 2026',
              location: 'Los Angeles, États-Unis',
            },
            epitechBerlin: {
              flag: '🇩🇪',
              institution: 'Epitech',
              degree: 'Master en ingénierie logicielle (4e année, Berlin)',
              dates: 'Sep 2025 – Août 2027',
              location: 'Berlin, Allemagne',
            },
            epitechBarcelona: {
              flag: '🇪🇸',
              institution: 'Epitech Barcelona',
              degree: 'Échange de 3e année',
              dates: '2023–2024',
              location: 'Barcelone, Espagne',
            },
            epitechFrance: {
              flag: '🇫🇷',
              institution: 'Epitech France',
              degree: '1re & 2e année',
              dates: 'Oct 2022 – 2023',
              location: 'France',
            },
          },
        },
        experience: {
          ariaLabel: "Parcours professionnel",
          title: "Parcours professionnel",
          timelineAriaLabel: 'Expérience (du plus récent au plus ancien)',
          items: {
            bernerBecker: {
              flag: '🇩🇪',
              company: 'Berner+Becker',
              role: 'Développeur VBA & Power BI',
              dates: 'Oct 2024 – Juil 2025',
              location: 'Berlin, Allemagne',
              description:
                'Développement de tableaux de bord Power BI pour des clients hôteliers, automatisation d’outils de reporting Excel/VBA, et intégration de données provenant de plusieurs sources hôtelières.',
            },
            vosslohCogifer: {
              flag: '🇫🇷',
              company: 'Vossloh Cogifer',
              role: 'Stagiaire développeur VBA',
              dates: 'Sep 2023 – Déc 2023',
              location: 'Fère-en-Tardenois, France',
              description:
                'Conception d’outils VBA connectés à une base Oracle pour automatiser le traitement de fichiers clients dans un environnement industriel.',
            },
          },
        },
      },

      ...fr,
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

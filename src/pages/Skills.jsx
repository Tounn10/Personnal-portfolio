import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/Skills.css'

export default function Skills() {
  const { t } = useTranslation()

  const categories = useMemo(
    () => [
      {
        key: 'languages',
        title: t('skills.categories.languages'),
        skills: ['C', 'C++', 'Python', 'Go', 'JavaScript', 'SQL', 'Bash', 'x86 Assembly'],
      },
      {
        key: 'data',
        title: t('skills.categories.data'),
        skills: ['Power BI', 'Tableau', 'Pandas', 'DBT', 'AWS', 'ETL'],
      },
      {
        key: 'cybersecurity',
        title: t('skills.categories.cybersecurity'),
        skills: ['Metasploit', 'Gobuster', 'John the Ripper', 'TryHackMe', 'HackTheBox'],
      },
      {
        key: 'tools',
        title: t('skills.categories.tools'),
        skills: ['Git', 'Docker', 'Figma', 'Notion', 'VBA', 'Excel'],
      },
    ],
    [t],
  )

  return (
    <div className="skills">
      <div className="skills__inner">
        <h1 className="skills__title">{t('skills.title')}</h1>

        <div className="skills__grid" aria-label={t('skills.title')}>
          {categories.map((category) => (
            <section
              key={category.key}
              className="skills-category"
              aria-label={category.title}
            >
              <h2 className="skills-category__title">{category.title}</h2>

              <div className="skills-category__pills">
                {category.skills.map((skill) => (
                  <span key={skill} className="skills-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

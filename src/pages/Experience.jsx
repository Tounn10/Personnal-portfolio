import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import FlagIcon from '../components/FlagIcon'
import '../styles/Experience.css'

function asArray(value) {
  return Array.isArray(value) ? value : []
}

export default function Experience() {
  const { t } = useTranslation()

  const items = useMemo(
    () => [
      {
        key: 'bernerBecker',
        flagCode: 'DE',
        companyKey: 'experience.items.bernerBecker.company',
        roleKey: 'experience.items.bernerBecker.role',
        locationKey: 'experience.items.bernerBecker.location',
        dates: '2024',
        bulletsKey: 'experience.items.bernerBecker.bullets',
      },
      {
        key: 'vosslohCogifer',
        flagCode: 'FR',
        companyKey: 'experience.items.vosslohCogifer.company',
        roleKey: 'experience.items.vosslohCogifer.role',
        locationKey: 'experience.items.vosslohCogifer.location',
        dates: '2023',
        bulletsKey: 'experience.items.vosslohCogifer.bullets',
      },
      {
        key: 'freelance',
        flagCode: null,
        companyKey: 'experience.items.freelance.company',
        roleKey: 'experience.items.freelance.role',
        locationKey: 'experience.items.freelance.location',
        dates: '2024–present',
        bulletsKey: 'experience.items.freelance.bullets',
      },
    ],
    [],
  )

  return (
    <div className="experience">
      <div className="experience__inner">
        <h1 className="experience__title">{t('experience.title')}</h1>

        <ol className="experience-timeline" aria-label={t('experience.title')}>
          {items.map((item) => {
            const bullets = asArray(t(item.bulletsKey, { returnObjects: true }))

            return (
              <li key={item.key} className="experience-timeline__item">
                <div className="experience-timeline__dot" aria-hidden="true" />

                <div className="experience-timeline__card">
                  <div className="experience-timeline__top">
                    <h2 className="experience-timeline__heading">
                      {item.flagCode ? (
                        <FlagIcon
                          code={item.flagCode}
                          className="experience-timeline__flag"
                        />
                      ) : null}
                      <span className="experience-timeline__company">
                        {t(item.companyKey)}
                      </span>
                      <span className="experience-timeline__dash" aria-hidden="true">
                        —
                      </span>
                      <span className="experience-timeline__role">{t(item.roleKey)}</span>
                    </h2>
                  </div>

                  <p className="experience-timeline__meta">
                    <span>{item.dates}</span>
                    <span className="experience-timeline__sep" aria-hidden="true">
                      •
                    </span>
                    <span>{t(item.locationKey)}</span>
                  </p>

                  <ul className="experience-timeline__bullets">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="experience-timeline__bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

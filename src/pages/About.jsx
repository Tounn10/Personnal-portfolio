import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import FlagIcon from '../components/FlagIcon'
import './About.css'

function Timeline({ ariaLabel, items }) {
  const { t } = useTranslation()

  return (
    <ol className="about-timeline" aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.key} className="about-timeline__item">
          <div className="about-timeline__dot" aria-hidden="true" />

          <div className="about-timeline__card">
            <div className="about-timeline__headingRow">
              <h3 className="about-timeline__institution">
                <FlagIcon code={item.flagCode} className="about-timeline__flag" />
                {t(item.institution)}
              </h3>
            </div>

            <p className="about-timeline__degree">{t(item.degree)}</p>

            <p className="about-timeline__meta">
              <span>{t(item.dates)}</span>
              <span className="about-timeline__sep" aria-hidden="true">
                •
              </span>
              <span>{t(item.location)}</span>
            </p>

            {item.description ? (
              <p className="about-timeline__description">{t(item.description)}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function About() {
  const { t } = useTranslation()

  const stats = useMemo(
    () => [
      { key: 'years', value: t('about.who.stats.years.value'), label: t('about.who.stats.years.label') },
      { key: 'countries', value: t('about.who.stats.countries.value'), label: t('about.who.stats.countries.label') },
      { key: 'gpa', value: t('about.who.stats.gpa.value'), label: t('about.who.stats.gpa.label') },
    ],
    [t],
  )

  const educationItems = useMemo(
    () => [
      {
        key: 'sanFrancisco',
        flagCode: 'US',
        institution: 'about.education.items.sanFrancisco.institution',
        degree: 'about.education.items.sanFrancisco.degree',
        dates: 'about.education.items.sanFrancisco.dates',
        location: 'about.education.items.sanFrancisco.location',
      },
      {
        key: 'ucla',
        flagCode: 'US',
        institution: 'about.education.items.ucla.institution',
        degree: 'about.education.items.ucla.degree',
        dates: 'about.education.items.ucla.dates',
        location: 'about.education.items.ucla.location',
      },
      {
        key: 'epitechBerlin',
        flagCode: 'DE',
        institution: 'about.education.items.epitechBerlin.institution',
        degree: 'about.education.items.epitechBerlin.degree',
        dates: 'about.education.items.epitechBerlin.dates',
        location: 'about.education.items.epitechBerlin.location',
      },
      {
        key: 'epitechBarcelona',
        flagCode: 'ES',
        institution: 'about.education.items.epitechBarcelona.institution',
        degree: 'about.education.items.epitechBarcelona.degree',
        dates: 'about.education.items.epitechBarcelona.dates',
        location: 'about.education.items.epitechBarcelona.location',
      },
      {
        key: 'epitechFrance',
        flagCode: 'FR',
        institution: 'about.education.items.epitechFrance.institution',
        degree: 'about.education.items.epitechFrance.degree',
        dates: 'about.education.items.epitechFrance.dates',
        location: 'about.education.items.epitechFrance.location',
      },
    ],
    [],
  )

  return (
    <div className="about">
      <section className="about-section" aria-label={t('about.who.ariaLabel')}>
        <div className="about-section__inner">
          <div className="about-who">
            <div className="about-who__shapeWrap" aria-hidden="true">
              <div className="about-who__shape" />
            </div>

            <div className="about-who__content">
              <h2 className="about-section__title">{t('about.who.title')}</h2>
              <p className="about-who__bio">{t('about.who.bio')}</p>

              <div className="about-stats" aria-label={t('about.who.stats.ariaLabel')}>
                {stats.map((stat) => (
                  <div key={stat.key} className="about-stats__card">
                    <p className="about-stats__value">{stat.value}</p>
                    <p className="about-stats__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section"
        aria-label={t('about.education.ariaLabel')}
      >
        <div className="about-section__inner">
          <h2 className="about-section__title">{t('about.education.title')}</h2>
          <Timeline
            ariaLabel={t('about.education.timelineAriaLabel')}
            items={educationItems}
          />
        </div>
      </section>
    </div>
  )
}

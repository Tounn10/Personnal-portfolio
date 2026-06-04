import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useTheme from '../context/useTheme.js'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2)
  const nextLang = currentLang === 'fr' ? 'en' : 'fr'

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/skills', label: t('nav.skills') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const closeMenu = () => setMenuOpen(false)

  const onToggleLanguage = async () => {
    await i18n.changeLanguage(nextLang)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          Etienne Namur
        </NavLink>

        <button
          type="button"
          className="navbar__hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navbar__hamburgerBar" />
          <span className="navbar__hamburgerBar" />
          <span className="navbar__hamburgerBar" />
        </button>

        <div className={menuOpen ? 'navbar__right is-open' : 'navbar__right'}>
          <nav className="navbar__links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__link navbar__link--active'
                    : 'navbar__link'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>

            <button
              type="button"
              className="navbar__button"
              onClick={onToggleLanguage}
              aria-label="Toggle language"
            >
              {currentLang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './Home.css'

function getAccentColor() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent')
    .trim()
  return value || '#2D336B'
}

function useTypewriter(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases?.length) return

    const full = phrases[phraseIndex % phrases.length] || ''
    const pauseMs = 900

    let delay = isDeleting ? 30 : 60
    if (!isDeleting && text === full) delay = pauseMs

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (text === full) {
          setIsDeleting(true)
          return
        }
        setText(full.slice(0, text.length + 1))
        return
      }

      if (text.length === 0) {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
        return
      }

      setText(full.slice(0, Math.max(0, text.length - 1)))
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [phrases, phraseIndex, isDeleting, text])

  return text
}

export default function Home() {
  const { t } = useTranslation()
  const canvasRef = useRef(null)

  const roles = useMemo(
    () => [
      t('hero.roles.softwareEngineer'),
      t('hero.roles.dataEngineer'),
      t('hero.roles.cybersecurityEnthusiast'),
      t('hero.roles.motorsportPassionate'),
    ],
    [t],
  )

  const typed = useTypewriter(roles)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let accent = ''

    const particles = []
    const particleCount = 55

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1))

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      accent = getAccentColor()

      particles.length = 0
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 1.5 + Math.random() * 1.5,
        })
      }
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      const maxDist = Math.min(width, height) * 0.18

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]

        ctx.beginPath()
        ctx.fillStyle = accent
        ctx.globalAlpha = 0.22
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25
            ctx.beginPath()
            ctx.strokeStyle = accent
            ctx.globalAlpha = alpha
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      rafId = window.requestAnimationFrame(step)
    }

    resize()
    rafId = window.requestAnimationFrame(step)

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  const cvHref = `${import.meta.env.BASE_URL}cv.pdf`

  return (
    <section className="home-hero">
      <canvas ref={canvasRef} className="home-hero__canvas" />

      <div className="home-hero__inner">
        <div className="home-hero__left">
          <p className="home-hero__greeting">{t('hero.intro')}</p>

          <h1 className="home-hero__name">
            <span className="home-hero__first">{t('hero.firstName')} </span>
            <span className="home-hero__last">{t('hero.lastName')}</span>
          </h1>

          <p className="home-hero__type">
            {typed}
            <span className="home-hero__cursor">|</span>
          </p>

          <p className="home-hero__tagline">{t('hero.tagline')}</p>

          <div className="home-hero__cta">
            <Link
              to="/projects"
              className="home-hero__btn home-hero__btn--primary"
            >
              {t('hero.cta.viewProjects')}
            </Link>

            <a
              href={cvHref}
              className="home-hero__btn home-hero__btn--outline"
              download
            >
              {t('hero.cta.downloadCv')}
            </a>
          </div>

          <div className="home-hero__social">
            <a
              className="home-hero__socialLink"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label={t('hero.social.github')}
              title={t('hero.social.github')}
            >
              <svg
                className="home-hero__socialIcon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.608.07-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.985 1.03-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.698 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.359.31.678.92.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.016 10.016 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            <a
              className="home-hero__socialLink"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label={t('hero.social.linkedin')}
              title={t('hero.social.linkedin')}
            >
              <svg
                className="home-hero__socialIcon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5zM0.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V23h-4v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.94-2.87 3.96V23h-4V8.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="home-hero__shapeWrap" aria-hidden="true">
          <div className="home-hero__shape" />
        </div>
      </div>
    </section>
  )
}

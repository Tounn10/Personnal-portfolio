import './Footer.css'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.3l8 5.2 8-5.2V7H4Zm16 10V9.68l-7.45 4.85a1 1 0 0 1-1.1 0L4 9.68V17h16Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path d="M6.94 8.98H3.62V20h3.32V8.98ZM5.28 4a1.93 1.93 0 1 0 0 3.86 1.93 1.93 0 0 0 0-3.86Zm7.08 4.98H9.18V20h3.31v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.32v-6.04c0-2.96-.64-5.24-4.1-5.24-1.66 0-2.78.91-3.24 1.78h.06V8.98Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.91-1.32 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export default function Footer() {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/Tounn10',
      Icon: GitHubIcon,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/etienne-namur',
      Icon: LinkedInIcon,
    },
    {
      label: 'Email',
      href: 'mailto:etienne.namur@epitech.eu',
      Icon: MailIcon,
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">Etienne Namur</p>

        <nav className="footer__links" aria-label="Social links">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              className="footer__link"
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              title={label}
            >
              <Icon className="footer__icon" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

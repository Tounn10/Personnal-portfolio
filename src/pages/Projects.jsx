import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/Projects.css'

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.608.07-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.985 1.03-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.698 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.359.31.678.92.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.016 10.016 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  const githubProfile = 'https://github.com/Tounn10'

  const projects = useMemo(
    () => [
      {
        key: 'area',
        title: 'AREA',
        descriptionKey: 'projects.items.area.description',
        stack: ['Docker', 'OAuth2', 'React', 'Node.js'],
        githubUrl: githubProfile,
      },
      {
        key: 'dynamicGameEngine',
        title: 'Dynamic Game Engine',
        descriptionKey: 'projects.items.dynamicGameEngine.description',
        stack: ['C++', 'SFML'],
        githubUrl: githubProfile,
      },
      {
        key: 'antman',
        title: 'Antman',
        descriptionKey: 'projects.items.antman.description',
        stack: ['C'],
        githubUrl: githubProfile,
      },
      {
        key: 'corewar',
        title: 'Corewar',
        descriptionKey: 'projects.items.corewar.description',
        stack: ['C'],
        githubUrl: githubProfile,
      },
      {
        key: 'hydra',
        title: 'Hydra',
        descriptionKey: 'projects.items.hydra.description',
        stack: ['Linux', 'Metasploit', 'Bash'],
        githubUrl: githubProfile,
      },
      {
        key: 'weatherPredictor',
        title: 'Weather Predictor',
        descriptionKey: 'projects.items.weatherPredictor.description',
        stack: ['Go'],
        githubUrl: githubProfile,
      },
    ],
    [],
  )

  return (
    <div className="projects">
      <div className="projects__inner">
        <h1 className="projects__title">{t('projects.title')}</h1>

        <div className="projects__grid" aria-label={t('projects.title')}>
          {projects.map((project) => (
            <article key={project.key} className="project-card">
              <div className="project-card__top">
                <h2 className="project-card__title">{project.title}</h2>

                <a
                  className="project-card__github"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('projects.githubLink')}
                  title={t('projects.githubLink')}
                >
                  <GitHubIcon className="project-card__githubIcon" />
                </a>
              </div>

              <p className="project-card__description">{t(project.descriptionKey)}</p>

              <div className="project-card__stack" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Nova from './assets/Nova'
import SwiftCartIllustration from './assets/SwiftCartIllustration';


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SwiftCart: Multi-Portal E-Commerce Ecosystem',
      description: 'A full-stack e-commerce ecosystem featuring robust JWT authentication and a personalized product recommendation engine. The platform seamlessly integrates three dedicated portals: a dynamic buyer storefront, a comprehensive seller dashboard for real-time sales and profit analytics, and a streamlined delivery management app for tracking order fulfillment and logistics earnings.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Vercel'],
      image: (<div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]">
        <SwiftCartIllustration className="w-full h-full" />
      </div>),
      link: 'https://swiftcart-ashen.vercel.app',
      github: 'https://github.com/shivamdwivedi2442/swiftcart',
      featured: true
    },
    {
      id: 2,
      title: 'NOVA — Team Productivity Platform',
      description: 'A full-stack team productivity platform for planning and tracking projects, featuring Supabase authentication with PostgreSQL Row-Level Security and Redis-backed caching for instant load times. The platform seamlessly integrates a drag-and-drop kanban board for task management, an email-based team invitation system with role-based access control, and live progress tracking that updates automatically as tasks move across the board.',
      tech: ['Next.js', 'React.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
      image: (<Nova className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />),
      link: 'https://nova-assignment-tau.vercel.app',
      github: 'https://github.com/shivamdwivedi2442/nova-assignment',
      featured: true
    },
    {
      id: 3,
      title: 'Telegram Quiz Bot — Multi-Tenant Quiz Automation SaaS',
      description: 'A multi-tenant SaaS platform automating Telegram quizzes, featuring secure JWT authentication and AI-powered MCQ extraction from images via Google Gemini. The platform seamlessly integrates a smart scheduling engine for recurring polls, a real-time analytics dashboard tracking per-student performance, and a dedicated leaderboard for daily and weekly rankings.',
      tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Telegraf', 'Google Gemini API', 'JWT'],
      image: '✈️',
      link: 'https://telegram-quiz-bot-mu.vercel.app',
      github: 'https://github.com/shivamdwivedi2442/telegram-quiz-bot',
      featured: false
    },
    {
      id: 4,
      title: 'Cine Hub — Movie Discovery Platform',
      description: 'Full-stack movie discovery web application integrating TMDB API for real-time trending, top-rated, and genre-based film data. Built dynamic industry-wise browsing (Hollywood, Bollywood, Tollywood, South Indian cinema) with animated capsule filters, server-side rendering for SEO (dynamic sitemaps, JSON-LD schema, Open Graph tags), and fully responsive UI with smooth micro-interactions across devices.',
      tech: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'TMDB API'],
      image: '📺',
      link: 'https://cinehub-nu-two.vercel.app/',
      github: 'https://github.com/shivamdwivedi2442/movie-app',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, idx) => (
            <div
              key={project.id}
              className="card card-hover group overflow-hidden animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div>{project.image}</div>

              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                  >
                    GitHub <FiGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <div
                key={project.id}
                className="card card-hover group animate-slideUp"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{project.image}</div>
                </div>

                <h4 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                    >
                      Live Demo<FiExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                    >
                      GitHub<FiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
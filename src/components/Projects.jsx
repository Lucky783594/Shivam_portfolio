import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prescripto - Doctor Appointment Booking',
      description: 'Developed a full-stack doctor appointment booking platform. Implemented specialty-based doctor filtering, date and time-slot selection functionality, and dynamic doctor profile pages for streamlined healthcare discovery.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      image: '🏥',
      link: 'https://prescripto-frontend-7no6.onrender.com/contact',
      github: '',
      featured: true
    },
    {
      id: 2,
      title: 'MERN E-Learning Platform',
      description: 'Full-featured e-learning platform with role-based access for Admin, Instructor, and Student users. Built RESTful APIs for course management, enrollment, quizzes, and certificate generation. Automated assessments and real-time progress monitoring.',
      tech: ['MERN Stack', 'JWT Auth', 'MongoDB', 'REST APIs'],
      image: '📚',
      link: '',
      github: 'https://www.instagram.com/lucky47ig',
      featured: true
    },
    {
      id: 3,
      title: 'Cine Hub — Movie Discovery Platform',
      description: 'Full-stack movie discovery web application integrating TMDB API for real-time trending, top-rated, and genre-based film data. Built dynamic industry-wise browsing (Hollywood, Bollywood, Tollywood, South Indian cinema) with animated capsule filters, server-side rendering for SEO (dynamic sitemaps, JSON-LD schema, Open Graph tags), and fully responsive UI with smooth micro-interactions across devices.',
      tech: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'TMDB API'],
      image: '📺',
      link: 'https://cinehub-nu-two.vercel.app/',
      github: 'https://github.com/shivamdwivedi2442/movie-app',
      featured: false
    },
    {
      id: 4,
      title: 'Daily Ledger - Productivity & Task Management',
      description: 'Developed a responsive and clean task-management web application designed to optimize daily workflow scheduling. Focused on creating an intuitive, clutter-free user interface utilizing semantic HTML5 structure, modular CSS layout, and efficient JavaScript DOM manipulation to manage tasks seamlessly.',
      tech: ['React.js', 'Tailwind css', 'javascript', 'CSS3', 'Next.js'],
      image: '📚',
      link: 'https://to-do-app-umber-phi.vercel.app/',
      github: 'https://github.com/shivamdwivedi2442/to-do-app',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, idx) => (
            <div
              key={project.id}
              className="card card-hover group overflow-hidden animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-6xl mb-4">{project.image}</div>

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
        </div> */}

        <div className="mb-8">
          {/* <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Other Projects</h3> */}
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
                  {project.tech.slice(0, 3).map((tech) => (
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

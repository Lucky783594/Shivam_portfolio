export default function Experience() {
  const experience = [
    {
      period: 'MARCH 2026',
      title: 'MERN Full Stack Developer',
      company: 'Learning',
      description: 'Started learning the MERN stack from scratch — building a strong foundation in JavaScript, React.js, Node.js, Express.js, and MongoDB through structured coursework and hands-on projects.',
      type: 'started'
    },
    {
      period: 'JULY 2026 - PRESENT',
      title: 'Bsc Computer Science',
      company: 'Learning',
      description: 'Studying core first-year computer science fundamentals — Programming in C/C++, Data Structures, Discrete Mathematics, Digital Logic Design, and Computer Organization — alongside self-driven MERN stack and Java development training.',
      type: 'education'
    },
    {
      period: 'AUGUST 2026',
      title: 'MERN Full Stack Developer',
      company: 'Completed',
      description: 'Completed the MERN Full Stack Developer program, gaining hands-on experience building end-to-end web applications with React.js, Node.js, Express.js, and MongoDB.',
      type: 'coursecompleted'
    },
    {
      period: 'AUGUST 2026 - PRESENT',
      title: 'Frontend Developer Intern',
      company: 'She Can Foundation',
      description: 'Currently working as a Frontend Developer Intern, building and maintaining responsive, accessible UI features and integrating REST APIs in a production-style workflow.',
      type: 'current'
    }
  ]

  const badgeStyles = {
    current: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    internship: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400',
    education: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400',
    coursecompleted: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    started: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400'
  }

  const badgeLabels = {
    current: 'Current',
    internship: 'Internship',
    education: 'Education',
    coursecompleted: 'Completed',
    started: 'Started'
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Timeline</h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-fuchsia-400 to-teal-400 dark:from-fuchsia-600 dark:to-teal-600"></div>

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-8 animate-slideUp ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="hidden md:flex flex-col items-center md:w-1/2">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-dark-card border-4 border-fuchsia-600 widh shadow-lg"></div>
                </div>

                <div className="md:w-1/2 md:relative md:top-0 md:left-0 pl-8 md:pl-0">
                  <div className="card card-hover group">
                    <div className="inline-block mb-3">
                      <span className={`px-4 py-1 text-sm font-mono font-semibold rounded-full ${badgeStyles[item.type]}`}>
                        {badgeLabels[item.type]}
                      </span>
                    </div>

                    <div className="mb-2">
                      <p className="text-sm font-mono font-semibold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-wide">
                        {item.period}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mt-1 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mt-1">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
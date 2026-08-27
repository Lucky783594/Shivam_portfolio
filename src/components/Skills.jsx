import { FrontendIcon, BackendIcon, DatabaseIcon, LanguagesIcon, ToolsIcon, OtherSkillsIcon } from './assets/SkillCategoryIcons';


export default function Skills() {
  const skills = {
    'Frontend': {
      icon: (<FrontendIcon className="w-14 h-14" />),
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Design']
    },
    'Backend': {
      icon: (<BackendIcon className="w-14 h-14" />),
      items: ['Express.js', 'JWT Authentication', 'Middleware']
    },
    'Database': {
      icon: (<DatabaseIcon className="w-14 h-14" />),
      items: ['MongoDB', 'Database Design']
    },
    'Languages': {
      icon: (<LanguagesIcon className="w-14 h-14" />),
      items: ['JavaScript', 'HTML', 'CSS']
    },
    'Tools & Platforms': {
      icon: (<ToolsIcon className="w-14 h-14" />),
      items: ['Git', 'GitHub', 'Docker', 'Redis', 'VS Code', 'Postman', 'Render', 'vercel', 'MongoDB Atlas']
    },
    'Other Skills': {
      icon: (<OtherSkillsIcon className="w-14 h-14" />),
      items: ['Problem Solving', 'Deployment', 'NEXT JS']
    }
  }

  const expertise = [
    { label: 'MERN Stack (React, Node.js, MongoDB)', value: 85 },
    { label: 'Frontend Development', value: 95 },
    { label: 'Backend Development', value: 65 },
    { label: 'Problem Solving & DSA', value: 5 },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skills).map(([category, data], idx) => (
            <div
              key={category}
              className="card card-hover group animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 ...">
                {data.icon}
              </div>

              <h3 className="text-xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>

              <div className="space-y-2">
                {data.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-fuchsia-50 to-teal-50 dark:from-fuchsia-900/10 dark:to-teal-900/10 rounded-lg p-8 border border-fuchsia-200 dark:border-fuchsia-800/50">
          <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Expertise Level</h3>

          <div className="space-y-6">
            {expertise.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{row.label}</span>
                  <span className="font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400">{row.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-fuchsia-500 to-teal-400" style={{ width: `${row.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

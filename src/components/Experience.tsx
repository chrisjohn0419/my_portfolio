import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      role: 'Web Development Intern',
      period: 'Jan 2024 - Apr 2024',
      location: 'Remote',
      responsibilities: [
        'Developed and maintained responsive web applications using React and TypeScript',
        'Collaborated with senior developers to implement new features and optimize existing code',
        'Participated in code reviews and contributed to improving development workflows',
        'Assisted in debugging and resolving production issues',
      ],
      technologies: ['React', 'TypeScript', 'Git', 'REST APIs'],
    },
    {
      company: 'Digital Solutions Co.',
      role: 'Frontend Developer (OJT)',
      period: 'Jun 2023 - Dec 2023',
      location: 'On-site',
      responsibilities: [
        'Built responsive UI components using HTML, CSS, and JavaScript',
        'Integrated frontend with backend APIs and managed application state',
        'Worked closely with design team to implement pixel-perfect designs',
        'Learned agile methodologies and participated in daily standups',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

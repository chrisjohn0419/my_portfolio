import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  darkMode?: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies?: string[];
}

function Experience({ darkMode = false }: ExperienceProps) {
  const experiences: ExperienceItem[] = [
    {
      company: "Freelance Full Stack Developer",
      role: "School Management System",
      period: "2026",
      responsibilities: [
        "Developed a comprehensive school management solution with student records, attendance tracking, and reporting features",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      company: "Freelance Full Stack Developer",
      role: "City College Website",
      period: "2026",
      responsibilities: [
        "Built a modern website for City College with responsive design, interactive elements, and a seamless user experience",
      ],
      technologies: ["React", "PHP", "MySQL"],
    },
    {
      company: "Freelance Full Stack Developer",
      role: "Library Management System",
      period: "2026",
      responsibilities: [
        "Designed and developed a web-based library management system using Laravel, MySQL, Bootstrap, and JavaScript",
        "Implemented book catalog, borrower management, authentication, and borrowing/return modules",
      ],
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    },
    {
      company: "Freelance Full Stack Developer",
      role: "Tailoring Management System",
      period: "2026",
      responsibilities: [
        "Developed a tailoring management system to manage customer information, orders, measurements, payments, and job tracking",
        "Built responsive interfaces and optimized database operations for efficient workflow management",
      ],
    },
    {
      company: "Cerebrox I.T Solutions",
      role: "Junior Web Developer",
      period: "2024 - 2026",
      responsibilities: [
        "Maintained and optimized a production school management system using PHP (CodeIgniter) and MySQL, improving attendance processing, reporting workflows, and overall system performance",
        "Contributed to the development of a Laravel-based enrollment system and currently maintain and enhance system features, user interfaces, and backend operations in a live production environment",
        "Maintained Python-based GSM messaging scripts and supported a Raspberry Pi-powered tapping station for real-time attendance tracking and system integration",
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "Laravel",
        "MySQL",
        "Python",
        "Raspberry Pi",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-4`}
          >
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p
            className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4 max-w-2xl mx-auto`}
          >
            Professional experience building and maintaining production web
            systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div
                    className={`p-3 rounded-lg transition-colors ${darkMode ? "bg-blue-900/50 group-hover:bg-blue-800/50" : "bg-blue-50 group-hover:bg-blue-100"}`}
                  >
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-1 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p
                        className={`${darkMode ? "text-gray-500" : "text-slate-500"} text-sm`}
                      >
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? "text-gray-400 bg-gray-700" : "text-slate-600 bg-slate-50"}`}
                >
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <div className={exp.technologies?.length ? "mb-6" : ""}>
                <h4
                  className={`text-sm font-semibold mb-3 uppercase tracking-wide ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                >
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                    >
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies && exp.technologies.length > 0 && (
                <div>
                  <h4
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${darkMode ? "bg-gray-700 text-gray-300 hover:bg-blue-900/50 hover:text-blue-300" : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

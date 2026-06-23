import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationProps {
  darkMode?: boolean;
}

function Education({ darkMode = false }: EducationProps) {
  const education = [
    {
      school: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2020 - 2024",
      gpa: "3.8 / 4.0",
      highlights: [
        "Dean's List for Academic Excellence",
        "Graduated with Honors",
        "Member of Computer Science Society",
      ],
    },
  ];

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2024",
    },
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Mobile App Development",
  ];

  return (
    <section
      id="education"
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-4`}
          >
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p
            className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4 max-w-2xl mx-auto`}
          >
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${darkMode ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30" : "bg-gradient-to-br from-blue-50 to-cyan-50"}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}
                  >
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {edu.school}
                    </p>
                    <div
                      className={`flex flex-wrap gap-4 text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                    >
                      <span className="font-medium">{edu.period}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${darkMode ? "text-gray-400" : "text-slate-700"}`}
                      >
                        <Award
                          className="text-blue-600 flex-shrink-0"
                          size={18}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Relevant Coursework
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {courses.map((course) => (
                      <div
                        key={course}
                        className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-slate-700"}`}
                      >
                        <BookOpen
                          className="text-blue-600 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
              >
                <Award className="text-blue-600" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-colors group ${darkMode ? "bg-gray-700 hover:bg-blue-900/50" : "bg-slate-50 hover:bg-blue-50"}`}
                  >
                    <h4
                      className={`font-semibold mb-1 group-hover:text-blue-600 transition-colors ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                    >
                      {cert.name}
                    </h4>
                    <p
                      className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-slate-500"}`}
                    >
                      {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

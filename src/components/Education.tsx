import { GraduationCap, Award } from "lucide-react";

interface EducationProps {
  darkMode?: boolean;
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  track?: string;
  highlights?: string[];
}

interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

function Education({ darkMode = false }: EducationProps) {
  const education: EducationItem[] = [
    {
      school: "University of Science and Technology of Southern Philippines",
      degree: "Bachelor of Science in Information Technology",
      period: "2020 - 2024",
      track: "Track A Networking",
      highlights: [
        'BootCamp: Programmers\' Varsity Camp 2023 "Transforming Yourself"',
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "CCNAv7: Social Networking",
    },
    {
      name: "CCNAv7: Enterprise Networking, Security, and Automation",
    },
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
                <div
                  className={`flex items-start gap-4 ${edu.highlights?.length ? "mb-6" : ""}`}
                >
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
                      {edu.track && (
                        <span className="font-medium">{edu.track}</span>
                      )}
                    </div>
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div>
                    <h4
                      className={`text-sm font-semibold mb-3 uppercase tracking-wide ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                    >
                      Awards & Activities
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
                )}
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
                      className={`font-semibold group-hover:text-blue-600 transition-colors ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                    >
                      {cert.name}
                    </h4>
                    {cert.issuer && (
                      <p
                        className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                      >
                        {cert.issuer}
                      </p>
                    )}
                    {cert.year && (
                      <p
                        className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-slate-500"}`}
                      >
                        {cert.year}
                      </p>
                    )}
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

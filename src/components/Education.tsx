import { GraduationCap, Award, BookOpen } from 'lucide-react';

function Education() {
  const education = [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      period: '2020 - 2024',
      gpa: '3.8 / 4.0',
      highlights: [
        'Dean\'s List for Academic Excellence',
        'Graduated with Honors',
        'Member of Computer Science Society',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2023',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2023',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2024',
    },
  ];

  const courses = [
    'Data Structures & Algorithms',
    'Web Development',
    'Database Management Systems',
    'Software Engineering',
    'Computer Networks',
    'Mobile App Development',
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="font-medium">{edu.period}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <Award className="text-blue-600 flex-shrink-0" size={18} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                    Relevant Coursework
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <BookOpen className="text-blue-600 flex-shrink-0" size={16} />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                    <p className="text-xs text-slate-500 mt-1">{cert.year}</p>
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

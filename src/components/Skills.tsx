import { Code2, Palette, MessageSquare, Users, Zap, Target } from 'lucide-react';

function Skills() {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Figma',
    'Adobe XD',
    'Postman',
    'npm/yarn',
  ];

  const softSkills = [
    { icon: MessageSquare, name: 'Communication', description: 'Clear and effective communication' },
    { icon: Users, name: 'Teamwork', description: 'Collaborative problem solving' },
    { icon: Zap, name: 'Fast Learner', description: 'Quick to adapt to new technologies' },
    { icon: Target, name: 'Problem Solving', description: 'Analytical and creative thinking' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-50 rounded-lg">
                <Palette className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Tools & Technologies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{skill.name}</h4>
              <p className="text-sm text-slate-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

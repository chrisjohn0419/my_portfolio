import { User, Heart, Code, Briefcase } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Background</h3>
                <p className="text-slate-600 leading-relaxed">
                  Recent graduate with a Bachelor's degree in Computer Science. Passionate about
                  creating innovative solutions and constantly learning new technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
                <Heart className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Interests</h3>
                <p className="text-slate-600 leading-relaxed">
                  Enthusiastic about web development, UI/UX design, and building applications that
                  make a positive impact. Love exploring new frameworks and staying updated with
                  industry trends.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Code className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Philosophy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Believe in writing clean, maintainable code and creating user experiences that
                  are both beautiful and functional. Always eager to collaborate and learn from others.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-slate-200 flex items-center justify-center">
                <Briefcase size={120} className="text-slate-400" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { User, Heart, Code } from 'lucide-react';
import Pic1 from "../assets/images/pic1.jpg";
import Pic2 from "../assets/images/pic2.jpg";
import Pic3 from "../assets/images/pic3.jpg";


interface AboutProps {
  darkMode?: boolean;
}

function About({ darkMode = false }: AboutProps) {
  return (
    <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-slate-800'} mb-4`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-blue-900/50 group-hover:bg-blue-800/50' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-slate-800'} mb-2`}>Background</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                  Recent graduate with a Bachelor's degree in Computer Science. Passionate about
                  creating innovative solutions and constantly learning new technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-cyan-900/50 group-hover:bg-cyan-800/50' : 'bg-cyan-50 group-hover:bg-cyan-100'}`}>
                <Heart className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-slate-800'} mb-2`}>Interests</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                  Enthusiastic about web development, UI/UX design, and building applications that
                  make a positive impact. Love exploring new frameworks and staying updated with
                  industry trends.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-blue-900/50 group-hover:bg-blue-800/50' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <Code className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-slate-800'} mb-2`}>Philosophy</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                  Believe in writing clean, maintainable code and creating user experiences that
                  are both beautiful and functional. Always eager to collaborate and learn from others.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-80" style={{ perspective: '1000px' }}>
            <div className="carousel-container">
              <div className="carousel-item" style={{ '--i': 0 } as React.CSSProperties}>
                <img src={Pic1} alt="Pic1" className="w-full h-full object-cover rounded-xl shadow-lg" />
              </div>
              <div className="carousel-item" style={{ '--i': 1 } as React.CSSProperties}>
                <img src={Pic2} alt="Pic2" className="w-full h-full object-cover rounded-xl shadow-lg" />
              </div>
              <div className="carousel-item" style={{ '--i': 2 } as React.CSSProperties}>
                <img src={Pic3} alt="Pic3" className="w-full h-full object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

function useTypingSequence(fullName: string, flipText: string, startDelay: number = 500) {
  const [displayedName, setDisplayedName] = useState('');
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting' | 'flipping' | 'flipDone'>('typing');

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedName(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setPhase('waiting');
          
          setTimeout(() => {
            setPhase('flipping');
          }, 1500);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [fullName, startDelay]);

  useEffect(() => {
    if (phase === 'flipping') {
      const flipTimeout = setTimeout(() => {
        setDisplayedName(flipText);
        setPhase('flipDone');
      }, 600);
      return () => clearTimeout(flipTimeout);
    }
  }, [phase, flipText]);

  return { displayedName, phase };
}

function Hero({ darkMode }: HeroProps) {
  const [showContent, setShowContent] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullName = "John Christian Los Baños";
  const flipText = "Welcome to My Portfolio";
  
  const { displayedName, phase } = useTypingSequence(fullName, flipText, 300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6"
    >
      <div className="container mx-auto text-center">
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl overflow-hidden">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>
            {phase === 'flipDone' ? (
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Welcome to My Portfolio
              </span>
            ) : (
              <>
                Hi, I'm{' '}
                <span className={`bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block ${
                  phase === 'flipping' ? 'animate-flip' : ''
                }`}>
                  {displayedName}
                  {(phase === 'typing' || phase === 'waiting') && <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />}
                </span>
              </>
            )}
          </h1>


          <p className={`text-2xl md:text-3xl mb-6 font-light transition-all duration-700 delay-300 ${
            phase === 'waiting' || phase === 'flipping' || phase === 'flipDone' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
            Full Stack Developer
          </p>


          <p className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-500 ${
            phase === 'flipDone' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
            Crafting beautiful, functional, and user-friendly digital experiences.
            Passionate about clean code and innovative solutions.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 transition-all duration-700 delay-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }">
            <button
              onClick={() => scrollToSection('contact')}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:text-blue-400'
                  : 'bg-white text-slate-700 hover:text-blue-600'
              }`}
            >
              <Mail size={24} />
            </button>
            <a
              href="https://github.com/chrisjohn0419"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:text-blue-400'
                  : 'bg-white text-slate-700 hover:text-blue-600'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https:linkedin.com/in/john-christian-los-baños"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:text-blue-400'
                  : 'bg-white text-slate-700 hover:text-blue-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-700 delay-800 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-slate-700'
              }`}
            >
              View My Work
            </button>
          </div>
        </div>

        <a
          href="/Resume.pdf"
          download="John-Christian-Resume.pdf"
          className={`fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400'
              : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600'
          }`}
        >
          Resume <ArrowDown size={18} />
        </a>


      </div>
    </section>
  );
}

export default Hero;

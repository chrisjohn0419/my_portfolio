import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
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
        <div className="animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-6xl font-bold text-slate-600">
                YN
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-600 mb-6 font-light">
            Junior Web Developer
          </p>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting beautiful, functional, and user-friendly digital experiences.
            Passionate about clean code and innovative solutions.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;

import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode?: boolean;
}

function Footer({ darkMode = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-950 text-gray-300' : 'bg-slate-900 text-slate-300'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform mb-4"
            >
              Your Name
            </button>
<p className={`${darkMode ? 'text-gray-500' : 'text-slate-400'} leading-relaxed`}>
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-white'}`}>Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`${darkMode ? 'text-gray-500 hover:text-blue-400' : 'text-slate-400 hover:text-blue-400'} transition-colors`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-white'}`}>Connect</h3>
            <div className="flex gap-4 mb-4">
<a
                href="mailto:your.email@example.com"
                className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-blue-600' : 'bg-slate-800 hover:bg-blue-600'}`}
              >
                <Mail size={20} />
              </a>
<a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-blue-600' : 'bg-slate-800 hover:bg-blue-600'}`}
              >
                <Github size={20} />
              </a>
<a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-blue-600' : 'bg-slate-800 hover:bg-blue-600'}`}
              >
                <Linkedin size={20} />
              </a>
            </div>
<p className={`${darkMode ? 'text-gray-500' : 'text-slate-400'} text-sm`}>
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>

<div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${darkMode ? 'border-gray-800' : 'border-slate-800'}`}>
          <p className={`${darkMode ? 'text-gray-500' : 'text-slate-400'} text-sm text-center md:text-left`}>
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className={`${darkMode ? 'text-gray-500' : 'text-slate-400'} text-sm flex items-center gap-1`}>
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

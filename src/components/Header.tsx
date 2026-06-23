import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

function useTypingEffect(
  text: string,
  speed: number = 100,
  delay: number = 1000,
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (displayedText.length === text.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, delay);
    } else if (!isTyping && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isTyping && displayedText.length === 0) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, speed, delay]);

  return displayedText;
}

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

function Header({ activeSection, darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const typedText = useTypingEffect("JC", 100, 2000);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : darkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 space-y-4 backdrop-blur-sm rounded-lg shadow-xl ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-500/10"
                    : darkMode
                      ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

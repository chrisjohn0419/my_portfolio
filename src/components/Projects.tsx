import { ExternalLink, Github, Folder } from "lucide-react";
import picture1 from "../assets/projects/Library1.png";
import website from "../assets/projects/website.png";
import enrollment from "../assets/projects/enrollment.png";

import {
  FaNodeJs,
  FaPhp,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiVsco, SiPostman } from "react-icons/si";

interface ProjectsProps {
  darkMode?: boolean;
}

function Projects({ darkMode = false }: ProjectsProps) {
  const projects = [
    {
      title: "Library Management System",
      description:
        "A fully functional library management system with book listings, borrowing functionality, and user management. Built with React and integrated with a REST API.",
      technologies: ["React JS", "Tailwind CSS", "Node.js", "Php"],
      image: picture1,
      github: "https://github.com/yourusername/project1",
      demo: "https://library-management-tawny-pi.vercel.app",
    },
    {
      title: "City College Website",
      description:
        "Modern website for City College with responsive design, interactive elements, and seamless user experience.",
      technologies: ["React JS", "Php", "MySQL"],
      image: website,
      github: "https://github.com/yourusername/project2",
      demo: "https://citycollegecdo.edu.ph/",
    },
    {
      title: "Enrollment System",
      description:
        "Streamlined enrollment process with real-time dorm availability, api integration, and seamless user experience.",
      technologies: ["Laravel", "Php", "MySQL"],
      image: enrollment,
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
    {
      title: "School Management System",
      description:
        "Comprehensive school management solution with student records, attendance tracking, and reporting features.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "project",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
    },
  ];

  const techIcons: Record<string, JSX.Element> = {
    "React JS": <FaReact className="text-cyan-400" />,
    React: <FaReact className="text-cyan-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    Php: <FaPhp className="text-indigo-400" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    CSS3: <FaCss3Alt className="text-blue-500" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    Laravel: <FaLaravel className="text-red-500" />,
    MySQL: <SiMysql className="text-blue-600" />,
    GitHub: <FaGithub />,
    Postman: <SiPostman className="text-orange-500" />,
    "VS Code": <SiVsco className="text-blue-500" />,
  };

  return (
    <section
      id="projects"
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-4`}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p
            className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4 max-w-2xl mx-auto`}
          >
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${darkMode ? "bg-gray-800" : "bg-slate-50"}`}
            >
              <div className="relative h-48 overflow-hidden">
                {project.image &&
                typeof project.image === "string" &&
                project.image !== "project" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <Folder
                      size={80}
                      className="text-white/20 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className={`flex flex-col items-center gap-1 w-16 ${
                        darkMode ? "text-gray-300" : "text-slate-700"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg text-2xl transition-transform hover:scale-110 ${
                          darkMode ? "bg-gray-700" : "bg-slate-100"
                        }`}
                      >
                        {techIcons[tech] ?? (
                          <span className="text-xs font-medium">?</span>
                        )}
                      </div>
                      <span className="text-xs font-medium text-center leading-tight">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

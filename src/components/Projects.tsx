import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectsProps {
  darkMode?: boolean;
}

function Projects({ darkMode = false }: ProjectsProps) {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce website with product listings, shopping cart, and checkout functionality. Built with React and integrated payment processing.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
      ],
      image: "project",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "project",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard displaying real-time weather data, forecasts, and historical trends with beautiful data visualizations.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      image: "project",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing projects and skills with smooth animations and modern design patterns.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "project",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
    },
  ];

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
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">
                <Folder
                  size={80}
                  className="text-white/20 group-hover:scale-110 transition-transform duration-300"
                />
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-50 text-blue-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
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

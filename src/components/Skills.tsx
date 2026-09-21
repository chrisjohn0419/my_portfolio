import {
  Code2,
  Palette,
  MessageSquare,
  Users,
  Zap,
  Target,
} from "lucide-react";
// IconType not needed here
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaJs,
} from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiVsco, SiPostman } from "react-icons/si";

interface SkillsProps {
  darkMode?: boolean;
}

function Skills({ darkMode = false }: SkillsProps) {
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#264E84" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c" },
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ];

  const backendSkills = [
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Node.js", icon: FaJs, color: "#3C873A" },
    { name: "Rest Api", icon: Code2, color: "#06b6d4" },
  ];

  const tools = [
    { name: "Git & GitHub", icon: FaGithub, color: "#F1502F" },
    { name: "VS Code", icon: SiVsco, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ];

  const softSkills = [
    {
      icon: MessageSquare,
      name: "Communication",
      description: "Clear and effective communication",
    },
    {
      icon: Users,
      name: "Teamwork",
      description: "Collaborative problem solving",
    },
    {
      icon: Zap,
      name: "Resourcefulness",
      description: "Quick to adapt to new technologies",
    },
    {
      icon: Target,
      name: "Problem Solving",
      description: "Analytical and creative thinking",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-4`}
          >
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div
            className={`rounded-2xl p-8 shadow-md hover:shadow-2xl transition-shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2 rounded-lg ${darkMode ? "bg-blue-900/50" : "bg-blue-50"}`}
              >
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-blue-400" : "text-slate-800"}`}
              >
                Frontend Development
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frontendSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg hover:scale-105 transition-all duration-300 ${
                      darkMode ? "bg-gray-800 hover:bg-gray-600" : ""
                    }`}
                  >
                    <Icon
                      size={32}
                      className="text-blue-600"
                      style={skill.color ? { color: skill.color } : undefined}
                    />
                    <span
                      className={`${darkMode ? "text-gray-300" : "text-slate-700"} text-xs`}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-2xl p-8 shadow-md hover:shadow-2xl transition-shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2 rounded-lg ${darkMode ? "bg-blue-900/50" : "bg-blue-50"}`}
              >
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-blue-400" : "text-slate-800"}`}
              >
                Backend Development
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {backendSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg hover:scale-105 transition-all duration-300 ${
                      darkMode ? "bg-gray-800 hover:bg-gray-600" : ""
                    }`}
                  >
                    <Icon
                      size={32}
                      className="text-blue-600"
                      style={skill.color ? { color: skill.color } : undefined}
                    />
                    <span
                      className={`${darkMode ? "text-gray-300" : "text-slate-700"} text-xs`}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2 rounded-lg ${darkMode ? "bg-cyan-900/50" : "bg-cyan-50"}`}
              >
                <Palette className="text-cyan-600" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"}`}
              >
                Tools & Technologies
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className={`flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-all duration-300 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-slate-50 hover:bg-blue-50"}`}
                  >
                    <Icon
                      size={20}
                      style={tool.color ? { color: tool.color } : undefined}
                    />
                    <span
                      className={`${darkMode ? "text-gray-300" : "text-slate-700"} font-medium`}
                    >
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div
                  className={`inline-block p-4 rounded-full mb-4 group-hover:scale-110 transition-transform ${darkMode ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50" : "bg-gradient-to-br from-blue-50 to-cyan-50"}`}
                >
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h4
                  className={`text-lg font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-2`}
                >
                  {skill.name}
                </h4>
                <p
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                >
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { motion } from "framer-motion";

const projects = [
  {
    title: "Jungle Hunt",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Developed a zombie survival game set in a dense, dynamic jungle
          environment, emphasizing resource management and tactical movement.
        </li>
        <li>
          Engineered a shrinking fire zone mechanic to intensify player
          decision-making and encourage constant adaptation.
        </li>
        <li>
          Implemented finite ammo and stealth systems, requiring players to
          balance risk and resource use while evading increasingly aggressive
          AI-driven zombies.
        </li>
        <li>
          Designed and tuned procedural spawning and behavior trees to create
          unpredictable, replayable encounters.
        </li>
        <li>
          Built the project as a solo developer to explore advanced gameplay
          systems and AI, laying groundwork for future multiplayer and battle
          royale features.
        </li>
      </ul>
    ),
    tech: [
      "Unreal Engine",
      "Blueprints",
      "Behaviour Trees",
      "Procedural Spawning",
    ],
    github: [
      {
        label: "Itch.io",
        url: "https://nisarg-patel.itch.io/jungle-hunt",
      },
    ],
    visuals: null,
    notes: null,
  },
  {
    title: "Database Gamified",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Designed a prototype educational game where database concepts are core
          to gameplay, requiring players to write SQL queries to progress.
        </li>
        <li>
          Integrated an AI-powered backend using DeepSeek to validate
          user-submitted queries, dynamically providing hints or feedback based
          on accuracy.
        </li>
        <li>
          Developed a system where correct queries trigger in-game events and
          animations, reinforcing learning through interactive responses.
        </li>
        <li>
          Focused on core mechanics and backend integration as part of a
          research-driven course project, prioritizing functionality over
          advanced visuals.
        </li>
        <li>
          Established a foundation for future enhancements, including richer
          animations and expanded question sets, to further gamify database
          learning.
        </li>
      </ul>
    ),
    tech: ["Unity", "Python", "C#"],
    github: [
      {
        label: "Unity Project",
        url: "https://github.com/Nisarg1463/DatabaseGamified",
      },
      {
        label: "Python API",
        url: "https://github.com/Nisarg1463/DatabaseGamifiedAPI",
      },
    ],
    visuals:
      "https://drive.google.com/file/d/1xk5R4HjMc5yk1Jd3tNH_UGRp8VQxcpmH/view?usp=drive_link",
    notes: "Prototype visuals available.",
  },
  {
    title: "Project 132",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Integrated a WebView for seamless Microsoft Office access within the
          game environment, enabling in-game document handling and increasing
          productivity by 25%.
        </li>
        <li>
          Oversaw the complete integration process, ensuring smooth interaction
          between game systems and embedded Office tools.
        </li>
        <li>
          Coordinated multiple user tests and fine-tuned the WebView
          implementation, achieving a 95% positive user experience rating.
        </li>
        <li>
          Managed a team of four developers, optimizing workflows and reducing
          development time by 20% compared to initial estimates.
        </li>
      </ul>
    ),
    tech: ["Unreal Engine"],
    github: null,
    visuals: null,
    notes: "Source cannot be shared (university project).",
  },
  {
    title: "3D Game Engine (Basic)",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Built a lightweight 3D rendering engine, achieving 60+ FPS performance
          on mid-range hardware.
        </li>
        <li>
          Created custom shader programs, increasing rendering efficiency by 35%
          and introducing skyboxes and dynamic lighting.
        </li>
        <li>
          Implemented a modular class architecture, reducing code redundancy by
          30% and optimizing maintainability.
        </li>
        <li>
          Optimized vertex buffer objects (VBOs) and vertex array objects
          (VAOs), upgrading the rendering speed by 50% and enhancing the overall
          graphical performance.
        </li>
      </ul>
    ),
    tech: ["Unity", "Python", "C#"],
    github: [
      {
        label: "Github",
        url: "https://github.com/Nisarg1463/3d_Engine",
      },
    ],
    visuals: null,
    notes: null,
  },
];

const moreProjects = {
  videos:
    "https://drive.google.com/drive/folders/1lLYOi97VYRO2jFSdNXJn_QXtw6Mo121d?usp=drive_link",
  github: "https://github.com/Nisarg1463",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#232946] to-[#0f3460] flex flex-col items-center py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-yellow-300 mb-6 text-center"
      >
        Quest Log
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg text-[#eebbc3] mb-10 text-center max-w-2xl"
      >
        Here are the quests (projects) I've completed on my journey. Explore
        each to see my skills in action!
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
            className="bg-[#232946]/90 rounded-2xl border-4 border-yellow-400 shadow-xl p-6 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">
              {project.title}
            </h2>
            <div className="text-gray-200 mb-4">{project.description}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.visuals && (
              <a
                href={project.visuals}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-yellow-300 underline hover:text-yellow-200"
              >
                View Visuals
              </a>
            )}
            <div className="mt-auto flex flex-wrap gap-4">
              {Array.isArray(project.github)
                ? project.github.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#eebbc3] hover:bg-[#ffd6e0] text-[#232946] font-bold px-4 py-2 rounded-lg shadow transition"
                    >
                      {repo.label}
                    </a>
                  ))
                : project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#eebbc3] hover:bg-[#ffd6e0] text-[#232946] font-bold px-4 py-2 rounded-lg shadow transition"
                    >
                      GitHub
                    </a>
                  )}
            </div>
            {project.notes && (
              <div className="mt-4 text-sm text-gray-400 italic">
                {project.notes}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12 w-full max-w-3xl bg-[#181824]/80 rounded-xl border-2 border-yellow-400 p-6 text-center">
        <h3 className="text-xl font-bold text-yellow-300 mb-2">
          More Projects & Demos
        </h3>
        <p className="text-gray-200 mb-3">
          I have many more prototypes and non-game projects. Browse my video
          demos or explore my GitHub for a wider range of work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={moreProjects.videos}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-300 text-[#232946] font-bold px-4 py-2 rounded-lg shadow transition"
          >
            Video Demos
          </a>
          <a
            href={moreProjects.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#eebbc3] hover:bg-[#ffd6e0] text-[#232946] font-bold px-4 py-2 rounded-lg shadow transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

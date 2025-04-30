import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#232946] to-[#0f3460] flex items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl bg-[#232946]/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-yellow-400"
      >
        {/* Avatar */}
        <img
          src="https://api.dicebear.com/7.x/pixel-art/svg?seed=hero"
          alt="Avatar"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-lg mb-4"
        />
        {/* Name and Title */}
        <h1 className="text-3xl font-extrabold text-yellow-300 mb-1 text-center">
          Nisarg Patel
        </h1>
        <h2 className="text-xl text-[#eebbc3] mb-4 text-center font-semibold">
          Game Designer & Full Stack Developer
        </h2>

        {/* Download Resume Button */}
        <a
          href="/Assets/portfolio.pdf"
          download
          className="mb-6 inline-block px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-[#232946] font-bold rounded-xl shadow-lg text-base transition-all border-2 border-yellow-300"
        >
          📄 Download Resume (PDF)
        </a>

        {/* Bio */}
        <p className="text-gray-200 text-lg text-center mb-6">
          I’m a passionate game designer and developer with a strong foundation
          in computer science and hands-on experience across Unreal Engine,
          Unity, and full stack web development. I thrive on building immersive
          worlds, innovative mechanics, and intuitive user experiences-whether
          in games, apps, or research-driven prototypes. My journey includes
          leading teams, teaching others, and earning recognition for my
          creative and technical achievements.
        </p>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-6 w-full max-w-md">
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Level</span>
            <span className="text-white text-2xl font-mono">5</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">XP</span>
            <span className="text-white text-2xl font-mono">1240</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Location</span>
            <span className="text-white text-base font-mono text-center">
              Windsor, ON, Canada
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Languages</span>
            <span className="text-white text-base font-mono text-center">
              English, Gujarati, Hindi
            </span>
          </div>
        </div>
        {/* Skills */}
        <div className="w-full mb-6">
          <h3 className="text-yellow-300 font-bold text-lg mb-2 text-center">
            Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              C#
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Python
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              C++
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Java
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              JavaScript
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              SQL
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Unreal Engine
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Unity
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Blender
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Maya
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Git
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Docker
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Enemy AI
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Game Logic Scripting
            </span>
          </div>
        </div>
        {/* Education */}
        <div className="w-full mb-6">
          <h3 className="text-yellow-300 font-bold text-lg mb-2 text-center">
            Education
          </h3>
          <div className="text-gray-200 text-center text-base">
            <div>
              <span className="font-semibold">Master of Applied Computing</span>{" "}
              - University of Windsor
              <br />
              <span className="text-sm text-[#eebbc3]">GPA: 92.3</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">
                Bachelor of Engineering, Computer Science and Engineering
              </span>{" "}
              - R.N.G. Patel Institute of Technology
              <br />
              <span className="text-sm text-[#eebbc3]">CPI: 9.19</span>
            </div>
          </div>
        </div>
        {/* Achievements */}
        <div className="w-full mb-6">
          <h3 className="text-yellow-300 font-bold text-lg mb-2 text-center">
            Achievements & Leadership
          </h3>
          <ul className="text-gray-200 text-base list-disc pl-6">
            <li>
              Best Presentation Award, Demo Day, University of Windsor (2024)
            </li>
            <li>
              Organizer, 9-week Unreal Engine 5 Workshop Series, University of
              Windsor
            </li>
            <li>
              Core Member, Google Developer Student Clubs (GDSC), R.N.G. Patel
              Institute of Technology
            </li>
            <li>
              Volunteer Computer Instructor, Sardar Patel English Medium School
            </li>
            <li>Full Stack Developer Intern, L&T Heavy Engineering</li>
          </ul>
        </div>
        {/* Fun Fact or Interests */}
        <div className="bg-[#eebbc3]/20 border border-yellow-400 rounded-lg p-4 text-center text-yellow-200 font-semibold mb-2">
          <span role="img" aria-label="trophy">
            🏆
          </span>{" "}
          Favorite games: NFS Most Wanted, Cricket 07, FIFA 14, Call Of Duty
          Black OPS 2, GTA V, Call Of Duty Mobile
        </div>
        <div className="bg-[#eebbc3]/20 border border-yellow-400 rounded-lg p-4 text-center text-yellow-200 font-semibold">
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          Interests: Formula 1, Volleyball, Badminton, Cubes & Puzzles,
          Adventure Sports, Bike Riding, Road Trips
        </div>
      </motion.section>
    </div>
  );
}

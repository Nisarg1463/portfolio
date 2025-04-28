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
          Game Developer & Full Stack Engineer
        </h2>
        {/* Bio */}
        <p className="text-gray-200 text-lg text-center mb-6">
          Welcome to my character sheet! I’m a passionate developer who loves
          building interactive, immersive experiences-whether that’s through
          games, web apps, or experimental prototypes. My journey has taken me
          from designing AI-driven survival games to integrating productivity
          tools inside virtual worlds, always with a focus on creativity, user
          experience, and technical excellence.
        </p>
        {/* "Stats" */}
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
            <span className="text-yellow-300 font-bold text-lg">
              Specialties
            </span>
            <span className="text-white text-base font-mono text-center">
              Game Design, AI, Web Dev
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Location</span>
            <span className="text-white text-base font-mono text-center">
              [Your City/Country]
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
              Unreal Engine
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Unity
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              React
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Python
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              C#
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Blueprints
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              AI/ML
            </span>
            <span className="bg-yellow-400 text-[#232946] px-3 py-1 rounded-full text-xs font-bold">
              Web Dev
            </span>
          </div>
        </div>
        {/* Fun Fact or Achievement */}
        <div className="bg-[#eebbc3]/20 border border-yellow-400 rounded-lg p-4 text-center text-yellow-200 font-semibold">
          <span role="img" aria-label="trophy">
            🏆
          </span>{" "}
          Always ready for the next quest-let’s build something extraordinary
          together!
        </div>
      </motion.section>
    </div>
  );
}

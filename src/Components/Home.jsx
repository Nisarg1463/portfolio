import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#232946] to-[#0f3460] flex items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl bg-[#232946]/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-yellow-400"
      >
        {/* Avatar or Game Icon */}
        <div className="mb-6">
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=hero"
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
        {/* Headline */}
        <h1 className="text-4xl font-extrabold text-yellow-300 mb-2 text-center tracking-tight">
          Welcome to Nisarg's Portfolio
        </h1>
        {/* Subheadline */}
        <h2 className="text-xl text-[#eebbc3] mb-4 text-center font-semibold">
          Game Developer
        </h2>
        {/* Intro */}
        <p className="text-lg text-gray-200 text-center mb-8 leading-relaxed">
          Embark on a journey through my creative world! Explore my projects,
          discover my skills, and unlock achievements as you navigate this
          interactive portfolio. Ready to start your quest?
        </p>
        {/* Game-Inspired Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-base">Level</span>
            <span className="text-white text-2xl font-mono">5</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-base">XP</span>
            <span className="text-white text-2xl font-mono">1240</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-base">Quests</span>
            <span className="text-white text-2xl font-mono">9</span>
          </div>
        </div>
        {/* Call to Action */}
        <div className="flex flex-col gap-4 w-full">
          <Link
            to="/projects"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-[#232946] font-bold rounded-xl shadow-lg text-lg transition-all text-center"
          >
            Browse My Portfolio
          </Link>
          <Link
            to="/about"
            className="w-full py-3 bg-[#eebbc3] hover:bg-[#ffd6e0] text-[#232946] font-bold rounded-xl shadow-lg text-lg transition-all text-center"
          >
            Meet the Developer
          </Link>
          <Link
            to="/contact"
            className="w-full py-3 bg-[#393e46] hover:bg-[#232946] text-yellow-300 font-bold rounded-xl shadow-lg text-lg transition-all text-center border border-yellow-300"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

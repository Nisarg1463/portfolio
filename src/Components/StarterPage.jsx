import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function StarterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-[#232946] bg-opacity-95 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full border-4 border-yellow-400"
      >
        {/* Avatar or Icon */}
        <div className="mb-4">
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=player1"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
        {/* Name and Title */}
        <h1 className="text-3xl font-extrabold text-yellow-300 mb-1 text-center">
          Nisarg Patel
        </h1>
        <h2 className="text-xl text-[#eebbc3] mb-3 text-center">
          Game Developer
        </h2>
        {/* Bio */}
        <p className="text-lg text-gray-200 text-center mb-6">
          Welcome to my portfolio! Embark on a quest through my projects,
          skills, and achievements. Let’s level up together!
        </p>
        {/* Stats (like a character sheet) */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Level</span>
            <span className="text-white text-2xl font-mono">5</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">XP</span>
            <span className="text-white text-2xl font-mono">1200</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-300 font-bold text-lg">Quests</span>
            <span className="text-white text-2xl font-mono">12</span>
          </div>
        </div>
        {/* Call to Action */}
        <Link
          to="/home"
          className="mt-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-[#232946] font-bold rounded-xl shadow-lg transition-all text-lg"
        >
          Start Quest
        </Link>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Character Sheet", page: "about" },
  { label: "Quest Log", page: "projects" },
  { label: "Achievements", page: "achievements" },
  { label: "Contact the Guildmaster", page: "contact" },
];

export default function GameMenu() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col gap-6 w-96"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h1 className="text-3xl font-bold text-yellow-300 text-center mb-4">
        Adventurer's Portal
      </h1>
      {menuItems.map((item) => (
        <button
          key={item.page}
          className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-lg hover:scale-105 transition-transform mb-2 shadow-md"
        >
          {item.label}
        </button>
      ))}
    </motion.div>
  );
}

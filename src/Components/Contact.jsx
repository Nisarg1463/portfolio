import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Prepare data as application/x-www-form-urlencoded
    const formBody = Object.entries(form)
      .map(
        ([key, value]) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(value)
      )
      .join("&");

    try {
      const response = await fetch(
        "https://nisarg1463.pythonanywhere.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#232946] to-[#0f3460] flex items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl bg-[#232946]/90 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-8 border-4 border-yellow-400"
      >
        {/* Sidebar: Contact Info */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0">
          <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 text-center md:text-left">
            Contact the Guildmaster
          </h2>
          <p className="text-gray-200 mb-4 text-center md:text-left">
            Ready to start a new quest or collaborate? Send a message and I’ll
            get back to you within 48 hours!
          </p>
          <div className="mb-3">
            <span className="block text-yellow-300 font-bold">Email:</span>
            <a
              href="mailto:patel2nb@uwindsor.ca"
              className="text-[#eebbc3] hover:underline"
            >
              patel2nb@uwindsor.ca
            </a>
          </div>
          <div className="mb-3">
            <span className="block text-yellow-300 font-bold">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/nisarg-patel-gd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eebbc3] hover:underline"
            >
              linkedin.com/in/nisarg-patel-gd
            </a>
          </div>
          <div>
            <span className="block text-yellow-300 font-bold">GitHub:</span>
            <a
              href="https://github.com/Nisarg1463"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eebbc3] hover:underline"
            >
              github.com/Nisarg1463
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex-1">
          {!submitted ? (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-[#181824] text-yellow-300 placeholder-gray-400 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-[#181824] text-yellow-300 placeholder-gray-400 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="px-4 py-3 rounded-lg bg-[#181824] text-yellow-300 placeholder-gray-400 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="py-3 bg-yellow-400 hover:bg-yellow-300 text-[#232946] font-bold rounded-xl shadow-lg text-lg transition-all"
              >
                Send Message
              </button>
              {error && (
                <div className="text-red-400 font-bold text-center mt-2">
                  {error}
                </div>
              )}
            </form>
          ) : (
            <div className="text-center text-yellow-300 text-lg font-bold">
              🎉 Thank you for reaching out! I’ll respond as soon as possible.
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}

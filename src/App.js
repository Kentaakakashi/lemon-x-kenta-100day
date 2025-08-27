import React from "react";
import { motion } from "framer-motion";
import { GALLERY, TIMELINE, CHATS } from "./data";
import "./index.css";

function App() {
  return (
    <div className="bg-[#fff8f0] min-h-screen font-handwriting">
      <header className="text-center py-12 relative">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
          Kenta ❤️ Lemon
        </h1>
        <p className="text-lg mt-3 text-gray-700">
          100 Days of Us ✨
        </p>
        <motion.img
          src="/lemon.png"
          alt="lemon"
          className="w-12 absolute top-8 right-8"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </header>

      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl text-center mb-6 text-yellow-600">
          Our Journey 🍋
        </h2>
        <div className="space-y-6">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-pink-400"
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-xl text-pink-700 font-bold">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-pink-50">
        <h2 className="text-3xl text-center mb-6 text-pink-600">
          Our Gallery 📸
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {GALLERY.map((pic, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <img
                src={pic.src}
                alt="memory"
                className="rounded-lg shadow-md border-2 border-white"
              />
              <p className="text-center text-xs mt-1 text-gray-600">
                {pic.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 max-w-2xl mx-auto">
        <h2 className="text-3xl text-center mb-6 text-yellow-500">
          Funny Chats 💬
        </h2>
        <div className="space-y-4">
          {CHATS.map((c, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[70%] shadow-md ${c.from === "Kenta" ? "bg-yellow-100 ml-auto border border-yellow-300" : "bg-pink-100 mr-auto border border-pink-300"}`}
            >
              <p className="text-sm text-gray-800">
                <span className="font-bold">{c.from}: </span>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 bg-yellow-50">
        <p className="text-lg text-pink-700">
          100 days down, forever to go 💛 – Kenta
        </p>
      </footer>
    </div>
  );
}

export default App;
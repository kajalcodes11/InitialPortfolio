"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="h-screen bg-black text-white flex flex-col items-center justify-center">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-bold"
      >

        Kajal Kumari

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl mt-4"
      >

        Full Stack Developer

      </motion.p>

      <div className="flex gap-6 mt-10">

        <a
          href="https://github.com/kajalcodes11"
          target="_blank"
          className="
            bg-white
            text-black
            px-8
            py-4
            rounded-xl
            font-bold
            hover:scale-105
            transition
          "
        >

          GitHub

        </a>

        <a
          href="/resume.pdf"
          className="
            border
            border-white
            px-8
            py-4
            rounded-xl
            hover:bg-white
            hover:text-black
            transition
          "
        >

          Resume

        </a>

      </div>

    </section>

  );
}
"use client";

import { motion } from "framer-motion";

export default function About() {

  return (
<motion.section
  id="about"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="bg-gray-950 text-white py-32 px-10"
>

      <h1 className="text-5xl font-bold text-center">
        About Me
      </h1>

      <p className="max-w-3xl mx-auto text-center mt-10 text-xl leading-9">

        Hey , I am a passionate Full Stack Developer currently pursuing
        Computer Science Engineering.

      </p>

    </motion.section>

  );
}
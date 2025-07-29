
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../Context/LanguageContext/LanguageContext';



const skills = {
  "Programming Languages": ["C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["React js", "Next js", "Vite", "Tailwind CSS", "Bootstrap", "MUI","JQuery"],
  "Tools & Technologies": ["Vs Code", "Git", "GitHub", "Vercel", "Figma", "Postman"],
  "Software Engineering Concepts": ["Problem Solving", "Competitive Programming", "Data Structures", "Algorithms", "OOP"],
  "Soft Skills": ["Communication", "Problem Solving", "Time Management", "Teamwork","Self Learning"],
};

const categories = Object.keys(skills);

export default function SkillsSection() {
  const { language } = useLanguage();
  const [active, setActive] = useState("Programming Languages");

  return (
    <section id='skills' className="dark:border-background-light flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 bg-background-light dark:bg-background-dark border-b-8 border-primary-light shadow-xl">
      <motion.div
      viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center md:text-left"
      >
         <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
           {language === 'en' ? 'Skills' : 'المهارات'}
        </h1>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary-light text-background-light border-black"
                  : "border-zinc-400 text-zinc-700 dark:text-background-light hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills[active].map((skill) => (
            <motion.div
            viewport={{ once: true }}
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-orange-100 dark:bg-zinc-800 p-4 rounded-xl shadow-md text-center text-zinc-800 dark:text-background-light font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div> 
      </motion.div>
    </section>
  );
}

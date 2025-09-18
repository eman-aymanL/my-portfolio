import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import prod1 from "../../assets/prod1.jpg";

import img5 from "../../assets/blob5.svg"
import { useLanguage } from "../Context/LanguageContext/LanguageContext";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative shadow-xl border-b-8 border-primary-light dark:border-background-light bg-background-light dark:bg-background-dark pt-32 min-h-[calc(100vh-150px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-20 lg:px-40 py-12 md:py-8"
    >
      <img src={img5} alt="" className="absolute bottom-0 left-0 w-full opacity-50 z-0"/>
      <div className="flex-1 text-center md:text-left space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-white "
        >
          {language === "en" ? " Hi, Iam Eman Ayman" : "مرحباً, أنا إيمان أيمن"}
        </motion.h1>

        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold text-primary-light dark:text-background-light"
        >
          {language === "en"
            ? "  Iam a MERN stack Developer"
            : "أنا مطورة MERN Stack"}
        </motion.h2>

        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-md"
        >
          {language === "en"
            ? "Transforming Ideas Into Interactive Designs And Powerful WebSite Experience"
            : "أحوّل الأفكار إلى تصاميم تفاعلية وتجارب قوية لمواقع الويب"}
        </motion.p>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 pt-5 flex flex-col sm:flex-row items-center sm:items-start gap-4"
        >
          <a
            href="https://drive.google.com/file/d/15wH3iTD6b0of3i_rSjrC16RxTYNY4KMg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary-light dark:bg-background-light dark:text-gray-800 text-white rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            {language === "en" ? "CV" : "السيرة الذاتية"}
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-transparent border border-black text-black dark:text-white dark:border-white rounded-xl shadow-md hover:bg-primary-light hover:text-white transition-all duration-300"
          >
            {language === "en" ? "Contact Me" : "تواصل معي"}
          </a>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" px-5 flex justify-center md:justify-start gap-6 text-2xl text-primary-light dark:text-background-light"
        >
          <a href="https://github.com/eman-aymanL" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/eman-aymanl/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:emanaymanoffical@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089646141548"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
        </motion.div>
      </div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={prod1}
          alt="Eman Ayman"
          className="md:w-96 z-20 md:h-96 h-64 w-64 object-cover shadow-lg rounded-full"
        />
      </motion.div>
    </section>
  );
}

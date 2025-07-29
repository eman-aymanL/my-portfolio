import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../Context/LanguageContext/LanguageContext';




const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Contact() {
  const { language} = useLanguage();
  return (
    <section
      id="contact"
      className="h-[500px] px-12 md:px-28 lg:px-48 py-24 flex flex-col items-center justify-center bg-background-light dark:bg-background-dark shadow-xl"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-background-light mb-8"
      >
        {language === 'en' ? 'Contact me' : 'تواصل معي'}
      </motion.h2>
      <motion.h4
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        className="text-xl sm:text-2xl font-light text-gray-800 dark:text-background-light mb-10"
      >
        {language === 'en' ? 'Whether you have a project in mind, want to collaborate, Get in touch through any of the links below' : ' اذا كان لديك مشروع في ذهنك، أو ترغب في التعاون، تواصل معي من خلال أي من الروابط في الاسفل'}
        
      </motion.h4>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        className="px-10 flex flex-wrap gap-8 justify-center items-center"
      >
        <a 
          href="mailto:emanaymanoffical@gmail.com"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary transition"
        >
          <FaEnvelope size={50} className="mb-2" />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eman-aymanl/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary transition"
        >
          <FaLinkedin size={50} className="mb-2" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/eman-aymanL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary transition"
        >
          <FaGithub size={50} className="mb-2" />
          <span>GitHub</span>
        </a>
        <a
          href="https://wa.me/201154232694"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary transition"
        >
          <FaWhatsapp size={50} className="mb-2" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://www.facebook.com/emanAymanL/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary transition"
        >
          <FaFacebook size={50} className="mb-2" />
          <span>Facebook</span>
        </a>

        

        

        
      </motion.div>
    </section>
  );
}

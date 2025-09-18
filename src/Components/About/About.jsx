import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/programmer.json';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';
import polygon from "../../assets/polygon.svg"




const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function About() {
    const { language } = useLanguage();
  
  return (
    <section
      id="about"
      className="min-h-[70vh] relative dark:border-background-light flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 lg:px-40 py-16 bg-background-light dark:bg-background-dark border-b-8 border-primary-light shadow-xl"
    >
                  <img src={polygon} alt="" className="absolute bottom-0 h-full left-0 w-full opacity-10"/>
      
      <motion.div
      viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center md:text-left"
      >
        <h1 className="dark:text-background-light text-4xl mb-6 sm:text-5xl md:text-6xl font-extrabold text-gray-800 ">
         {language === 'en' ? 'About me' : 'من انا'}
        </h1>

        <p className="text-base sm:text-lg text-gray-700 dark:text-background-light leading-relaxed max-w-xl mx-auto md:mx-0">
        {language === 'en'
  ? "Iam Eman Ayman, a passionate Fullstack Developer with strong expertise in React.js, Next.js, Node.js, and MongoDB. I enjoy building complete web applications that combine intuitive, responsive user interfaces with scalable and secure backends. With a self-driven mindset, I continuously seek to improve my skills and explore new technologies. My focus is on delivering fast, accessible, and user-friendly applications that solve real-world problems. I’m open to exciting opportunities and love turning ideas into impactful digital solutions."
  : "مرحبًا! أنا إيمان أيمن، مطوّرة Fullstack شغوفة أمتلك خبرة قوية في React.js و Next.js و Node.js و MongoDB. أستمتع ببناء تطبيقات ويب متكاملة تجمع بين واجهات مستخدم سهلة الاستخدام ومتجاوبة مع خلفيات قوية وآمنة وقابلة للتوسّع. بعقلية مبادرة وطموحة، أسعى باستمرار لتطوير مهاراتي واستكشاف تقنيات جديدة. تركيزي ينصب على تقديم تطبيقات سريعة، سهلة الوصول، وصديقة للمستخدم تُحلّ مشكلات واقعية. أنا منفتحة على فرص مميزة وأحب تحويل الأفكار إلى حلول رقمية مؤثرة."
}

        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Player
          autoplay
          loop
          src={animationData}
          className=" sm:max-w-80 sm:max-h-80 md:max-w-[800px] md:max-h-[400px]"
        />
      </motion.div>
    </section>
  );
}

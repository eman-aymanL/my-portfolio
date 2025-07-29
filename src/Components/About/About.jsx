import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/programmer.json';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function About() {
    const { language } = useLanguage();
  
  return (
    <section
      id="about"
      className="min-h-72 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 lg:px-40 py-16 bg-background-light dark:bg-background-dark border-b-8 border-primary-light shadow-xl"
    >
      <motion.div
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
          ? 'Hi! I’m Eman Ayman, a passionate Frontend Developer with a strong foundation in React.js and a love for problem-solving. I enjoy crafting intuitive, responsive, and beautiful user interfaces. With a self-driven mindset, I continuously seek to improve my skills and explore new technologies. My focus is on building fast, accessible, and user-friendly web applications. I’m open to exciting opportunities and love turning ideas into digital reality.'
          : 'مرحبًا! أنا إيمان أيمن، مطوّرة واجهات أمامية شغوفة، أمتلك أساسًا قويًا في مكتبة ريأكت وشغفًا بحل المشكلات. أستمتع بتصميم واجهات مستخدم سهلة الاستخدام، متجاوبة، وجذابة. أسعى باستمرار لتطوير مهاراتي واكتشاف تقنيات جديدة بعقلية مبادرة وطموحة. تركيزي ينصب على بناء تطبيقات ويب سريعة، سهلة الوصول، وصديقة للمستخدم. أنا منفتحة على فرص مميزة وأحب تحويل الأفكار إلى واقع رقمي.'
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
          className="w-96 h-72 sm:w-80 sm:h-80 md:w-[800px] md:h-[400px]"
        />
      </motion.div>
    </section>
  );
}

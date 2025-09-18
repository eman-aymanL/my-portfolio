import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';
import polygon from "../../assets/polygon.svg";

export default function Awards() {
  const { language } = useLanguage();

  return (
    <section
      id="awards"
      className="relative dark:border-background-light min-h-80 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 dark:bg-background-dark bg-background-light border-b-8 border-primary-light shadow-xl"
    >
      <img src={polygon} alt="" className="z-0 h-full absolute bottom-0 left-0 w-full opacity-10"/>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
          {language === 'en' ? 'Awards' : 'الجوائز'}
        </h1>

        <div className="bg-orange-100 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
            {language === 'en' 
              ? 'Honorable Mention – ICPC ECPC Qualifications 2024' 
              : 'تنويه شرفي – مسابقة ICPC ECPC Qualifications 2024'}
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
            {language === 'en'
              ? 'Recognized for problem-solving and algorithmic skills during the International Collegiate Programming Contest (ICPC) – Egyptian Collegiate Programming Contest (ECPC) Qualifications.'
              : 'تم منحي تنويه شرفي تقديراً لمهاراتي في حل المشكلات والخوارزميات أثناء مسابقة البرمجة الجماعية للجامعات (ICPC) – التصفيات المصرية (ECPC).'}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

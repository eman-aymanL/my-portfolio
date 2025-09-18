import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';
import img5 from "../../assets/blob5.svg"



export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'en' ? 'Full Stack Development' : 'تطوير الويب المتكامل',
      description: language === 'en'
        ? 'Building modern web applications using React, Next.js, Node.js, Express, and databases. Creating responsive UI and robust backend APIs.'
        : 'بناء تطبيقات ويب حديثة باستخدام React وNext.js وNode.js وExpress وقواعد البيانات. إنشاء واجهات مستخدم متجاوبة وAPIs خلفية قوية.'
    },
    {
      title: language === 'en' ? 'Frontend Development' : 'تطوير الواجهات الأمامية',
      description: language === 'en'
        ? 'Designing and implementing beautiful, responsive, and user-friendly interfaces using React.js, Tailwind CSS, and best UI/UX practices.'
        : 'تصميم وتنفيذ واجهات جميلة ومتجاوبة وسهلة الاستخدام باستخدام React.js وTailwind CSS وأفضل ممارسات UI/UX.'
    },
    {
      title: language === 'en' ? 'Backend Development' : 'تطوير الواجهات الخلفية',
      description: language === 'en'
        ? 'Developing server-side applications and RESTful APIs using Node.js, Express, Nest.js, and integrating with databases like MongoDB and MySQL.'
        : 'تطوير تطبيقات الخادم وRESTful APIs باستخدام Node.js وExpress وNest.js، والتكامل مع قواعد البيانات مثل MongoDB وMySQL.'
    },
    {
      title: language === 'en' ? 'WordPress & CMS' : 'ووردبريس وأنظمة إدارة المحتوى',
      description: language === 'en'
        ? 'Creating, customizing, and managing websites with WordPress. Implementing plugins, themes, and optimizing website performance and SEO.'
        : 'إنشاء وتخصيص وإدارة المواقع باستخدام ووردبريس. تنفيذ الإضافات والقوالب وتحسين أداء الموقع وتحسين محركات البحث (SEO).'
    },
  ];

  return (
    <section
      id="services"
      className="relative dark:border-background-light min-h-80 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 dark:bg-background-dark bg-background-light border-b-8 border-primary-light shadow-xl"
    >
       <img src={img5} alt="" className="absolute bottom-0 left-0 w-full opacity-50 z-0"/>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
          {language === 'en' ? 'Services' : 'الخدمات'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-orange-100 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light"
            >
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-2">
                {service.title}
              </h2>
              <p className="mt-2 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';

import polygon2 from "../../assets/polygon.svg"

                 


export default function Education() {
    const { language } = useLanguage();



  return (
    <>
      <section
        id="education"
        className="relative dark:border-background-light min-h-80 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 dark:bg-background-dark bg-background-light border-b-8 border-primary-light shadow-xl"
      >
         <img src={polygon2} alt="" className="h-full absolute top-0 right-0 w-full opacity-10 z-0"/>
        <motion.div
        viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center md:text-left z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
            {language === 'en' ? 'Education' : 'التعليم '}
            
          </h1>

          <div className="bg-orange-100 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
              {language === 'en' ? 'Faculty of Computer Science, New Cairo Academy' : ' كلية علوم الحاسب، أكاديمية القاهرة الجديدة'}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">{language === 'en' ? '2023 - present' : 'من 2023 حتي الان'}</p>
            <p className="text-lg text-zinc-700 dark:text-background-light">
              {language === 'en' ? 'Bachelor degree in Computer Science' : ' بكالوريوس في علوم الحاسب'}
              
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
              {language === 'en' ? 'Currently pursuing a Bachelor degree with a strong academic background in core computer science subjects.' : 'حاليًا أدرس للحصول على درجة البكالوريوس، وأمتلك خلفية أكاديمية قوية في مواد علوم الحاسب الأساسية'}
              
            </p>

           
          </div>
          <div className="bg-orange-100 mt-5 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
              {language === 'en' ? 'Mahara-Teck' : 'مهارة تيك'}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">{language === 'en' ? '2023 - present' : 'من 2023 حتي الان'}</p>
            <p className="text-lg text-zinc-700 dark:text-background-light">
              {language === 'en' ? 'Java Script Course' : 'كورس جافا سكريبت'}
              
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
              {language === 'en' ? 'CLearned the core concepts of JavaScript including variables, functions, DOM manipulation, and ES6 features, with hands-on exercises to build interactive web pages' : 'تعلمت أساسيات لغةالجافا سكريبت بما يشمل المتغيرات والدوال والتعامل مع الـ DOM وميزات ES6، مع تطبيقات عملية لبناء صفحات ويب تفاعلية.'}
              
            </p>

           
          </div>

           <div className="bg-orange-100 mt-5 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
              {language === 'en' ? 'Route Academy' : ' اكاديميه روت'}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">{language === 'en' ? '2024 - 2025' : 'من 2024 حتي 2025'}</p>
            <p className="text-lg text-zinc-700 dark:text-background-light">
              {language === 'en' 
  ? 'Frontend Web Development Diploma' 
  : 'دبلومة تطوير واجهات الويب'} 
              
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
{language === 'en' 
  ? 'Completed a comprehensive diploma covering HTML, CSS, JavaScript, React.js, and Next.js. The program focused on building responsive and interactive user interfaces, applying modern development practices, and working with real-world projects to strengthen problem-solving and coding skills.' 
  : 'أتممت دبلومة شاملة في HTML وCSS وJavaScript وReact.js وNext.js. ركز البرنامج على بناء واجهات مستخدم متجاوبة وتفاعلية، وتطبيق أحدث الممارسات في التطوير، والعمل على مشاريع واقعية عززت من مهاراتي في البرمجة وحل المشكلات.'}
              
            </p>

           
          </div>
        
        
        
        
        </motion.div>
      </section>

    </>
  );
}

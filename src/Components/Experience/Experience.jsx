import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';
import polygon from "../../assets/polygon.svg"



export default function Experience() {
    const { language } = useLanguage();
  return (
    <>
      <section
        id="experience"
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
            {language === 'en' ? 'Experience' : 'الخبرة '}
            
          </h1>

          <div className="bg-orange-100  dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
{language === 'en' 
  ? 'NTI (National Telecommunication Institute)' 
  : 'المعهد القومي للاتصالات (NTI)'} 
            </h2>
            <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">{language === 'en' ? '2025' : '2025'}</p>
            <p className="text-lg text-zinc-700 dark:text-background-light">
{language === 'en' 
  ? 'MEAN Stack Development Internship' 
  : 'تدريب في تطوير MEAN Stack'} 
              
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
              {language === 'en' ? 'Gained hands-on experience in building fullstack web applications using MongoDB, Express.js, Angular, and Node.js. Focused on developing RESTful APIs, managing databases, and creating responsive user interfaces while applying modern development practices.' : 'اكتسبت خبرة عملية في بناء تطبيقات ويب متكاملة باستخدام MongoDB وExpress.js وAngular وNode.js. ركزت على تطوير واجهات برمجية (RESTful APIs)، وإدارة قواعد البيانات، وإنشاء واجهات مستخدم متجاوبة مع تطبيق أحدث ممارسات التطوير.'}
              
            </p>

           
          </div>


          <div className="bg-orange-100 mt-5 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
              {language === 'en' ? 'Elevvo teck' : 'ايليفو تيك'}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">{language === 'en' ? '2025' : '2025'}</p>
            <p className="text-lg text-zinc-700 dark:text-background-light">
              {language === 'en' ? 'Frontend development internship ' : 'تدريب ويب واجهه امامية'}
              
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
              {language === 'en' ? ' Completed a practical training program focused on building modern and responsive user interfaces using React.js. Learned component-based architecture, state management, React Hooks, and routing, while applying best practices for clean code and performance optimization. Worked on real-world projects to strengthen problem-solving and frontend development skills.' : 'أتممت برنامجًا تدريبيًا عمليًا ركّز على بناء واجهات مستخدم حديثة ومتجاوبة باستخدام React.js. تعلمت بنية المكوّنات (Component-based Architecture)، وإدارة الحالة، وReact Hooks، وRouting، مع تطبيق أفضل الممارسات لكتابة كود نظيف وتحسين الأداء. عملت على مشاريع واقعية مما عزز مهاراتي في حل المشكلات وتطوير الواجهات الأمامية.'}
              
            </p>

           
          </div>



          <div className="bg-orange-100 mt-5 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light">
  <h2 className="text-2xl font-semibold text-zinc-800 dark:text-background-light mb-1">
    {language === 'en' 
      ? 'IEEE ET5 Student Branch' 
      : 'فرع IEEE ET5 الطلابي'}
  </h2>
  <p className="text-sm text-zinc-500 dark:text-orange-100 mb-3">
    {language === 'en' ? 'Front-End Head & Instructor | 2025 – Present' : 'رئيس قسم الواجهة الأمامية ومدربة | 2025 – حتى الآن'}
  </p>
  <p className="mt-2 text-base text-zinc-600 dark:text-orange-100 leading-relaxed">
    {language === 'en'
      ? 'Responsible for leading the front-end team, preparing learning materials, and delivering interactive sessions on HTML, CSS, JavaScript, and React.js. Guide members through real-world projects and foster a collaborative learning environment.'
      : 'مسؤولة عن قيادة فريق الواجهة الأمامية، إعداد المواد التعليمية، وتقديم جلسات تفاعلية حول HTML وCSS وJavaScript وReact.js. أوجّه الأعضاء خلال مشاريع عملية وأعزز بيئة تعلم تعاونية.'}
  </p>
</div>


         
        
        
        
        
        </motion.div>
      </section>

    </>
  )
}

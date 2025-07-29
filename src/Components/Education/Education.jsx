import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';


import cert1 from '../../assets/cert1.png';
import cert2 from '../../assets/cert2.png';

export default function Education() {
    const { language } = useLanguage();

  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const certificates = [
    { id: 1, src: cert1, alt: 'Certificate 1' },
    { id: 2, src: cert2, alt: 'Certificate 2' },
 
  ];

  const openModal = (src) => {
    setActiveImage(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveImage(null);
  };

  return (
    <>
      <section
        id="education"
        className="min-h-80 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 dark:bg-background-dark bg-background-light border-b-8 border-primary-light shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
            {language === 'en' ? 'Education & Certificates' : 'التعليم والشهادات'}
            
          </h1>

          <div className="bg-orange-100 dark:bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-lg border-l-8 border-primary-light dark:border-background-light dark:border-primary-light">
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

            <div className="mt-10 border-t-2 dark:border-background-light border-primary-light p-6">
              
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
              >
                {certificates.map((cert) => (
                  <SwiperSlide key={cert.id}>
                    <div
                      onClick={() => openModal(cert.src)}
                      className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-md mx-auto"
                    >
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="w-full  object-cover rounded-xl border"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-2xl w-full p-4 bg-white rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-red-600 text-white w-8 h-8 rounded-full text-2xl font-bold flex items-center justify-center shadow-md hover:bg-red-700"
            >
              &times;
            </button>
            <img
              src={activeImage}
              alt="Full Certificate"
              className="w-full max-h-[75vh] object-contain rounded-md border"
            />
          </div>
        </div>
      )}
    </>
  );
}

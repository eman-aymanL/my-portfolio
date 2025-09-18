import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext/LanguageContext";

import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";
import cert3 from "../../assets/cert3.png";
import cert4 from "../../assets/cert4.png";
import polygon from "../../assets/polygon.svg";

export default function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const { language } = useLanguage();

  const certificates = [
    { id: 1, src: cert1, alt: "Certificate 1" },
    { id: 2, src: cert2, alt: "Certificate 2" },
    { id: 3, src: cert3, alt: "Certificate 3" },
    { id: 4, src: cert4, alt: "Certificate 4" },
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
    <section
      id="certificates"
      className="relative dark:border-background-light min-h-80 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 py-16 dark:bg-background-dark bg-background-light border-b-8 border-primary-light shadow-xl"
    >
      <img
        src={polygon}
        alt=""
        className="z-0 h-full absolute bottom-0 left-0 w-full opacity-10"
      />

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-10 text-center">
          {language === "en" ? "Certificates" : "الشهادات"}
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div
                onClick={() => openModal(cert.src)}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-md mx-auto bg-orange-100 dark:bg-zinc-900 p-4 border-l-8 border-primary-light dark:border-background-light"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showModal && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full p-4 bg-white dark:bg-zinc-900 rounded-xl"
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
                className="w-full max-h-[80vh] object-contain rounded-md border"
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

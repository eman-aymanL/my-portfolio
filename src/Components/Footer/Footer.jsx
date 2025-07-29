import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from '../Context/LanguageContext/LanguageContext';




export default function Footer() {
  const { language} = useLanguage();
  return (

    <footer className="dark:bg-primary-dark shadow-inner bg-primary-light py-8 text-center text-background-light">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 gap-4">
        <p className=" dark:text-gray-300 text-sm text-background-light">
          

          © {new Date().getFullYear()} {language === 'en' ? 'emanAyman All Rights Reserved' : ' emanAyman جميع الحقوق محفوظة'}
        </p>

        <div className="flex items-center gap-4 text-primary text-xl ">
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>
          <a
            href="mailto:eman@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope className="hover:text-red-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/eman-ayman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a
            href="https://github.com/eman-ayman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-800 dark:hover:text-white transition" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089646141548"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

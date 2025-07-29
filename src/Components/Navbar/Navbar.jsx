import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className=" border-b-2 border-background-light bg-primary-light dark:bg-primary-dark text-white shadow-lg sticky top-0 left-0 right-0 z-50 p-7">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500}>
          <h1 className='cursor-pointer text-background-light text-xl md:text-4xl'>emanAyman</h1>
        </Link>

        <ul className="hidden md:flex gap-10 text-background-light dark:text-background-light ">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'Home' : 'الرئيسية'}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'About' : 'من أنا'}
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'Education' : 'التعليم'}
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'Skills' : 'المهارات'}
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'Projects' : 'المشاريع'}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">
              {language === 'en' ? 'Contact' : 'تواصل معي'}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-background-light">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={toggleLanguage} className="bg-background-light text-primary-light px-3 py-1 rounded">
            {language === 'en' ? 'AR' : 'EN'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-background-light dark:text-background-light">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-primary-light dark:bg-primary-dark bg-opacity-95 shadow-md px-6 py-4 flex flex-col gap-4 text-background-light dark:text-background-light mt-12">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'Home' : 'الرئيسية'}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'About' : 'من أنا'}
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'Education' : 'التعليم'}
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'Skills' : 'المهارات'}
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'Projects' : 'المشاريع'}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {language === 'en' ? 'Contact' : 'تواصل معي'}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

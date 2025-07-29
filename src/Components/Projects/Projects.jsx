import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ecommerce from '../../assets/ecommerce.PNG'
import socialApp from '../../assets/socialapp.PNG'
import yummy from '../../assets/yummy.PNG'
import weather from '../../assets/weather.PNG'
import todo from '../../assets/todo.PNG'
import login from '../../assets/login.PNG'
import { motion } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext/LanguageContext';


            
const projects = [
  {
    title: "Fresh Cart",
    image: ecommerce,
    demo: "https://eman-aymanl.github.io/E-commerce/",
    github: "https://github.com/eman-aymanL/E-commerce",
    info: "A responsive e-commerce web application built with React and Tailwind CSS. This project simulates a real online store where users can browse products, add them to cart, and proceed to checkout. It features protected routes, form validation, API ",
    technologies: ["ٌReact js", "Vite", "Tailwind", "Axios","React Query"],

  },
  {
    title: "Social App",
    image: socialApp,
    demo: "https://social-app-virid-tau.vercel.app/login",
    github: "https://github.com/eman-aymanL/socialApp",
    info: "A modern and responsive social platform where users can sign up, log in, upload profile photos, create and manage posts, and interact via comments.",
    technologies: ["Next js", "TypeScript","MUI","Axios", "Redux", "API"],
  },
  {
    title: "Yummy",
    image: yummy,
    demo: "https://eman-aymanl.github.io/Yummy_site/",
    github: "https://github.com/eman-aymanL/Yummy_site",
    info: "a modern recipe browsing website that allows users to explore meals by category, area, or ingredients. It features meal search, detailed recipe views",
    technologies: ["React js","Tailwind", "SCSS", "Vite", "Axios"],
  },
  {
    title: "Weather",
    image: weather,
    demo: "https://eman-aymanl.github.io/weather-site-/",
    github: "https://github.com/eman-aymanL/weather-site-",
    info: "A simple weather application that allows users to search for any city and get current weather conditions including temperature, humidity, wind speed, and sky status using the OpenWeatherMap API.",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
  },
  {
    title: "Todo-List",
    image: todo,
    demo: "https://eman-aymanl.github.io/ToDo-Site/",
    github: "https://github.com/eman-aymanL/ToDo-Site",
    info: "A responsive CRUD (Create, Read, Update, Delete) system built with HTML, CSS, Bootstrap, and JavaScript. It features dynamic data management and a user-friendly interface. Key Features: Responsive design with Bootstrap. Full CRUD operations using JavaScript. Clean, modular, and customizable code.",
    technologies: ["HTML", "CSS", "Bootstrap","JavaScript"],
  },
  {
    title: "Smart Login",
    image: login,
    demo: "https://eman-aymanl.github.io/smart-login/",
    github: "https://github.com/eman-aymanL/smart-login",
    info: "Smart Login is a responsive login and signup system built with vanilla JavaScript. It allows users to register and log in with form validation, local storage for user data, and session simulation. The app features a clear interface, form error handling, and session persistence without backend.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","Local Storage","Regular Expressions"],
  },
];

export default function Projects() {
    const { language } = useLanguage();

  return (
    <div id='projects' className="dark:border-background-light min-h-screen px-8 py-10 dark:bg-background-dark  bg-background-light border-b-8 border-primary-light shadow-xl">
      <motion.div
      viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto text-center "
      >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-background-light mb-12 text-center">
            {language === 'en' ? 'Projects' : 'المشاريع'}



        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-orange-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-background-light">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 dark:text-background-light">{project.info}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-800 px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-background-light hover:text-black transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-background-light hover:text-blue-500 transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              
              </div>
            </div>
          </div>
        ))}
      </div>
        
      </motion.div>
    
    </div>
  );
}

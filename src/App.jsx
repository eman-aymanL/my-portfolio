import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { LanguageProvider } from './Components/Context/LanguageContext/LanguageContext';
import Certificates from './Components/Cerfticates/Certificates';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Awards from './Components/Awards/Awards';




function App() {

  return (
    <LanguageProvider>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Experience/>
    <Services/>
    <Projects/>
    <Awards/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </LanguageProvider>
  )
}

export default App

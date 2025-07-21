import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './components/Home/Home';
import './App.css';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Organizer from './components/Organizer/Organizer';


 const App = () => {
  return (
    <div>

      <Navbar/>
      <div className='container'>
        <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <Organizer/>
        <About/>
        <Contact/>

      </div>
      <Footer/>
      
    </div>
  )
}
export default App;



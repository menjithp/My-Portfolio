import Navbar from "./modules/navbar";
import Hero from './modules/Hero'
import About from './modules/about'
import Summary from './modules/summary'
import Experience from './modules/experience'
import Portfolio from "./modules/portfolio";
import Contact from "./modules/contact";
import Footer from './modules/Footer'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css'
import { useEffect } from "react";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const islaptop=/laptop/i.test(navigator.userAgent)

  useEffect(()=>{
    if (islaptop || !isMobile){
        document.body.classList.add("laptop-scrollbar")
    }
  },[])
  return (
    <div>
      <Navbar /> 
      <Hero />
      <About />
      <Summary />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

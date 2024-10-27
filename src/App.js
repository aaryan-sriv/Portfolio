import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


export default App;

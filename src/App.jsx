import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

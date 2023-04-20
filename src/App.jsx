import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Education,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Education/>
          <Experience/>
          <Tech/>
          {/* <Works/>
          <Feedbacks/> */}
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
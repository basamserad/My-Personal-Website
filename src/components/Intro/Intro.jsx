import React from 'react';
import './Intro.css';
import hero from '../../assets/home.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { SiGmail } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex h_top">
          <div className="row p_left">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Basam C. Serad</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    ' Software Developer.',
                    ' Web Developer.',
                    ' Front-end Developer.',
                    ' Back-end Developer.',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I'm a Software Developer specializing in web development. My
              passion is creating innovative web systems and I have a strong
              foundation in technologies such as Quasar Framework, Vuejs,
              Reactjs, Nodejs, Javascript, Typescript, HTML, CSS, and MySQL. On
              this website, you'll find examples of my work and my contact
              information. Thank you for visiting!
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a href="mailto:basamserad1223@gmail.com" target="_blank" rel="noreferrer">
                    <button className="btn_shadow">
                      <SiGmail />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/basamserad/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <BsLinkedin />
                    </button>
                  </a>
                  <a href="https://www.facebook.com/basam.serad.1998" target="_blank" rel="noreferrer">
                    <button className="btn_shadow">
                      <BsFacebook />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

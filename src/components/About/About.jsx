import React from 'react';
import './About.css';
import Me from '../../assets/Me.svg';

const About = () => {
  const data = [
    {
      catgeory: 'ABOUT ME',
      title: '',
      description:
        ' Motivated graduated student working toward Information Technology Degree. Hardworking and resourceful individual commended for first-rate collaboration, organizational and time management abilities. Committed to develop career path and expanding knowledge.',
    },
  ];
  return (
    <div>
      <section className="about" id='about'>
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="left row">
                  <img src={Me} alt="" />
                </div>
                <div className="right row">
                  <span className="baget">{value.catgeory}</span>
                  <h2>{value.title}</h2>
                  <p>{value.description}</p>
                  <button className="primary-btn">Download CV</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;

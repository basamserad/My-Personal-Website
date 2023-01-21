import React from 'react';
import { SiGmail } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { socialMedia } from '../constants';

const Gmailbutton = ({ styles }) => {
  return (
    <div className="flex flex-wrap my-6">
      {socialMedia.map((social, index) => (
        <button
          type="button"
          className={`py-4 mr-6 px-6 btnhover bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          onClick={() => window.open(social.link)}
          key={social.id}
        >
          <img
            src={social.icon}
            alt={social.id}
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          />
        </button>
      ))}

      {/* <a
        href="mailto:basamserad1223@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className={`py-4 px-6 btnhover bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          <SiGmail />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/basam-serad-19599823a/"
        target="_blank"
        rel="noreferrer"
        className="mx-6"
      >
        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          <BsLinkedin />
        </button>
      </a>
      <a
        href="https://www.facebook.com/basam.serad.1998"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          <BsFacebook />
        </button>
      </a> */}
    </div>
  );
};

export default Gmailbutton;

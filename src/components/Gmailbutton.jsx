import React from 'react';
import { socialMedia } from '../constants';

const Gmailbutton = ({ styles }) => {
  return (
    <div className="w-full flex justify-between items-center md:flex-row flex-col">
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[28px] h-[28px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gmailbutton;

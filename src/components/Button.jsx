import React from 'react';
import { resume } from '../assets';

const Button = ({ styles }) => (
  <button
    type="button"
    href={resume}
    download
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    <a href={resume} download>
      📥 Download my Resume
    </a>
  </button>
);

export default Button;

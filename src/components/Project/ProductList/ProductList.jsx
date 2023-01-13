import React from 'react';
import './ProductList.css';

const ProductList = ({ img, link }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={link} target="_blank" rel='noreferrer'>
          <img src={img} alt='' className='projectimg' />
      </a>
    </div>
  );
};

export default ProductList;

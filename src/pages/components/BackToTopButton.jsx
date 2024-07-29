import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-amazon_backtoTop hover:bg-amazon_backtoTop_onClick text-center text-white py-3 px-8 mt-10'>
        <button onClick={scrollToTop}>
      Back To Top
    </button>
    </div>
    
  )
}

export default BackToTopButton

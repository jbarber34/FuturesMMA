import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

export default function ScrollButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={'relative'}>
      {showTopBtn && (
        <FontAwesomeIcon
          icon={faArrowUp}
          inverse
          onClick={goToTop}
          className='hover:animate-wiggle fa-xl py-2 px-4 bg-futuresBlack fixed bottom-10 right-6 z-50'
        />
      )}
    </div>
  );
}

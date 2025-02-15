import { useState, useEffect } from 'react';

const FadeInComponent = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay); 

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export { FadeInComponent };


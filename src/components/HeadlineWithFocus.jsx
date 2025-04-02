import React, { useState, useEffect, memo } from 'react';

const HeadlineWithFocus = memo(({ children, modifierClassNames }) => {
  const [animationClassName, setAnimationClassName] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClassName('c-headline-focus--animation');
    }, 5);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1 
      className={`c-headline-focus ${modifierClassNames} ${animationClassName}`}
    >
      {children}
    </h1>
  );
});

export default HeadlineWithFocus;


import React, { useState, useEffect } from 'react';

import '../../../index.css';

interface SequentialShowProps {
  children: React.ReactNode[];
  delay: number;
}

const SequentialShow: React.FC<SequentialShowProps> = ({ children, delay }) => {
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChildIndex((prevIndex) => {
        if (prevIndex < children.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(timer);
          return prevIndex;
        }
      });
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [children, delay]);
  
function getRowStart(i: number) {
  if (i < 3) {
    return 1;
  } else {
    return 2;
  }
}

function getColStart(i: number) {
  if (i < 3) {
    return 3 + (4 * i);
  } else {
    return 1 + (4 * (i - 3));
  }
}

  return (
    <div className="grid grid-rows-2 grid-cols-14 gap-4 text-center">
      {children.map((child, index) => (
        // TODO: col-span-# and row-span-# override col-start-# and row-start-#, so how can we define the grid layout in a way that allows us to use col-start-# and row-start-#?
        <div key={index} className={`flex justify-center animation-pulse col-start-${getColStart(index)} col-span-2 row-start-${getRowStart(index)} row-span-1`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default SequentialShow;
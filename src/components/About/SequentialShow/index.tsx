import React, { useState, useEffect } from 'react';

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

  return (
    <div className="sequential-show">
      {children.map((child, index) => (
        <div key={index} className={`${currentChildIndex >= index ? "visible" : ""}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default SequentialShow;
import React from 'react';

interface HeartProps {
  className?: string;
}

const Heart: React.FC<HeartProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path
        d="M28.3,11.2C18-1.2,4,2.5,5.2,17.9c0.9,11,10.9,20.8,21.8,29.3c1.5,1.2,3.1,2.1,3.1,2.1s1.6-0.9,3.1-2.1 c10.9-8.5,20.9-18.3,21.8-29.3C56.2,2.5,41.2-1.2,28.3,11.2z"
        transform="rotate(-5 27 27)"
      />
    </svg>
  );
};

export default Heart;
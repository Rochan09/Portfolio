import React from 'react';

const WaveDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        className="block w-full h-12 sm:h-16"
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(59, 130, 246)"
          fillOpacity="0.08"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
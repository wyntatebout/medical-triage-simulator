
import React, { useMemo } from 'react';
import { useSimulator } from '@/context/SimulatorContext';

const Timer: React.FC = () => {
  const { timeRemaining, isHardMode } = useSimulator();
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  
  // Calculate the progress for the timer circle
  const totalTime = isHardMode ? 60 : 90;
  const dashArray = 2 * Math.PI * 54; // Circumference of circle with r=54
  const dashOffset = dashArray * (1 - timeRemaining / totalTime);
  
  // Determine the color based on time remaining
  const timerColor = useMemo(() => {
    if (timeRemaining <= 10) return '#e74c3c'; // danger - red
    if (timeRemaining <= 30) return '#f39c12'; // warning - orange
    return '#3498db'; // default - blue
  }, [timeRemaining]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[120px] h-[120px]">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle 
            className="stroke-gray-200" 
            cx="60" 
            cy="60" 
            r="54" 
            strokeWidth="8" 
            fill="none" 
          />
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            strokeWidth="8" 
            fill="none" 
            stroke={timerColor}
            strokeDasharray={dashArray} 
            strokeDashoffset={dashOffset} 
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dashoffset 0.3s linear' }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500">Time Remaining</div>
    </div>
  );
};

export default Timer;

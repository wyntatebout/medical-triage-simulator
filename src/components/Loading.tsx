
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-medical-secondary rounded-full animate-spin" />
    </div>
  );
};

export default Loading;


import React from 'react';
import { VitalSign } from '@/types';
import { cn } from '@/lib/utils';

interface VitalSignsProps {
  vitalSigns: VitalSign[];
}

const VitalSigns: React.FC<VitalSignsProps> = ({ vitalSigns }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
      {vitalSigns.map((vital, index) => (
        <div key={index} className="bg-gray-50 rounded-md p-3 text-center">
          <div 
            className={cn(
              "text-xl font-semibold mb-1",
              vital.isAbnormal ? "text-medical-danger" : ""
            )}
          >
            {vital.value}
          </div>
          <div className="text-xs text-gray-500">
            {vital.name} {vital.unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VitalSigns;

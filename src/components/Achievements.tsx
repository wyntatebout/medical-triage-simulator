
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const Achievements: React.FC = () => {
  const { achievements } = useSimulator();
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span className="text-medical-warning"><Trophy size={18} /></span>
        Achievements
      </h2>
      
      <div className="space-y-2">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={cn(
              "flex items-center gap-3 p-3 rounded-md transition-all",
              achievement.unlocked 
                ? "bg-green-50 border-l-4 border-medical-success" 
                : "bg-gray-50 border-l-4 border-gray-300 opacity-70"
            )}
          >
            <div 
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-xl",
                achievement.unlocked
                  ? "bg-green-100 text-medical-success"
                  : "bg-gray-200 text-gray-500"
              )}
            >
              {achievement.icon}
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium">
                {achievement.title}
                {achievement.unlocked && (
                  <span className="ml-1 text-xs bg-medical-success bg-opacity-20 text-medical-success px-1.5 py-0.5 rounded">
                    Unlocked
                  </span>
                )}
              </h3>
              <p className="text-xs text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

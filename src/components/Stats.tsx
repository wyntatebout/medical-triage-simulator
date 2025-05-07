
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Clock, CheckCircle, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const { stats } = useSimulator();
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span className="text-medical-secondary">
          <Award size={18} />
        </span>
        Performance Stats
      </h2>
      
      <ul className="space-y-2">
        <li className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Cases Completed</span>
          <span className="font-semibold">{stats.totalCases}</span>
        </li>
        
        <li className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Correct Decisions</span>
          <span className="font-semibold text-medical-success flex items-center gap-1">
            <CheckCircle size={16} />
            {stats.correctDecisions}
          </span>
        </li>
        
        <li className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Avg. Response Time</span>
          <span className="font-semibold flex items-center gap-1">
            <Clock size={16} />
            {stats.averageTime}s
          </span>
        </li>
        
        <li className="flex justify-between items-center py-2">
          <span className="text-gray-600">Current Streak</span>
          <span className="font-semibold">
            {stats.streak > 0 ? (
              <span className="text-medical-warning">🔥 {stats.streak}</span>
            ) : (
              stats.streak
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;

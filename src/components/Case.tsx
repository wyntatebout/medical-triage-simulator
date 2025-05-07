
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Case as CaseType } from '@/types';
import PatientInfo from './PatientInfo';
import VitalSigns from './VitalSigns';
import { AlertCircle } from 'lucide-react';

interface CaseProps {
  caseData: CaseType;
}

const Case: React.FC<CaseProps> = ({ caseData }) => {
  const { selectDecision } = useSimulator();
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-medical-primary text-white p-4 flex justify-between items-center">
        <div className="font-medium">
          Case {caseData.caseNumber} of {caseData.totalCases}
        </div>
        <div className={`
          px-2 py-1 text-xs font-semibold rounded
          ${caseData.difficulty === 'Easy' ? 'bg-medical-success' : 
            caseData.difficulty === 'Moderate' ? 'bg-medical-warning' : 
            'bg-medical-danger'}
        `}>
          {caseData.difficulty}
        </div>
      </div>
      
      <div className="p-6">
        <PatientInfo patientInfo={caseData.patientInfo} />
        
        <VitalSigns vitalSigns={caseData.vitalSigns} />
        
        <div className="bg-gray-50 rounded-md p-4 mb-6">
          <h3 className="text-base font-semibold mb-2">Current Presentation</h3>
          <p className="text-gray-700">{caseData.description}</p>
        </div>
        
        <h3 className="text-base font-semibold mb-3">What is your next step?</h3>
        <div className="space-y-3">
          {caseData.decisions.map((decision) => (
            <div 
              key={decision.id}
              onClick={() => selectDecision(decision)}
              className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-medical-secondary hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-gray-800 font-semibold mr-2">
                {decision.id}
              </span>
              {decision.text}
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
          <AlertCircle size={14} />
          <span>Select the best option based on the patient's presentation.</span>
        </div>
      </div>
    </div>
  );
};

export default Case;


import React from 'react';
import { PatientInfo as PatientInfoType } from '@/types';

interface PatientInfoProps {
  patientInfo: PatientInfoType;
}

const PatientInfo: React.FC<PatientInfoProps> = ({ patientInfo }) => {
  const { name, age, bmi, chiefComplaint, additionalInfo } = patientInfo;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-50 rounded-md p-3">
        <div className="text-xs text-gray-500 mb-1">Patient</div>
        <div className="font-semibold">{name}, {age}yo</div>
      </div>
      
      {bmi && (
        <div className="bg-gray-50 rounded-md p-3">
          <div className="text-xs text-gray-500 mb-1">BMI</div>
          <div className="font-semibold">{bmi}</div>
        </div>
      )}
      
      <div className="bg-gray-50 rounded-md p-3">
        <div className="text-xs text-gray-500 mb-1">Chief Complaint</div>
        <div className="font-semibold">{chiefComplaint}</div>
      </div>
      
      {additionalInfo && Object.entries(additionalInfo).map(([key, value], index) => (
        <div key={index} className="bg-gray-50 rounded-md p-3">
          <div className="text-xs text-gray-500 mb-1">{key}</div>
          <div className={`font-semibold ${key === 'HbA1c' && value.toString().includes('9.8') ? 'abnormal' : ''}`}>
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientInfo;

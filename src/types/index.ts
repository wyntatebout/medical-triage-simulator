
export interface PatientInfo {
  name: string;
  age: number;
  bmi?: number;
  chiefComplaint: string;
  additionalInfo?: Record<string, string | number>;
}

export interface VitalSign {
  name: string;
  value: string | number;
  unit: string;
  isAbnormal: boolean;
}

export interface Decision {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
  protocol?: string;
}

export interface Case {
  id: number;
  caseNumber: number;
  totalCases: number;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  patientInfo: PatientInfo;
  vitalSigns: VitalSign[];
  description: string;
  decisions: Decision[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserStats {
  totalCases: number;
  correctDecisions: number;
  averageTime: number;
  streak: number;
}

export interface UserSession {
  currentCaseIndex: number;
  caseResults: Array<{
    caseId: number;
    decisionId: string;
    timeSpent: number;
    isCorrect: boolean;
  }>;
  stats: UserStats;
  achievements: Achievement[];
}

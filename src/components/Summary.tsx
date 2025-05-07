
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { cases } from '@/data/mockData';
import { CheckCircle, XCircle, Clock, Medal, Gauge } from 'lucide-react';

const Summary: React.FC = () => {
  const { showSummary, stats, restartSimulation, session } = useSimulator();
  
  // Calculate final score percentage
  const scorePercentage = Math.round((stats.correctDecisions / cases.length) * 100);
  
  // Get appropriate feedback based on score
  const getFeedback = () => {
    if (scorePercentage >= 90) return { message: "Excellent work! You're demonstrating expert-level clinical judgment.", className: "text-medical-success" };
    if (scorePercentage >= 70) return { message: "Good job! You're showing solid clinical reasoning skills.", className: "text-medical-secondary" };
    if (scorePercentage >= 50) return { message: "You're on the right track. Keep practicing to improve your clinical decisions.", className: "text-medical-warning" };
    return { message: "You need more practice with clinical decision making. Review the feedback carefully.", className: "text-medical-danger" };
  };
  
  const feedback = getFeedback();
  
  return (
    <Dialog open={showSummary} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <div className="bg-medical-primary -mx-6 -mt-6 px-6 py-6 text-white">
            <DialogTitle className="text-2xl mb-2">Training Session Summary</DialogTitle>
            <div className="text-4xl font-bold my-4">{scorePercentage}%</div>
            <p className={`text-lg ${feedback.className}`}>{feedback.message}</p>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1">{stats.totalCases}</div>
              <div className="text-xs text-gray-500">Cases Completed</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1 text-medical-success">
                {stats.correctDecisions}
              </div>
              <div className="text-xs text-gray-500">Correct Decisions</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1">
                {stats.averageTime}s
              </div>
              <div className="text-xs text-gray-500">Avg Response Time</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1">
                {stats.streak}
              </div>
              <div className="text-xs text-gray-500">Best Streak</div>
            </div>
          </div>
          
          <h3 className="font-semibold mb-3">Case Review</h3>
          
          <div className="border rounded-md divide-y divide-gray-100 mb-6">
            {cases.map((caseItem, index) => {
              // Find the result for this case from the session instead of stats
              const result = session?.caseResults?.[index];
              const isCorrect = result?.isCorrect;
              
              return (
                <div key={caseItem.id} className="flex items-center gap-4 p-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCorrect ? 'bg-green-100 text-medical-success' : 'bg-red-100 text-medical-danger'
                  }`}>
                    {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-medium">
                      {caseItem.patientInfo.name}, {caseItem.patientInfo.age}yo
                    </div>
                    <div className="text-sm text-gray-600">
                      {caseItem.patientInfo.chiefComplaint}
                    </div>
                  </div>
                  
                  <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {caseItem.difficulty}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="border-t pt-4 text-center text-sm text-gray-500">
            <p>Continue practicing to improve your clinical decision-making skills.</p>
            <p>Remember that rapid and accurate triage decisions save lives!</p>
          </div>
        </div>
        
        <DialogFooter className="bg-gray-50 -mx-6 -mb-6 px-6 py-4">
          <Button onClick={restartSimulation} className="bg-medical-secondary hover:bg-medical-primary">
            Start New Training Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Summary;

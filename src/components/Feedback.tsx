
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, BookOpen, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const Feedback: React.FC = () => {
  const { showFeedback, closeFeedback, selectedDecision, goToNextCase } = useSimulator();
  
  if (!selectedDecision) return null;
  
  const isCorrect = selectedDecision.isCorrect;
  
  return (
    <Dialog open={showFeedback} onOpenChange={closeFeedback}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isCorrect ? 'bg-green-100 text-medical-success' : 'bg-red-100 text-medical-danger'
            }`}>
              {isCorrect ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
            </div>
            <DialogTitle className={isCorrect ? 'text-medical-success' : 'text-medical-danger'}>
              {isCorrect ? 'Correct Decision!' : 'Incorrect Decision'}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4">{selectedDecision.explanation}</p>
          
          {selectedDecision.protocol && (
            <div className="bg-blue-50 border-l-4 border-medical-secondary rounded-md p-4 my-4">
              <h4 className="font-medium flex items-center gap-2 mb-1">
                <BookOpen size={16} className="text-medical-secondary" />
                Clinical Protocol Reference
              </h4>
              <p className="text-sm text-gray-700">{selectedDecision.protocol}</p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button onClick={goToNextCase} className="bg-medical-secondary hover:bg-medical-primary">
            Next Case <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;

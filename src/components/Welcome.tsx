
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Clock, Stethoscope, Trophy, BookOpen } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const Welcome: React.FC = () => {
  const { showWelcome, startSimulation } = useSimulator();
  const [dontShowAgain, setDontShowAgain] = React.useState(false);
  
  return (
    <Dialog open={showWelcome} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <div className="bg-medical-primary -mx-6 -mt-6 px-6 py-6 text-white">
            <DialogTitle className="text-2xl mb-2">Welcome to the Medical Triage Simulator</DialogTitle>
            <DialogDescription className="text-gray-100">
              Test your clinical decision-making under pressure
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4">
            This simulator is designed to test and improve your ability to make critical medical
            decisions in time-sensitive situations. You'll be presented with a series of patient 
            cases requiring your assessment and decision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-medical-secondary flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-medium">Time Pressure</h4>
                <p className="text-sm text-gray-600">90 seconds to make each decision, simulating real ER conditions</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-medical-secondary flex items-center justify-center">
                <Stethoscope size={20} />
              </div>
              <div>
                <h4 className="font-medium">Realistic Cases</h4>
                <p className="text-sm text-gray-600">Based on actual patient scenarios with detailed medical data</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-medical-secondary flex items-center justify-center">
                <Trophy size={20} />
              </div>
              <div>
                <h4 className="font-medium">Track Progress</h4>
                <p className="text-sm text-gray-600">Earn achievements and monitor your performance statistics</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-medical-secondary flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="font-medium">Evidence-Based Feedback</h4>
                <p className="text-sm text-gray-600">Learn with feedback tied to clinical guidelines and protocols</p>
              </div>
            </div>
          </div>
          
          <p>Ready to test your skills? Click "Start Training" to begin!</p>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center bg-gray-50 -mx-6 -mb-6 px-6 py-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="dont-show-again" checked={dontShowAgain} onCheckedChange={() => setDontShowAgain(!dontShowAgain)} />
            <label htmlFor="dont-show-again" className="text-sm">Don't show this again</label>
          </div>
          
          <Button onClick={startSimulation} className="bg-medical-success hover:bg-medical-success/90">
            Start Training
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Welcome;

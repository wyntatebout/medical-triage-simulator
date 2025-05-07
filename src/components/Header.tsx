
import React from 'react';
import { useSimulator } from '@/context/SimulatorContext';
import { Hospital, HelpCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Header: React.FC = () => {
  const { isHardMode, toggleHardMode, restartSimulation } = useSimulator();
  
  return (
    <header className="bg-medical-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-medical-secondary"><Hospital size={24} /></span>
            <span className="text-xl font-bold">Medical Triage Simulator</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="hard-mode" 
                checked={isHardMode} 
                onCheckedChange={toggleHardMode} 
              />
              <Label htmlFor="hard-mode" className="text-white">Hard Mode</Label>
            </div>
            
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white text-white hover:bg-white/20"
              onClick={restartSimulation}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Restart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

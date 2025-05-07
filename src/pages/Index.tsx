
import React from 'react';
import { SimulatorProvider } from '@/context/SimulatorContext';
import { useSimulator } from '@/context/SimulatorContext';
import Header from '@/components/Header';
import Timer from '@/components/Timer';
import Stats from '@/components/Stats';
import Achievements from '@/components/Achievements';
import Case from '@/components/Case';
import Feedback from '@/components/Feedback';
import Welcome from '@/components/Welcome';
import Summary from '@/components/Summary';
import Loading from '@/components/Loading';
import { Progress } from '@/components/ui/progress';

const SimulatorContent: React.FC = () => {
  const { 
    currentCase, 
    isLoading, 
    progress, 
  } = useSimulator();

  return (
    <>
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Progress value={progress} className="h-2 mb-6" />
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            {currentCase && <Case caseData={currentCase} />}
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <Timer />
            </div>
            
            <Stats />
            
            <Achievements />
          </div>
        </div>
      </div>
      
      <Feedback />
      <Welcome />
      <Summary />
      {isLoading && <Loading />}
    </>
  );
};

const Index: React.FC = () => {
  return (
    <SimulatorProvider>
      <SimulatorContent />
    </SimulatorProvider>
  );
};

export default Index;

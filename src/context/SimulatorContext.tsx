
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Achievement, Case, Decision, UserSession, UserStats } from '@/types';
import { cases, initialAchievements, initialStats } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

interface SimulatorContextType {
  currentCase: Case | null;
  timeRemaining: number;
  isTimerRunning: boolean;
  showWelcome: boolean;
  showFeedback: boolean;
  showSummary: boolean;
  isHardMode: boolean;
  isLoading: boolean;
  selectedDecision: Decision | null;
  achievements: Achievement[];
  stats: UserStats;
  progress: number;
  session: UserSession; // Added this line to expose session
  
  startSimulation: () => void;
  closeWelcome: () => void;
  selectDecision: (decision: Decision) => void;
  closeFeedback: () => void;
  goToNextCase: () => void;
  restartSimulation: () => void;
  toggleHardMode: () => void;
}

const SimulatorContext = createContext<SimulatorContextType | undefined>(undefined);

export const SimulatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [session, setSession] = useState<UserSession>({
    currentCaseIndex: 0,
    caseResults: [],
    stats: { ...initialStats },
    achievements: initialAchievements,
  });
  const [currentCase, setCurrentCase] = useState<Case | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [isHardMode, setIsHardMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Load the current case
  useEffect(() => {
    if (session.currentCaseIndex < cases.length && !showWelcome && !showFeedback && !showSummary) {
      setCurrentCase(cases[session.currentCaseIndex]);
      setTimeRemaining(isHardMode ? 60 : 90); // Less time in hard mode
      setStartTime(Date.now());
      setIsTimerRunning(true);
    } else if (session.currentCaseIndex >= cases.length && !showWelcome && !showFeedback) {
      setShowSummary(true);
    }
  }, [session.currentCaseIndex, showWelcome, showFeedback, showSummary, isHardMode]);

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTimerRunning && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isTimerRunning && timeRemaining <= 0) {
      handleTimeUp();
    }
    
    return () => clearTimeout(timer);
  }, [isTimerRunning, timeRemaining]);

  // Check for achievements
  useEffect(() => {
    checkAchievements();
  }, [session.caseResults, session.stats]);

  const startSimulation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowWelcome(false);
      setIsLoading(false);
    }, 1000);
  };

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  const selectDecision = (decision: Decision) => {
    setIsTimerRunning(false);
    setSelectedDecision(decision);
    
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : timeRemaining;
    
    setSession(prev => {
      const newCaseResults = [
        ...prev.caseResults,
        {
          caseId: currentCase?.id || 0,
          decisionId: decision.id,
          timeSpent: timeSpent,
          isCorrect: decision.isCorrect,
        }
      ];
      
      const correctDecisions = newCaseResults.filter(result => result.isCorrect).length;
      const totalTimeTaken = newCaseResults.reduce((total, result) => total + result.timeSpent, 0);
      const streak = decision.isCorrect ? prev.stats.streak + 1 : 0;
      
      return {
        ...prev,
        caseResults: newCaseResults,
        stats: {
          totalCases: prev.stats.totalCases + 1,
          correctDecisions,
          averageTime: Math.floor(totalTimeTaken / newCaseResults.length),
          streak,
        }
      };
    });
    
    setShowFeedback(true);
    
    // Show toast notification
    toast({
      title: decision.isCorrect ? "Correct Decision!" : "Incorrect Decision",
      description: decision.isCorrect ? 
        "Great job! Your clinical reasoning was sound." : 
        "Review the feedback to understand the appropriate approach.",
      variant: decision.isCorrect ? "default" : "destructive",
    });
  };

  const closeFeedback = () => {
    setShowFeedback(false);
  };

  const goToNextCase = () => {
    setIsLoading(true);
    setShowFeedback(false);
    
    setTimeout(() => {
      setSession(prev => ({
        ...prev,
        currentCaseIndex: prev.currentCaseIndex + 1
      }));
      setSelectedDecision(null);
      setIsLoading(false);
    }, 1000);
  };

  const restartSimulation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSession({
        currentCaseIndex: 0,
        caseResults: [],
        stats: { ...initialStats },
        achievements: initialAchievements.map(a => ({ ...a, unlocked: false })),
      });
      setShowSummary(false);
      setSelectedDecision(null);
      setIsLoading(false);
    }, 1000);
  };

  const toggleHardMode = () => {
    setIsHardMode(prev => !prev);
    
    toast({
      title: isHardMode ? "Hard Mode Deactivated" : "Hard Mode Activated",
      description: isHardMode ? 
        "Standard time limits restored." : 
        "Reduced time and stricter scoring. Good luck!",
      variant: isHardMode ? "default" : "destructive",
    });
  };

  const handleTimeUp = () => {
    setIsTimerRunning(false);
    
    toast({
      title: "Time's Up!",
      description: "You ran out of time. In real emergencies, quick decisions are critical.",
      variant: "destructive",
    });
    
    // Find incorrect decision to use as default
    const incorrectDecision = currentCase?.decisions.find(d => !d.isCorrect) || null;
    if (incorrectDecision) {
      selectDecision(incorrectDecision);
    }
  };

  const checkAchievements = () => {
    const updatedAchievements = [...session.achievements];
    let achievementUnlocked = false;
    
    // Check first case achievement
    if (session.stats.totalCases === 1 && !updatedAchievements.find(a => a.id === "first_case")?.unlocked) {
      const index = updatedAchievements.findIndex(a => a.id === "first_case");
      updatedAchievements[index].unlocked = true;
      achievementUnlocked = true;
    }
    
    // Check perfect score achievement
    if (session.stats.totalCases >= 5 && 
        session.stats.totalCases === session.stats.correctDecisions && 
        !updatedAchievements.find(a => a.id === "perfect_score")?.unlocked) {
      const index = updatedAchievements.findIndex(a => a.id === "perfect_score");
      updatedAchievements[index].unlocked = true;
      achievementUnlocked = true;
    }
    
    // Check time master achievement
    const fastDecision = session.caseResults.some(result => result.timeSpent <= 30);
    if (fastDecision && !updatedAchievements.find(a => a.id === "time_master")?.unlocked) {
      const index = updatedAchievements.findIndex(a => a.id === "time_master");
      updatedAchievements[index].unlocked = true;
      achievementUnlocked = true;
    }
    
    // Check streak achievement
    if (session.stats.streak >= 3 && !updatedAchievements.find(a => a.id === "streak_3")?.unlocked) {
      const index = updatedAchievements.findIndex(a => a.id === "streak_3");
      updatedAchievements[index].unlocked = true;
      achievementUnlocked = true;
    }
    
    // Check hard case achievement
    const solvedHardCase = session.caseResults.some(result => {
      const caseData = cases.find(c => c.id === result.caseId);
      return caseData?.difficulty === "Hard" && result.isCorrect;
    });
    
    if (solvedHardCase && !updatedAchievements.find(a => a.id === "hard_case")?.unlocked) {
      const index = updatedAchievements.findIndex(a => a.id === "hard_case");
      updatedAchievements[index].unlocked = true;
      achievementUnlocked = true;
    }
    
    // If any achievement was unlocked, update state and show toast
    if (achievementUnlocked) {
      setSession(prev => ({
        ...prev,
        achievements: updatedAchievements
      }));
      
      const newAchievement = updatedAchievements.find(a => a.unlocked && !session.achievements.find(old => old.id === a.id && old.unlocked));
      
      if (newAchievement) {
        toast({
          title: "Achievement Unlocked!",
          description: `${newAchievement.title}: ${newAchievement.description}`,
          variant: "default",
        });
      }
    }
  };

  // Calculate progress
  const progress = (session.currentCaseIndex / cases.length) * 100;

  return (
    <SimulatorContext.Provider value={{
      currentCase,
      timeRemaining,
      isTimerRunning,
      showWelcome,
      showFeedback,
      showSummary,
      isHardMode,
      isLoading,
      selectedDecision,
      achievements: session.achievements,
      stats: session.stats,
      progress,
      session, // Added this line to expose session
      startSimulation,
      closeWelcome,
      selectDecision,
      closeFeedback,
      goToNextCase,
      restartSimulation,
      toggleHardMode
    }}>
      {children}
    </SimulatorContext.Provider>
  );
};

export const useSimulator = () => {
  const context = useContext(SimulatorContext);
  if (context === undefined) {
    throw new Error('useSimulator must be used within a SimulatorProvider');
  }
  return context;
};

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobSelector from "@/components/JobSelector";
import Dashboard from "@/components/Dashboard";

type AppState = 'hero' | 'selector' | 'dashboard';

interface Selection {
  roleId: string;
  level: 'junior' | 'mid' | 'senior';
  country: string;
  hoursPerWeek: number;
}

const Index = () => {
  const [state, setState] = useState<AppState>('hero');
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleGetStarted = () => {
    setState('selector');
  };

  const handleSelect = (sel: Selection) => {
    setSelection(sel);
    setState('dashboard');
  };

  const handleBack = () => {
    setState('selector');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {state === 'hero' && <Hero onGetStarted={handleGetStarted} />}
        {state === 'selector' && <JobSelector onSelect={handleSelect} />}
        {state === 'dashboard' && selection && (
          <Dashboard selection={selection} onBack={handleBack} />
        )}
      </main>
    </div>
  );
};

export default Index;

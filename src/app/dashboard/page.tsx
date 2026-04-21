import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { InsightsPanel } from "@/components/dashboard/InsightsPanel";
import { ReadinessScore } from "@/components/dashboard/ReadinessScore";

export default function DashboardPage() {
  const userName = "Aditya";
  const electionPhase = "Nomination Filing";
  const daysLeft = 14;
  const learningScore = 35; // out of 100

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2" tabIndex={0} aria-label="ElectraFlow Logo">
          <Activity className="w-5 h-5 text-accent" aria-hidden="true" />
          <span className="font-bold text-foreground">ElectraFlow</span>
        </div>
        <nav className="flex items-center gap-4" aria-label="Main Navigation">
          <Link href="/simulator" tabIndex={-1}>
            <Button variant="outline" size="sm" className="hidden sm:flex bg-white/5 border-white/10 hover:bg-white/10 text-foreground font-medium">
              Mock EVM Simulator
            </Button>
          </Link>
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold border border-primary/30 text-primary" aria-label={`User Profile: ${userName}`} tabIndex={0}>
            {userName.substring(0,2).toUpperCase()}
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <WelcomeSection 
          userName={userName} 
          electionPhase={electionPhase} 
          daysLeft={daysLeft} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InsightsPanel />
          </div>
          <div>
             <ReadinessScore learningScore={learningScore} />
          </div>
        </div>
      </main>
    </div>
  );
}

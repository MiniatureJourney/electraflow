import { CalendarDays } from "lucide-react";

interface WelcomeSectionProps {
  userName: string;
  electionPhase: string;
  daysLeft: number;
}

export function WelcomeSection({ userName, electionPhase, daysLeft }: WelcomeSectionProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4" aria-label="Welcome Status" tabIndex={0}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back, {userName}</h1>
        <p className="text-muted-foreground mt-1 text-base">
          You are currently in the <span className="text-accent font-semibold">{electionPhase}</span> phase.
        </p>
      </div>
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl w-full md:w-auto">
         <CalendarDays className="w-5 h-5 text-chart-3" aria-hidden="true" />
         <span className="font-semibold text-foreground text-base">{daysLeft} days</span>
         <span className="text-sm text-foreground/80">until Polling Day</span>
      </div>
    </section>
  );
}

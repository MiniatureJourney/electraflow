import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Activity, CalendarDays, BookOpen, Clock, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  const userName = "Aditya";
  const electionPhase = "Nomination Filing";
  const daysLeft = 14;
  const learningScore = 35; // out of 100

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" />
          <span className="font-bold">ElectraFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/simulator">
            <Button variant="outline" size="sm" className="hidden sm:flex bg-white/5 border-white/10 hover:bg-white/10">
              Mock EVM Simulator
            </Button>
          </Link>
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold border border-primary/30">
            AS
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}</h1>
            <p className="text-muted-foreground mt-1">You are currently in the <span className="text-accent font-medium">{electionPhase}</span> phase.</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl w-full md:w-auto">
             <CalendarDays className="w-5 h-5 text-chart-3" />
             <span className="font-semibold">{daysLeft} days</span>
             <span className="text-sm text-muted-foreground">until Polling Day</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Insights Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-primary/5 border-primary/20 shadow-lg shadow-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Your AI Learning Insights
                </CardTitle>
                <CardDescription>Personalized recommendations based on your progress.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-accent flex gap-3">
                    <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Update your Voter ID Details</h4>
                      <p className="text-sm text-muted-foreground mt-1">The deadline to correct details on the electoral roll is in 3 days. Since you marked yourself as a first-time voter, double-check your form status.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Model Code of Conduct Mastered</h4>
                      <p className="text-sm text-muted-foreground mt-1">You successfully passed the MCC quiz yesterday. Keep up the streak!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <div className="space-y-1">
                   <CardTitle className="text-lg">Constituency Timeline</CardTitle>
                   <CardDescription>Mumbai South Official Schedule</CardDescription>
                 </div>
                 <Button variant="ghost" size="sm" className="hidden sm:flex gap-1" asChild>
                    <Link href="/timeline">View Full Timeline <ChevronRight className="w-4 h-4" /></Link>
                 </Button>
               </CardHeader>
               <CardContent className="pt-4">
                 {/* Mini Timeline UI */}
                 <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                   {[
                     { title: "Elections Announced", date: "April 10", done: true },
                     { title: "Voter List Finalized", date: "April 15", done: true },
                     { title: "Nominations Filed", date: "April 20", done: false, current: true },
                     { title: "Polling Day", date: "May 5", done: false },
                   ].map((step, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10 ${step.done ? 'bg-chart-2/20 border-chart-2 text-chart-2' : step.current ? 'bg-accent/20 border-accent text-accent animate-pulse' : 'bg-background border-white/20 text-muted-foreground'}`}>
                           {step.done ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm">{step.title}</span>
                            <span className="text-xs text-muted-foreground font-medium">{step.date}</span>
                          </div>
                        </div>
                      </div>
                   ))}
                 </div>
               </CardContent>
            </Card>
          </div>

          {/* Right Sidebar (Progress) */}
          <div className="space-y-6">
             <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Readiness Score</CardTitle>
                  <CardDescription>Your civic education progress.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-6">
                   <div className="relative w-40 h-40 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" className="stroke-white/10" />
                        <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" className="stroke-accent" strokeDasharray="283" strokeDashoffset={283 - (283 * learningScore) / 100} strokeLinecap="round" />
                     </svg>
                     <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold">{learningScore}%</span>
                        <span className="text-xs text-muted-foreground">Mastered</span>
                     </div>
                   </div>
                   <p className="mt-6 text-center text-sm text-muted-foreground">Complete quizzes and mock booths to increase your score before polling day!</p>
                   <Link href="/simulator" className="w-full mt-6">
                     <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                       Take AI Quiz
                     </Button>
                   </Link>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
